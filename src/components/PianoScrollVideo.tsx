"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PianoScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleLoadedMetadata = () => {
    setIsVideoReady(true);
  };

  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video || !isVideoReady) return;

      const duration = video.duration || 10;
      video.currentTime = 0;

      const playhead = { time: 0 };

      // Set up the timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1600%", // Doubled scroll length to make playback scroll space twice as long
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      // 1. Smoothly scrub the video currentTime across the entire timeline
      tl.to(playhead, {
        time: duration,
        ease: "none",
        onUpdate: () => {
          if (video && !isNaN(playhead.time)) {
            video.currentTime = playhead.time;
          }
        },
      }, 0);

      // 2. Slide Animations (fading in and out corresponding to the 4 sections of 2.5s)
      // The timeline has 4 main blocks of duration (0 to 1, 1 to 2, 2 to 3, 3 to 4)
      
      // Slide 1 (0s to 2.5s) - Fades out towards the end of its section
      tl.to(".slide-1", {
        opacity: 0,
        y: -30,
        ease: "power2.inOut",
      }, 0.6);

      // Slide 2 (2.5s to 5.0s) - Fades in, then fades out
      tl.fromTo(".slide-2",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.inOut" },
        1.0
      );
      tl.to(".slide-2", {
        opacity: 0,
        y: -30,
        ease: "power2.inOut",
      }, 1.6);

      // Slide 3 (5.0s to 7.5s) - Fades in, then fades out
      tl.fromTo(".slide-3",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.inOut" },
        2.0
      );
      tl.to(".slide-3", {
        opacity: 0,
        y: -30,
        ease: "power2.inOut",
      }, 2.6);

      // Slide 4 (7.5s to 10.0s) - Fades in and stays visible at the end
      tl.fromTo(".slide-4",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.inOut" },
        3.0
      );
    },
    { dependencies: [isVideoReady], scope: containerRef }
  );

  // Fallback if metadata loaded before mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 1 && !isNaN(video.duration)) {
        setIsVideoReady(true);
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* The video container */}
      <video
        ref={videoRef}
        src="/piano.mp4"
        onLoadedMetadata={handleLoadedMetadata}
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover pointer-events-none absolute inset-0 z-0"
      />

      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10 pointer-events-none" />

      {/* Slides Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        
        {/* Slide 1: 0.0s - 2.5s */}
        <div className="slide-1 absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center select-none">
          <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-2">Part I</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 drop-shadow-md">
            The Beginning
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto font-light drop-shadow-sm">
            Scroll to begin playing the keys.
          </p>
        </div>

        {/* Slide 2: 2.5s - 5.0s */}
        <div className="slide-2 absolute inset-0 opacity-0 flex flex-col items-center justify-center text-white p-6 text-center select-none">
          <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-2">Part II</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 drop-shadow-md">
            The Rhythm
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto font-light drop-shadow-sm">
            Feel the tempo rise as the melody takes shape.
          </p>
        </div>

        {/* Slide 3: 5.0s - 7.5s */}
        <div className="slide-3 absolute inset-0 opacity-0 flex flex-col items-center justify-center text-white p-6 text-center select-none">
          <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-2">Part III</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 drop-shadow-md">
            The Crescendo
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto font-light drop-shadow-sm">
            Each note builds on the next, crafting an immersive response.
          </p>
        </div>

        {/* Slide 4: 7.5s - 10.0s */}
        <div className="slide-4 absolute inset-0 opacity-0 flex flex-col items-center justify-center text-white p-6 text-center select-none">
          <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-2">Part IV</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 drop-shadow-md">
            The Resolution
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto font-light drop-shadow-sm">
            You&apos;ve completed the piece.
          </p>
        </div>

      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
        <div className="w-[1px] h-10 bg-zinc-500 animate-pulse"></div>
      </div>
    </div>
  );
}
