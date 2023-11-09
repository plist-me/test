import { ArtistUpdateManyWithoutTracksInput } from "./ArtistUpdateManyWithoutTracksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackUpdateInput = {
  artists?: ArtistUpdateManyWithoutTracksInput;
  name?: string;
  user?: UserWhereUniqueInput | null;
};
