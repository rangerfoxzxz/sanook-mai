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
  return <>hello</>;
}
