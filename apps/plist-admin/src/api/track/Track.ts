import { Artist } from "../artist/Artist";
import { User } from "../user/User";

export type Track = {
  artists?: Array<Artist>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  user?: User | null;
};
