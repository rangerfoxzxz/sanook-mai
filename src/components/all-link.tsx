"use client";

import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function AllLink() {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-red-500 hover:bg-red-600",
      },
    },
    tab: {
      base: "flex flex-col ",
      tablist: {
        base: "flex text-center flex-wrap border-b border-white-700 dark:border-white-700 bg-white",
        styles: {
          default:
            "flex-wrap border-b border-white-700 dark:border-white-700 bg-white",
          underline:
            "flex-wrap -mb-px border-b border-gray-700 dark:border-gray-700",
          pills:
            "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2 bg-gray-500",
          fullWidth:
            "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
        },
        tabitem: {
          styles: {
            default: {
              base: "flex items-center justify-center p-4 mr-2 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
              active: {
                on: "bg-[#A2DE71] text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
              },
            },
          },
        },
      },
      tabpanel: "bg-white",
    },
  };

  return (
    <div className="py-2">
      <p className="text-left text-5xl text-red-400 underline  underline-offset-3">
        News
      </p>
      <Flowbite theme={{ theme: customTheme }}>
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active icon={HiUserCircle} title="Profile">
            <p>
              This is
              <span className="font-medium text-red-800 dark:text-white">
                Profile tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item icon={MdDashboard} title="Dashboard">
            <p>
              This is
              <span className="font-medium text-red-800 dark:text-white">
                Dashboard tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item icon={HiAdjustments} title="Settings">
            <p>
              This is
              <span className="font-medium text-red-800 dark:text-white">
                Settings tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item icon={HiClipboardList} title="Contacts">
            <p>
              This is
              <span className="font-medium text-red-800 dark:text-white">
                Contacts tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            <p>Disabled content</p>
          </Tabs.Item>
        </Tabs.Group>
      </Flowbite>
    </div>
  );
}
