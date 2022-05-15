import { Status } from "@configs";
import { ILocation } from "./location";
import { IPage } from "./page";

export interface IPostForm {
    title: string;
    slug: string;
    location_id?: string;
    address: string;
    short_description: string;
    content: string;
    image_url: string;
}

export interface IPost extends IPostForm {
    _id: string;
    location: ILocation;
    user_id: string;
    user_name: string;
    like?: number;
    comments: Comment[];
    status: Status;
    rates: number[];
    rate: number;
    createdAt: Date;
    updateAt: Date;
}

export type comment = {
    user_name: string;
    comment: string;
    createdAt: Date;
};

export interface IPostPage extends IPage {
    status?: Status;
}
