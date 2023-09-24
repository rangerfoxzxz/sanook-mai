'use client';

import { Tabs } from 'flowbite-react';
import LimitTo from "shares/truncateText";
import { HiAdjustments, HiOutlineDeviceMobile, HiOutlinePhone } from 'react-icons/hi';
import { MdMobileFriendly, MdOutlinePhoneAndroid, MdOutlineNaturePeople } from 'react-icons/md';

export default function TabCenter() {

    const items: any[] = [
        {
            id: 1,
            tabName: "Mobile",
            subtab: true,
            subtabContentList: [{
                id: 1,
                tabName: "Apple",
                subtabContent: [],
            },
            {
                id: 2,
                tabName: "Samsung",
                subtabContent: [
                    { id: 1, name: 'Item 1', url: 'https://picsum.photos/id/23/200/150', link: 'https:www.google.com' },
                    { id: 2, name: 'Item 2', url: 'https://picsum.photos/id/33/200/150', link: 'https:www.google.com' },
                    { id: 3, name: 'Item 3', url: 'https://picsum.photos/id/73/200/150', link: 'https:www.google.com' },]
            },
            {
                id: 3,
                tabName: "Xiaomi",
                subtabContent: [
                    { id: 1, name: 'Item 1', url: 'https://picsum.photos/id/23/200/150', link: 'https:www.google.com' },
                    { id: 2, name: 'Item 2', url: 'https://picsum.photos/id/33/200/150', link: 'https:www.google.com' },
                    { id: 3, name: 'Item 3', url: 'https://picsum.photos/id/73/200/150', link: 'https:www.google.com' },
                ]

            }],
            content: [
                { id: 1, name: 'Item 1', url: 'https://picsum.photos/id/23/200/150', link: 'https:www.google.com' },
                { id: 2, name: 'Item 2', url: 'https://picsum.photos/id/33/200/150', link: 'https:www.google.com' },
                { id: 3, name: 'Item 3', url: 'https://picsum.photos/id/73/200/150', link: 'https:www.google.com' }]
        },
        {
            id: 2,
            tabName: "Postpaid",
            subtab: false,
            subtabContent: [],
            content: [
                { id: 1, name: 'Item 1', url: 'https://picsum.photos/id/25/200/150', link: 'https:www.google.com' },
                { id: 2, name: 'Item 2', url: 'https://picsum.photos/id/31/200/150', link: 'https:www.google.com' },
                { id: 3, name: 'Item 3', url: 'https://picsum.photos/id/13/200/150', link: 'https:www.google.com' },]
        },
        {
            id: 3,
            tabName: "Pretpaid",
            subtab: false,
            subtabContent: [],
            content: [
                { id: 1, name: 'Item 1', url: 'https://picsum.photos/id/43/200/150', link: 'https:www.google.com' },
                { id: 2, name: 'Item 2', url: 'https://picsum.photos/id/55/200/150', link: 'https:www.google.com' },
                { id: 3, name: 'Item 3', url: 'https://picsum.photos/id/76/200/150', link: 'https:www.google.com' },
            ]

        }
    ];
    return (
        <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
        >

            {items.map((item) => (
                <Tabs.Item
                    active
                    icon={MdMobileFriendly}
                    title={item.tabName}
                    key={item.id}
                >
                    {item.subtab && (
                        <div className="grid grid-cols-12">
                            {item.content.map((ddd: any) => (
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pt-2 " key={ddd.id}>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <img className="h-[150px] w-[200px]  place-content-center" src={ddd.url} />
                                            <a className="text-blue-600 visited:text-purple-600 hover:underline" href={ddd.link}><LimitTo text="This is a long text that should be truncated if it's longer than 30 characters." /></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!item.subtab && (
                        <div className="grid grid-cols-12">
                            {item.content.map((content: any) => (
                                <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 pt-2 " key={content.id}>
                                    {/* <div className="flex justify-left items-center"> */}
                                    <div className="grid grid-cols-12" key={content.id}>
                                        <div className="col-span-6">
                                            <img className="h-[100px] w-[150px]  " src={content.url} />
                                        </div>
                                        <div className="col-span-6 ">
                                            <div className ="text-left">
                                                <div>
                                                    <a className="text-blue-600 visited:text-purple-600 hover:underline" href={content.link}>
                                                        <LimitTo text="This is a long text that should be truncated if it's longer than 30 characters." /></a></div>
                                                <div className="mt-5">test</div>
                                            </div></div>


                                    </div>

                                    {/* </div> */}
                                </div>
                            ))}
                        </div>
                    )}


                </Tabs.Item>
            ))}
            <Tabs.Item
                active
                icon={MdMobileFriendly}
                title="Mobile"
            >
                <Tabs.Group
                    aria-label="Pills"
                    style="pills"
                    className="pl-2"
                >
                    <Tabs.Item
                        active
                        title="Apple"

                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Content 1
                        </p>
                    </Tabs.Item>
                    <Tabs.Item title="Samsung">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Content 2
                        </p>
                    </Tabs.Item>
                    <Tabs.Item title="Xiaomi">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Content 3
                        </p>
                    </Tabs.Item>
                </Tabs.Group>
            </Tabs.Item>
            <Tabs.Item
                icon={MdOutlinePhoneAndroid}
                title="Postpaid"
            >
                <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                        Dashboard tab's associated content
                    </span>
                    .
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </Tabs.Item>
            <Tabs.Item
                icon={HiOutlinePhone}
                title="Prepaid"
            >
                <p>
                    This is
                    <span className="font-medium text-gray-800 dark:text-white">
                        Settings tab's associated content
                    </span>
                    .
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </p>
            </Tabs.Item>
        </Tabs.Group>
    )
}


