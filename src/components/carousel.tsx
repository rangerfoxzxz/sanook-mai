"use client";
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import logo from "logo.svg";
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
        setData([{ id: 1, url: "http://www.google.com" }]);
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
    <div className="h-[500px]">
      <Carousel slideInterval={10000}>
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
