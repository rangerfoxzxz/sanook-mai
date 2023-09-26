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

  const items: any[] = [
    {
      id: 1,
      tabName: "การแก้ปัญหา iPhone",
      subtab: true,
      content: [
        {
          id: 1,
          name: "เปิดไม่ติด",
          url: "https://picsum.photos/id/33/200/150",
          link: "https:www.google.com",
        },
        {
          id: 2,
          name: "แอป Line ค้าง",
          url: "https://picsum.photos/id/44/200/150",
          link: "https:www.google.com",
        },
        {
          id: 3,
          name: "ชาร์จไม่เข้า",
          url: "https://picsum.photos/id/55/200/150",
          link: "https:www.google.com",
        },
      ],
    },
    {
      id: 2,
      tabName: "การแก้ปัญหา Android",
      subtab: false,
      subtabContent: [],
      content: [
        {
          id: 1,
          name: "Item 1",
          url: "https://picsum.photos/id/66/200/150",
          link: "https:www.google.com",
        },
        {
          id: 2,
          name: "Item 2",
          url: "https://picsum.photos/id/77/200/150",
          link: "https:www.google.com",
        },
        {
          id: 3,
          name: "Item 3",
          url: "https://picsum.photos/id/88/200/150",
          link: "https:www.google.com",
        },
      ],
    },
    {
      id: 3,
      tabName: "การแก้ปัญหา Fibre",
      subtab: false,
      subtabContent: [],
      content: [
        {
          id: 1,
          name: "Item 1",
          url: "https://picsum.photos/id/43/200/150",
          link: "https:www.google.com",
        },
        {
          id: 2,
          name: "Item 2",
          url: "https://picsum.photos/id/55/200/150",
          link: "https:www.google.com",
        },
        {
          id: 3,
          name: "Item 3",
          url: "https://picsum.photos/id/76/200/150",
          link: "https:www.google.com",
        },
      ],
    },
  ];

  return (
    <div className="my-2 p-2 bg-white">
      <p className="text-left text-5xl text-red-400 underline  underline-offset-3">
        News3
      </p>
      <Flowbite theme={{ theme: customTheme }}>
        <Tabs.Group aria-label="Default tabs" style="default" className="p-2">
          {items?.length > 0 &&
            items.map((tab: any) => (
              <Tabs.Item active icon={HiUserCircle} title={tab.tabName}>
                {tab.content?.length > 0 &&
                  tab.content.map((tab2: any) => (
                    <div className="grid grid-cols-12">
                      <div className="col-span-12 text-left pl-3 pt-2 ">
                        <div className="flex items-center">
                          <HiAdjustments className="mr-1" />
                          <span>{tab2.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </Tabs.Item>
            ))}
        </Tabs.Group>
      </Flowbite>
    </div>
  );
}
