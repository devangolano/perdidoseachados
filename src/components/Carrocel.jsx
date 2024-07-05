import React, { useState, useEffect } from "react";
import { Carousel, Typography } from "@material-tailwind/react";

export function Carrocel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      src: "https://pna.gov.ao/storage/app/public/ensaio/8s5zr9KvOF0lb7MHFuGj1PxWaUgo2R9XkQxNX2Rt.jpeg",
      alt: "image 1",
      title: "Apanhou um artigo!",
      description:
        "Se apanhou um artigo faz o seguinte pra cadastrar: ",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "image 2",
      title: "The Beauty of Nature",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      alt: "image 3",
      title: "The Beauty of Nature",
      description:
        "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000); // 5000ms = 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Carousel className="" activeIndex={activeIndex}>
      {slides.map((slide, index) => (
        <div className="relative h-96 w-full" key={index}>
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {slide.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
