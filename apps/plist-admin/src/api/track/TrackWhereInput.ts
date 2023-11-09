import { ArtistListRelationFilter } from "../artist/ArtistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrackWhereInput = {
  artists?: ArtistListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
