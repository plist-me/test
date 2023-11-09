import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type ArtistWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  track?: TrackWhereUniqueInput;
};
