import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type ArtistUpdateInput = {
  name?: string | null;
  track?: TrackWhereUniqueInput | null;
};
