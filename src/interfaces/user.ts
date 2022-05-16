import { Status, UserType } from "@configs";

export interface IUserRate {
    id: string;
    rate: number;
}

export interface IUser {
    _id: string;
    user_name: string;
    status: Status;
    user_type: UserType;
    posts_like: string[];
    posts_rate: IUserRate[];
    createdAt: string;
    updatedAt: string;
}
