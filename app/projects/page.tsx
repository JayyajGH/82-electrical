"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Projects() {
  const [index, setIndex] = useState(-1);

  const slides = [
    { 
      src: "/images/projects/faultfind_1.jpg", 
      width: 1920, 
      height: 1080, 
      title: "Fault Finding", 
      description: "This fault was found after the customer called to say his RCD had been tripping at certain times of day. After opening up the consumer unit it was clear that the cable supplying his hot water cylinder and not been secured in the circuit breaker correctly when it was installed causing it to overheat and melt into nearby circuits." 
    },
    { 
      src: "/images/projects/image1.jpg", 
      width: 1920, 
      height: 1280, 
      title: "Fuse boxes", 
      description: "Modern fuse boxes contain lots of safety features that not only improve the safety in your home limiting the chance of an electrical fire or shocks but can also help protect expensive electrical equipment from both minor and major electrical surges. Look out for metal enclosures, RCBOs, SPDs (all now fitted as standard) and more recently Arc fault detection on any quote that you get." 
    },
    { 
      src: "/images/projects/newkitchen_1.jpg", 
      width: 1920, 
      height: 1280, 
      title: "Kitchen Wiring", 
      description: "If you are spending all that money on a new kitchen don\'t forget to get an electrician to thoroughly check the electrical system, those cables often can\'t be replaced without damaging the brand new tiles or freshly painted walls." 
    },
    { src: "/images/projects/testing-circuits.jpg", width: 1920, height: 1280, title: "Circuit Testing", description: "Always testing circuits following installation or modification with specially calibrated test equipment." },
    { src: "/images/projects/garden-steps.jpg", width: 1920, height: 1280, title: "Garden Lighting", description: "The customer here wanted to illuminate her new garden steps, so we put in aluminium channels with waterproof 12v led strip, so light would spill out of each top slab." },
    { src: "/images/projects/brick-lights.jpg", width: 1920, height: 1280, title: "Brick Lights", description: "Installed these bricklights so they blend into a new garden wall and help the customer to see where his steps are." },
    { src: "/images/projects/large-or-small.jpg", width: 1920, height: 1280, title: "Domestic Work", description: "As happy doing the little jobs like installing outdoor sockets, swapping lights or changing bathroom fans as I am the big jobs." },
    { src: "/images/projects/stylish-lighting.jpg", width: 1920, height: 1280, title: "Stylish Lighting", description: "Stylish interior lighting is not so difficult to achieve. This install was a late addition and cables were put in after plastering, channels were filled by us and finished off to perfection by the decorator." },
    { src: "/images/projects/smart-lighting-and-sound.jpg", width: 1920, height: 1280, title: "Smart Home", description: "Rewire of this kitchen included Phillips Hue lighting and Sonos speakers throughout. A stunning custom built kitchen with all isolators neatly concealed in cupboards." },
  ];

  return (
    <div className="wrapper">
      <h1 className="heading1">Previous work</h1>

      {/* Grid Container - Added gap-y-10 for vertical spacing between rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {slides.map((slide, i) => (
          <div key={i} className="group flex flex-col cursor-pointer" onClick={() => setIndex(i)}>
            
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl border border-gray-200">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Text Content Under Image */}
            <div className="mt-4 px-1">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {slide.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {slide.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        render={{
          slide: ({ slide, rect }) => {
            const width = Math.min(slide.width || 1200, rect.width);
            const height = Math.min(slide.height || 800, rect.height);

            return (
              <div style={{ position: "relative", width, height }}>
                <Image
                  src={slide.src}
                  fill
                  alt=""
                  sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
                  style={{ objectFit: "contain" }}
                />
              </div>
            );
          },
        }}
      />
    </div>
  );
}
