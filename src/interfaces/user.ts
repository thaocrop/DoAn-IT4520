import { Status, UserType } from "@configs";

export interface IUser {
    _id: string;
    user_name: string;
    status: Status;
    user_type: UserType;
    createdAt: string;
    updatedAt: string;
}
