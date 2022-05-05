// import { StyledContentAuth, StyledAuth } from "src/components";

interface IAppModuleLayout {
    children?: string | JSX.Element | JSX.Element[];
}

export const LayoutAuth = (props: IAppModuleLayout) => {
    //hook
    const { pathname } = window.location;
    //page variable
    const PATH_VERIFY_EMAIL = "/verify-email";
    const PATH_CHOOSE_PLAN = "/choose-plan";
    const notImageAuth = pathname.includes(PATH_CHOOSE_PLAN);
    const notImageAuthContent =
        pathname.includes(PATH_VERIFY_EMAIL) || pathname.includes(PATH_CHOOSE_PLAN);

    return (
        <>{props.children}</>
        // <StyledAuth notImage={notImageAuth}>
        //     <StyledContentAuth notImage={notImageAuthContent}>
        //         <img alt="" className="bg-image__logo" src="/images/auth/logo.png" />

        //         {props.children}
        //     </StyledContentAuth>
        // </StyledAuth>
    );
};
