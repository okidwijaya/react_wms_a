"use client";
import IconComponent from "./IconComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarMenuDashboard() {
  const pathname = usePathname();
  return (
      <div
        className="h-full grid grid-cols-1 w-full max-w-[220px] bg-[#e9ecef] ml-0 text-[#121212] p-4 rounded-md border">
        <ul className="gap-0 w-full flex justify-start flex-col ">
          <li
            className={`p-2 rounded-md h-fit ${pathname === "/pages/dashboard" ? "font-semibold text-mediumGrey bg-slate-50" : "" }`}
          >
            <Link
              href="/pages/dashboard"
              className="grid grid-cols-[auto_1fr] w-full gap-2 text-sm"
            >
              <IconComponent
                name="HiHome"
                size="16px"
                color="#adb5bd"
                className="w-fit"
              />
              Home
            </Link>
          </li>
          <li
            className={`p-2 rounded-md h-fit ${pathname === "/pages/dashboard/transcation-out" ? "font-semibold text-mediumGrey bg-slate-50" : "" }`}
          >
            <Link
              href="/pages/dashboard/transcation-out"
              className="grid grid-cols-[auto_1fr] w-full gap-2 text-sm"
            >
              <IconComponent
                name="FaInbox"
                size="16px"
                color="#adb5bd"
                className="w-fit"
              />
              Products Out
            </Link>
          </li>
          <li
            className={`py-1 pl-8 pr-2 rounded-md h-fit ${pathname === "/pages/dashboard/transcation-out/add-transcation-out" ? "text-mediumGrey font-semibold bg-slate-50" : "" }`}
          >
            <Link
              href="/pages/dashboard/transcation-out/add-transcation-out"
              className="grid grid-cols-[auto_1fr] w-full gap-2 text-sm"
            >
              Add Transactions Out
            </Link>
          </li>
          <li
            className={`p-2 rounded-md h-fit ${pathname === "/pages/dashboard/transcation-in" ? "font-semibold text-mediumGrey bg-slate-50" : "" }`}
          >
            <Link
              href="/pages/dashboard/transcation-in"
              className="grid grid-cols-[auto_1fr] w-full gap-2 text-sm"
            >
              <IconComponent
                name="IoMdPricetag"
                size="16px"
                color="#adb5bd"
                className="w-fit"
              />
              Products In
            </Link>
          </li>
          <li
            className={`py-1 pl-8 pr-2 rounded-md h-fit ${pathname === "/pages/dashboard/transcation-in/add-transcation-in" ? "text-mediumGrey font-semibold bg-slate-50" : "" }`}
          >
            <Link
              href="/pages/dashboard/transcation-in/add-transcation-in"
              className="grid grid-cols-[auto_1fr] w-full gap-2 text-sm"
            >
              Add Transactions In
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-end">
          <li className="p-2">
            <Link
              href="/"
              className="grid grid-cols-[auto_1fr] w-full gap-2 text-sm"
            >
              <IconComponent
                name="IoMdSettings"
                size="16px"
                color="#adb5bd"
                className="w-fit"
              />
              Settings
            </Link>
          </li>
        </ul>
      </div>
  );
}
