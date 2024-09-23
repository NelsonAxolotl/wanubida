import { useRef, useState, useEffect, useCallback } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Listen.css";
import Slider from "react-slick";
import End from "../Components/End";
import radio from "../Pics/radio.webp";
import rvr from "../Pics/rvr.webp";
import sound from "../Son/radio.mp3";
import video from "../Video/Wanubida.mp4";
import pic1 from "../Pics/1.webp";
import pic3 from "../Pics/3.webp";
import pic8 from "../Pics/8.webp";
import pic14 from "../Pics/14.webp";
import pic17 from "../Pics/17.webp";
import pic18 from "../Pics/18.webp";
import pic21 from "../Pics/21.webp";
import pic22 from "../Pics/22.webp";
import pic26 from "../Pics/26.webp";
import pic27 from "../Pics/27.webp";
import pic36 from "../Pics/36.webp";
import pic39 from "../Pics/39.webp";
import pic41 from "../Pics/41.webp";
import pic42 from "../Pics/42.webp";
import pic44 from "../Pics/44.webp";
import pic60 from "../Pics/60.webp";
import pic61 from "../Pics/61.webp";
import pic62 from "../Pics/62.webp";

const images = [
  { src: pic1, alt: "Photo 1" },
  { src: pic3, alt: "Photo 3" },
  { src: pic8, alt: "Photo 8" },
  { src: pic41, alt: "Photo 41" },
  { src: pic42, alt: "Photo 42" },
  { src: pic44, alt: "Photo 44" },
  { src: pic60, alt: "Photo 60" },
  { src: pic36, alt: "Photo 36" },
  { src: pic14, alt: "Photo 14" },
  { src: pic61, alt: "Photo 61" },
  { src: pic17, alt: "Photo 17" },
  { src: pic18, alt: "Photo 18" },
  { src: pic21, alt: "Photo 21" },
  { src: pic22, alt: "Photo 22" },
  { src: pic62, alt: "Photo 62" },
  { src: pic26, alt: "Photo 26" },
  { src: pic27, alt: "Photo 27" },
  { src: pic39, alt: "Photo 39" },
];

const Listen = () => {
  const audioRef = useRef(null);
  const teaserRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePlay = () => {
    teaserRef.current.classList.add("video-playing");
  };

  const handlePause = () => {
    teaserRef.current.classList.remove("video-playing");
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      handleCloseImage();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="listen">
        <div className="listen-titre">
          <h1>Ecouter / Voir</h1>
        </div>
        <div className="galerie">
          <h2>La tournée du facteur en images</h2>
        </div>
        <div className="gallery-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`gallery-image ${
                    index < 5
                      ? "object-top"
                      : index >= images.length - 1
                      ? "object-right"
                      : ""
                  }`}
                  loading="lazy"
                  onClick={() => handleImageClick(image.src)}
                  role="button"
                  aria-label={`View ${image.alt}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="divider2"></div>
        <div className="teaser-listen" ref={teaserRef}>
          <h2>Teaser</h2>
          <div className="video-container-listen">
            <video controls onPlay={handlePlay} onPause={handlePause}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="divider2"></div>
        <div className="son">
          <img
            src={radio}
            alt="photo radio"
            onClick={() => handleImageClick(radio)}
            loading="lazy"
          />
          <div className="audio-control">
            <button onClick={handlePlayPause}>
              {isPlaying ? "Pause" : "Écouter le son"}
            </button>
            <audio ref={audioRef} src={sound} />
            <div className="text-right">
              <p>La troupe Wanubida invitée de </p>
              <img
                src={rvr}
                alt="logo rvr"
                onClick={() => handleImageClick(rvr)}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}
      <End />
    </>
  );
};

export default Listen;
