import { ArtistCreateNestedManyWithoutTracksInput } from "./ArtistCreateNestedManyWithoutTracksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackCreateInput = {
  artists?: ArtistCreateNestedManyWithoutTracksInput;
  name: string;
  user?: UserWhereUniqueInput | null;
};
