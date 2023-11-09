import { Track } from "../track/Track";

export type Artist = {
  createdAt: Date;
  id: string;
  name: string | null;
  track?: Track | null;
  updatedAt: Date;
};
