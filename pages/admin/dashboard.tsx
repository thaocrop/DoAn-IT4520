import React from "react";

import { LayoutAdmin } from "@layouts";
import { PostTable, HeaderStats } from "@modules";

export default function Dashboard() {
    return (
        <>
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24 mb-24">
                <PostTable />
            </div>
        </>
    );
}

Dashboard.layout = LayoutAdmin;
