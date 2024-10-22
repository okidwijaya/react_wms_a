import SideBarMenuDashboard from "@/app/components/MenuDashboard";
import UserNavigation from "@/app/components/UserNavigation";
import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard User",
//   icons: {
//     icon: "/favicon-logo.svg",
//   },
};

const layout = ({ children }) => {
  return (
    <>
      <main className="w-full overflow-hidden h-screen relative p-0 flex flex-col flex-nowrap items-start justify-start">
        <UserNavigation />
        <div className="w-full h-full mx-auto my-0 max-w-full flex flex-row justify-start">
          <SideBarMenuDashboard />
          <div className="ext-[#121212] w-full mx-auto my-0 h-full max-w-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default layout;