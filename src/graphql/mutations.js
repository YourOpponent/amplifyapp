/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventSlot = /* GraphQL */ `
  mutation CreateEventSlot(
    $input: CreateEventSlotInput!
    $condition: ModelEventSlotConditionInput
  ) {
    createEventSlot(input: $input, condition: $condition) {
      id
      event_id
      artist_id
      time
      length
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEventSlot = /* GraphQL */ `
  mutation UpdateEventSlot(
    $input: UpdateEventSlotInput!
    $condition: ModelEventSlotConditionInput
  ) {
    updateEventSlot(input: $input, condition: $condition) {
      id
      event_id
      artist_id
      time
      length
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEventSlot = /* GraphQL */ `
  mutation DeleteEventSlot(
    $input: DeleteEventSlotInput!
    $condition: ModelEventSlotConditionInput
  ) {
    deleteEventSlot(input: $input, condition: $condition) {
      id
      event_id
      artist_id
      time
      length
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      event_name
      start_time
      end_time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      event_name
      start_time
      end_time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      event_name
      start_time
      end_time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
      id
      visual_name
      twitchName
      description
      image
      location
      email
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      visual_name
      twitchName
      description
      image
      location
      email
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      visual_name
      twitchName
      description
      image
      location
      email
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
