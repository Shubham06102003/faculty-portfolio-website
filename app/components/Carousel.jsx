'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useRef } from 'react';

const slides = [
  'Published 20+ research papers in international journals',
  'Over 15 years of teaching experience',
];

const Carousel = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const [ref, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    duration: 1000,
    created(slider) {
      sliderRef.current = slider;

      // Autoplay every 3 seconds
      intervalRef.current = setInterval(() => {
        slider.next();
      }, 3000);
    },
    destroyed() {
      clearInterval(intervalRef.current);
    },
  });

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div ref={ref} className="keen-slider h-48 md:h-60 bg-blue-100 rounded-lg overflow-hidden shadow">
      {slides.map((text, idx) => (
        <div
          key={idx}
          className="keen-slider__slide flex items-center justify-center text-xl md:text-2xl font-semibold text-blue-900 px-4 text-center"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
