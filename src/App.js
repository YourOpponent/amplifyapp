import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { Artist } from './models';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import { listArtists } from './graphql/queries';
import { createArtist as createArtistMutation, deleteArtist as deleteArtistMutation } from './graphql/mutations';

const initialFormState = { visual_name: '', twitchName: '', description: '', location: '', email: '', slug:'' }


function App() {
  const [Artists, setArtists] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchArtists();
  }, []);

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.visual_name });
    await Storage.put(file.visual_name, file);
    fetchArtists();
  }

  async function fetchArtists() {
    //Original
    // const apiData = await API.graphql({ query: listArtists });
    // const ArtistsFromAPI = apiData.data.listArtists.items;
    // await Promise.all(ArtistsFromAPI.map(async Artist => {
    //   if (Artist.image) {
    //     const image = await Storage.get(Artist.image);
    //     Artist.image = image;
    //   }
    //   return Artist;
    // }));
    // setArtists(apiData.data.listArtists.items);

    // Diff
    const Artists = await DataStore.query(Artist);
    setArtists(Artists);
  }

  async function createArtist() {
    if (!formData.visual_name || !formData.description) return;
    await API.graphql({ query: createArtistMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setArtists([ ...Artists, formData ]);
    setFormData(initialFormState);
  }

  async function deleteArtist({ id }) {
    const newArtistsArray = Artists.filter(Artist => Artist.id !== id);
    setArtists(newArtistsArray);

    //Original
    // await API.graphql({ query: deleteArtistMutation, variables: { input: id  }});

    //Diff way
    const ArtistToDelete = await DataStore.query(Artist, id );
    DataStore.delete(ArtistToDelete);
  }

  return (
    <div className="App">
      <h1>My Artists App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'visual_name': e.target.value})}
        placeholder="Artist name"
        value={formData.visual_name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'twitchName': e.target.value})}
        placeholder="Artist Twitch Name"
        value={formData.twitchName}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Artist description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'location': e.target.value})}
        placeholder="Artist Location"
        value={formData.location}
      />
      <input
        onChange={e => setFormData({ ...formData, 'email': e.target.value})}
        placeholder="Artist Email"
        value={formData.email}
      />
      <input
        onChange={e => setFormData({ ...formData, 'slug': e.target.value})}
        placeholder="Artist Slug"
        value={formData.slug}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createArtist}>Create Artist</button>
      <div style={{marginBottom: 30}}>
        {
          Artists.map(Artist => (
            <div key={Artist.id || Artist.visual_name}>
              <h2>{Artist.id}</h2>
              <p>{Artist.visual_name}</p>
              <p>{Artist.twitchName}</p>
              <p>{Artist.description}</p>
              <p>{Artist.location}</p>
              <p>{Artist.email}</p>
              <p>{Artist.slug}</p>
              
              {/* <p>{Artist.image}</p> */}
              <button onClick={() => deleteArtist(Artist)}>Delete Artist</button>
              {
                Artist.image && <img src={Artist.image} style={{width: 400}} alt=""/>
              }
            </div>
          ))
        }
      </div>

      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>
              Hey {user.username}, welcome to my channel, with auth!
            </p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);