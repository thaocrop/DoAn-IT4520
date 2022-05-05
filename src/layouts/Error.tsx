import { ILayout } from "src/interfaces";

export const LayoutError = (props: ILayout) => {
    return <>{props.children}</>;
};
