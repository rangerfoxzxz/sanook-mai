"use client";
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import logo from "logo.svg";
import right from "assets/right.svg";
import left from "assets/left.svg";
import api from "shares/api";
import "components/carousel.css";
export default function DefaultCarousel() {
  type resultProps = {
    email: string;
    gender: string;
  };
  const [result, setResult] = useState<resultProps[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null); // Initialize with null or a default source
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = logo; // Set the source of the image to the default image (logo)
  };

  useEffect(() => {
    // ตัวอย่างการใช้ Axios เรียก API
    api
      .get("http://localhost:4000/api/carousel")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData([
          { id: 1, url: "https://picsum.photos/id/44/300" },
          { id: 2, url: "https://picsum.photos/id/23/300" },
        ]);
      });
  }, []);

  // useEffect(() => {
  //     const api = async () => {
  //         const data = await fetch("https://randomuser.me/api", {
  //             method: "GET"
  //         });
  //         const jsonData = await data.json();
  //         setResult(jsonData.results);
  //     };

  //     api();
  // }, []);

  return (
    <div className="h-[300px] bg-[#FFFFFF]">
      <Carousel
        slideInterval={10000}
        leftControl={<img className="h-[100px] w-[100px]" src={left}></img>}
        rightControl={<img className="h-[100px] w-[100px]" src={right}></img>}

        // rightControl="right"
      >
        {data.map((value) => {
          return (
            <img
              alt="..."
              key={value.id}
              src={value.url || logo}
              onError={handleImageError}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
