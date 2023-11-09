import { InputJsonValue } from "../../types";
import { TrackCreateNestedManyWithoutUsersInput } from "./TrackCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tracks?: TrackCreateNestedManyWithoutUsersInput;
  username: string;
};
