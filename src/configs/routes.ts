import { LayoutAuth, LayoutError } from "src/layouts";
import { IRoute } from "src/interfaces";

export const PATH_HOME = "/";
export const PATH_LOGIN = "/login";
export const PATH_SIGN_UP = "/sign-up";
export const PATH_VERIFY_EMAIL = "/verify-email";
export const PATH_CREATE_PASSWORD = "/create-password";
export const PATH_CHOOSE_PLAN = "/choose-plan";

export const PATH_MARCHANT_SETTING = "/marchant-setting";
export const PATH_CONTACTS = "/contacts";
export const PATH_PERMISSIONS = "/permissions";
export const PATH_LOYALTY = "/loyalty";

export const PATH_404 = "*";

export const normalRoutes = [
    PATH_HOME,
    PATH_MARCHANT_SETTING,
    PATH_CONTACTS,
    PATH_PERMISSIONS,
    `${PATH_LOYALTY}/rules`,
];

export const authRoutes = [
    PATH_LOGIN,
    PATH_CREATE_PASSWORD,
    PATH_SIGN_UP,
    PATH_CHOOSE_PLAN,
    PATH_VERIFY_EMAIL,
];
