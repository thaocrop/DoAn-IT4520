import React from "react";

import { LayoutAdmin } from "@layouts";
import { PostTable, HeaderStats } from "@modules";

export default function Dashboard() {
    return <PostTable />;
}

Dashboard.layout = LayoutAdmin;
