import { JsonValue } from "type-fest";
import { Track } from "../track/Track";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tracks?: Array<Track>;
  updatedAt: Date;
  username: string;
};
