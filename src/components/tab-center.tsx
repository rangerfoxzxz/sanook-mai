"use client";

import { Tabs } from "flowbite-react";
import LimitTo from "shares/truncateText";
import {
  HiAdjustments,
  HiOutlineDeviceMobile,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  MdMobileFriendly,
  MdOutlinePhoneAndroid,
  MdOutlineNaturePeople,
} from "react-icons/md";

export default function TabCenter() {
  const items: any[] = [
    {
      id: 1,
      tabName: "Mobile",
      subtab: true,
      subtabContentList: [
        {
          id: 1,
          tabName: "Apple",
          subtabContent: [
            {
              id: 1,
              name: "Item 1",
              url: "https://picsum.photos/id/24/200/150",
              link: "https:www.google.com",
            },
            {
              id: 2,
              name: "Item 2",
              url: "https://picsum.photos/id/2/200/150",
              link: "https:www.google.com",
            },
            {
              id: 3,
              name: "Item 3",
              url: "https://picsum.photos/id/55/200/150",
              link: "https:www.google.com",
            },
          ],
        },
        {
          id: 2,
          tabName: "Samsung",
          subtabContent: [
            {
              id: 1,
              name: "Item 1",
              url: "https://picsum.photos/id/5/200/150",
              link: "https:www.google.com",
            },
            {
              id: 2,
              name: "Item 2",
              url: "https://picsum.photos/id/6/200/150",
              link: "https:www.google.com",
            },
            {
              id: 3,
              name: "Item 3",
              url: "https://picsum.photos/id/7/200/150",
              link: "https:www.google.com",
            },
          ],
        },
        {
          id: 3,
          tabName: "Xiaomi",
          subtabContent: [
            {
              id: 1,
              name: "Item 1",
              url: "https://picsum.photos/id/2/200/150",
              link: "https:www.google.com",
            },
            {
              id: 2,
              name: "Item 2",
              url: "https://picsum.photos/id/5/200/150",
              link: "https:www.google.com",
            },
            {
              id: 3,
              name: "Item 3",
              url: "https://picsum.photos/id/7/200/150",
              link: "https:www.google.com",
            },
          ],
        },
      ],
      content: [
        {
          id: 1,
          name: "Item 1",
          url: "https://picsum.photos/id/33/200/150",
          link: "https:www.google.com",
        },
        {
          id: 2,
          name: "Item 2",
          url: "https://picsum.photos/id/44/200/150",
          link: "https:www.google.com",
        },
        {
          id: 3,
          name: "Item 3",
          url: "https://picsum.photos/id/55/200/150",
          link: "https:www.google.com",
        },
      ],
    },
    {
      id: 2,
      tabName: "Postpaid",
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
      tabName: "Pretpaid",
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
    <Tabs.Group
      aria-label="Tabs with underline"
      style="underline"
      className="border-2 my-2"
    >
      {items.map((item) => (
        <Tabs.Item
          active
          icon={MdMobileFriendly}
          title={item.tabName}
          key={item.id}
        >
          {item.subtab && (
            <Tabs.Group aria-label="Pills" style="pills" className="pl-2">
              {item.subtabContentList.map((subcontentList: any) => (
                <Tabs.Item active title={subcontentList.tabName}>
                  <div className="grid grid-cols-12">
                    {subcontentList.subtabContent.length > 0 &&
                      subcontentList.subtabContent.map((subcontext: any) => (
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 pt-2 "
                          key={subcontext.id}
                        >
                          <div
                            className="grid grid-cols-12"
                            key={subcontext.id}
                          >
                            <div className="col-span-6">
                              <img
                                className="h-[100px] w-[150px]  "
                                src={subcontext.url}
                              />
                            </div>
                            <div className="col-span-6 ">
                              <div className="text-left">
                                <div>
                                  <a
                                    className="text-blue-600 visited:text-purple-600 hover:underline"
                                    href={subcontext.link}
                                  >
                                    <LimitTo text="This is a long text that should be truncated if it's longer than 30 characters." />
                                  </a>
                                </div>
                                <div className="mt-5">test</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tabs.Item>
              ))}
            </Tabs.Group>
          )}

          {!item.subtab && (
            <div className="grid grid-cols-12">
              {item.content.map((content: any) => (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 pt-2 "
                  key={content.id}
                >
                  <div className="grid grid-cols-12" key={content.id}>
                    <div className="col-span-6">
                      <img
                        className="h-[100px] w-[150px]  "
                        src={content.url}
                      />
                    </div>
                    <div className="col-span-6 ">
                      <div className="text-left">
                        <div>
                          <a
                            className="text-blue-600 visited:text-purple-600 hover:underline"
                            href={content.link}
                          >
                            <LimitTo text="This is a long text that should be truncated if it's longer than 30 characters." />
                          </a>
                        </div>
                        <div className="mt-5">test</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Tabs.Item>
      ))}
    </Tabs.Group>
  );
}
