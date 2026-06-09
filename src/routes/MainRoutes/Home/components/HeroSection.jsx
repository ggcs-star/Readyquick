import React, { useRef, useState, useEffect } from "react";
import heroVideo from "../../../../assets/home/herosection/herosectionvideo.mp4";
import { FaArrowRight, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { Container } from "../../../../components/Layout";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted for auto-play compatibility
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    // Try to auto-play video with sound muted (this is allowed by browsers)
    const playVideo = async () => {
      if (!videoRef.current) return;
      
      try {
        // Start with muted video for auto-play compatibility
        videoRef.current.muted = true;
        videoRef.current.volume = 0;
        
        await videoRef.current.play();
        console.log("Video playing successfully (muted for auto-play)");
        setIsVideoReady(true);
      } catch (error) {
        console.log("Video auto-play failed:", error);
        
        // Try again on user interaction
        const enableVideoOnInteraction = () => {
          if (videoRef.current) {
            videoRef.current.play()
              .then(() => {
                console.log("Video started after interaction");
                setIsVideoReady(true);
              })
              .catch(e => console.log("Still couldn't play video:", e));
          }
        };
        document.addEventListener('click', enableVideoOnInteraction, { once: true });
      }
    };

    // Try to play when video is ready
    const handleCanPlay = () => {
      playVideo();
    };
    
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', handleCanPlay);
      
      // Also try to play immediately if already loaded
      if (videoRef.current.readyState >= 3) {
        playVideo();
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  // Handle video looping - ensure mute state persists
  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleLoop = () => {
      // When video loops, reapply the current mute state
      if (videoElement && hasUserInteracted) {
        // If user has enabled sound, ensure it stays unmuted
        videoElement.muted = isMuted;
        videoElement.volume = isMuted ? 0 : 1;
      }
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleLoop);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleLoop);
      }
    };
  }, [hasUserInteracted, isMuted]);

  const toggleSound = () => {
    if (!videoRef.current) return;
    
    if (!hasUserInteracted) {
      // First interaction: unmute video and enable sound
      setHasUserInteracted(true);
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      setIsMuted(false);
      console.log("Sound enabled on first user interaction");
    } else {
      // Toggle mute/unmute
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      videoRef.current.volume = newMutedState ? 0 : 1;
      setIsMuted(newMutedState);
      console.log(newMutedState ? "Video muted" : "Video unmuted");
    }
  };

  // Handle interaction with buttons/section
  const handleInteraction = (e) => {
    e.stopPropagation();
    if (!hasUserInteracted && videoRef.current) {
      setHasUserInteracted(true);
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      setIsMuted(false);
    }
  };

  const handleSectionClick = () => {
    if (!hasUserInteracted && videoRef.current && isVideoReady) {
      setHasUserInteracted(true);
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      setIsMuted(false);
    }
  };

  return (
    <section 
      className="w-full bg-[#FAFAF6] py-10" 
      onClick={handleSectionClick}
    >
      <Container>
        <div className="lg:px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-[#12634a] uppercase tracking-widest text-sm font-semibold">
                Ghar ka swad, hamare sath
              </p>

              <h1 className="mt-4 text-4xl lg:text-5xl font-serif font-bold text-[#111827] leading-tight">
                Bring Your Homemade 
                Flavors Wherever Life
                Takes You
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed ">
                At Ready Quick, we turn your favorite homemade meals into ready-to-eat
                packets without any preservatives. Travel, study, or work anywhere—
                your home's taste follows you.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex items-center space-x-6">
                <button 
                  className="bg-black text-white text-lg px-8 py-3 rounded-lg shadow hover:bg-neutral-800 transition"
                  onClick={handleInteraction}
                >
                  Start Now
                </button>

                <button 
                  className="text-black border border-neutral-300 text-lg px-8 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition"
                  onClick={handleInteraction}
                >
                  Learn More <FaArrowRight />
                </button>
              </div>
            </div>

            {/* RIGHT VIDEO – PORTRAIT */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="
                  relative
                  rounded-3xl
                  overflow-hidden
                  shadow-2xl
                  
                "
                onClick={handleInteraction}
              >
                {/* Video Element WITHOUT muted prop - we control it via ref */}
                <video
                  ref={videoRef}
                  src={heroVideo}
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  // Remove muted prop here - we control it via ref in useEffect
                  className="w-full h-full object-cover"
                />

                {/* SOUND TOGGLE - Controls video audio */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSound();
                  }}
                  className="absolute bottom-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-black transition z-10 flex items-center gap-2"
                  aria-label={hasUserInteracted ? (isMuted ? "Unmute Video" : "Mute Video") : "Enable Sound"}
                >
                  {!hasUserInteracted ? (
                    <>
                      <FaVolumeMute className="animate-pulse" />
                      <span className="text-xs">Click for Sound</span>
                    </>
                  ) : isMuted ? (
                    <>
                      <FaVolumeMute />
                      <span className="text-xs ml-1">Sound Off</span>
                    </>
                  ) : (
                    <>
                      <FaVolumeUp />
                      <span className="text-xs ml-1">Sound On</span>
                    </>
                  )}
                </button>

                {/* Show overlay message before user enables sound */}
                {!hasUserInteracted && isVideoReady && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl cursor-pointer transition-opacity duration-300">
                    <div className="text-white text-center p-6 max-w-xs">
                      <div className="mb-4">
                        <FaVolumeUp className="text-4xl mx-auto mb-2 animate-pulse" />
                      </div>
                      <p className="text-lg font-semibold mb-2">Video Sound Available</p>
                      <p className="text-sm opacity-80">Click anywhere to enable video audio</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}