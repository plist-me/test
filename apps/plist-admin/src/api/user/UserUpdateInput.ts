import { InputJsonValue } from "../../types";
import { TrackUpdateManyWithoutUsersInput } from "./TrackUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tracks?: TrackUpdateManyWithoutUsersInput;
  username?: string;
};
