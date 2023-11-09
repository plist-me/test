import { SortOrder } from "../../util/SortOrder";

export type ArtistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  trackId?: SortOrder;
  updatedAt?: SortOrder;
};
