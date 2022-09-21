import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type EventSlotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EventSlot {
  readonly id: string;
  readonly event_id?: string | null;
  readonly artist_id?: string | null;
  readonly time?: string | null;
  readonly length?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EventSlot, EventSlotMetaData>);
  static copyOf(source: EventSlot, mutator: (draft: MutableModel<EventSlot, EventSlotMetaData>) => MutableModel<EventSlot, EventSlotMetaData> | void): EventSlot;
}

export declare class Event {
  readonly id: string;
  readonly event_name?: string | null;
  readonly start_time?: number | null;
  readonly end_time?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Artist {
  readonly id: string;
  readonly visual_name: string;
  readonly twitchName?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly location?: string | null;
  readonly email?: string | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Artist, ArtistMetaData>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist, ArtistMetaData>) => MutableModel<Artist, ArtistMetaData> | void): Artist;
}