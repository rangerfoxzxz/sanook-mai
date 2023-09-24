'use client';
import LimitTo from "shares/truncateText";
export default function News() {
    interface Item {
        id: number;
        name: string;
        url: string;
        link: string;
    }


    const items: Item[] = [
        { id: 1, name: 'Item 1', url: 'https://picsum.photos/id/23/200/150', link: 'https:www.google.com' },
        { id: 2, name: 'Item 2', url: 'https://picsum.photos/id/33/200/150', link: 'https:www.google.com' },
        { id: 3, name: 'Item 3', url: 'https://picsum.photos/id/73/200/150', link: 'https:www.google.com' },
        { id: 4, name: 'Item 4', url: 'https://picsum.photos/id/64/200/150', link: 'https:www.google.com' },
        { id: 5, name: 'Item 5', url: 'https://picsum.photos/id/52/200/150', link: 'https:www.google.com' },
        { id: 6, name: 'Item 6', url: 'https://picsum.photos/id/68/200/150', link: 'https:www.google.com' },
        { id: 7, name: 'Item 7', url: 'https://picsum.photos/id/44/200/150', link: 'https:www.google.com' },
        { id: 8, name: 'Item 8', url: 'https://picsum.photos/id/552/200/150', link: 'https:www.google.com' },
        { id: 9, name: 'Item 9', url: 'https://picsum.photos/id/155/200/150', link: 'https:www.google.com' },
        { id: 10, name: 'Item 10', url: 'https://picsum.photos/id/456/200/150', link: 'https:www.google.com' },
        { id: 11, name: 'Item 11', url: 'https://picsum.photos/id/26/200/150', link: 'https:www.google.com' },
        { id: 12, name: 'Item 12', url: 'https://picsum.photos/200/150', link: 'https:www.google.com' },
    ];

    return (
        <>
            <div className="h-auto border-2 my-2">
            <p className="text-left text-5xl text-red-400 underline  underline-offset-1">News</p>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        {items.map((item) => (
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pt-2 " key={item.id}>
                                <div className="flex justify-center items-center">
                                    <div>
                                        <img className="h-[150px] w-[200px]  place-content-center" src={item.url} />
                                        <a className="text-blue-600 visited:text-purple-600 hover:underline" href={item.link}><LimitTo text="This is a long text that should be truncated if it's longer than 30 characters." /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </>

    )
}


