import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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