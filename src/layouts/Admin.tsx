import { AdminHeader, FooterAdmin, HeaderStats, Sidebar } from "@components";
import { ILayout } from "@interfaces";

export const LayoutAdmin = (props: ILayout) => {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminHeader />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24 mb-24">{props.children}</div>
                <FooterAdmin />
            </div>
        </>
    );
};
