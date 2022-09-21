// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EventSlot, Event, Artist } = initSchema(schema);

export {
  EventSlot,
  Event,
  Artist
};