import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type ArtistCreateInput = {
  name?: string | null;
  track?: TrackWhereUniqueInput | null;
};
