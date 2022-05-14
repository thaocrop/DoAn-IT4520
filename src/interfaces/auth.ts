export interface IAuth {
    accessToken: string;
    refreshToken: string;
}

export interface ILogin {
    user_name: string;
    password: string;
}

export interface IRegister extends ILogin {
    confirm_password: string;
    term: boolean;
}
