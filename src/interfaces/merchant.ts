export interface IMerchantData {
    contacts: number | string;
    createdAt: string;
    createdBy: string;
    initPoint: string;
    logoUrl: string;
    members: number | string;
    membershipTiers: IMembershipTier[];
    name: string;
    planId: string;
    planName: string;
    plans: IPlans[];
    status: string;
    themeColor: string;
    timeExpires: string;
    updatedAt: string;
    users: IUser[];
    welcomeImageUrls: Array<string>;
    __v: number | string;
    _id: string;
}

export interface IMembershipTier {
    bahtSpent: string;
    benefits: Array<string>;
    membershipName: string;
    points: string;
}

export interface IPlans {
    name: string;
    _id: string;
}

export interface IUser {
    _id: string;
}
