export interface IAuth {
    accessToken: string;
    refreshToken: IRefreshToken | null;
    userPermissions: Array<string> | null;
}

export interface IRefreshToken {
    createdAt: string;
    expires: number | string;
    updatedAt: string;
    userId: string;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface IEmail {
    email: string;
}
export interface IForgotPassword {
    password: string;
}
export interface INitCreatePassword {
   name:string;
   password:string;
   conformPassword:string;
}
export interface ICreatePassword {
    resetPasswordId: string;
    password: string;
}

export interface IInfo {
    _id: string;
    userType: string;
    email: string;
    points: [];
    createdAt: string;
    updatedAt: string;
    __v?: number;
    resetPassword: {
        _id: string;
        id: string;
        expires: number;
    };
    roleId: string;
}
