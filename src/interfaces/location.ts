import { LocationType, Status } from "@configs";

export interface ILocation {
    _id: string;
    name: string;
    codename: string;
    division_type: LocationType;
    short_codename: string;
    lat: string;
    lng: string;
    status: Status;
}
