import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Footer from "../Components/Footer";
import chap from "../Pics/chapiteau.webp";
import affiche from "../Pics/affiche.webp";
import video from "../Video/Wanubida.mp4";

const comments = [
  {
    text: "Cabaret Wanubida! ENCORE MILLE BRAVOS ET AUTANT DE MERCIS POUR TOUT CE QUE VOUS AVEZ SU APPORTER AVEC VOUS... À TRÈS BIENTÔT",
    author: "Sébastien Granger",
  },
  {
    text: "Cette réplique d'un des personnages devant les prouesses du jardinier reflète parfaitement la qualité du spectacle. Il aurait pu ajouter : \"c'est drôle, plein d'émotions diverses. Chacun des huit artistes tient son rôle avec talent!\"",
    author: "Le Progrès - Dominique Senore",
  },
  {
    text: "Bravooooooo à tous !!! Merci de nous faire rêver !!! Le spectacle est absolument génial, foncez !!! Rempli de poésie, d'humour et d'artistes au très très grand talent!!! Vive le cabaret Wanubida !!!",
    author: "Silène Gayaud",
  },
  {
    text: "Bravo à toute la troupe, vous êtes formidables ! 🥰",
    author: "Sabine Roux",
  },
  {
    text: "Les huit artistes de la troupe ravissent tous les spectateurs, jeunes et moins jeunes avec leur spectacle La tournée du facteur. \"C'est beau, c'est poétique, c'est l'cirque\".",
    author: "Le progrès - Dominique Senore",
  },
  {
    text: "Excellent moment de poésie, d'humour, d'amour et certainement plein d'autres choses qui finissent en \"our\". Bravo et merci pour cette agréable parenthèse.",
    author: "Florent Grados",
  },
  {
    text: "Dans ce spectacle formidable et d'une poésie inégalable, sans fard ni trompette, seule l'excellence de cette troupe d'artistes circassiens qui savent tout faire, de l'acrobatie à la danse, du jonglage à la musique, est de mise.",
    author: "Journal 7 à Lyon, Gérard Serie",
  },
];

const Main = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const teaserRef = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handlePlay = useCallback(() => {
    teaserRef.current?.classList.add("video-playing");
  }, []);

  const handlePause = useCallback(() => {
    teaserRef.current?.classList.remove("video-playing");
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  return (
    <>
      <main className="main">
        <div className="cie animate-on-scroll">
          <h1 className="animated-title animate-on-scroll">Cabaret Wanubida</h1>
          <div className="description animate-on-scroll">
            <p>
              Le spectacle <span>&quot;La tournée du facteur&quot;</span> est un
              cabaret de cirque pluridisciplinaire mêlant musique live, cirque,
              danse et théâtre burlesque. <br />
              Ce spectacle joue sous chapiteau et ravira petits et grands.
            </p>
            <p>
              <Link to="/contacts" className="link-scale">
                Contactez-nous
              </Link>{" "}
              pour en savoir plus et nous faire venir près de chez vous !
            </p>
          </div>
          <img
            src={affiche}
            alt="Affiche du spectacle La tournée du facteur"
            className="affiche-img"
            onClick={() => handleImageClick(affiche)}
            width="850"
            height="1200"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && handleImageClick(affiche)}
          />
        </div>

        <div className="kahem animate-on-scroll">
          <p>-Kahem-</p>
        </div>

        <div className="teaser animate-on-scroll" ref={teaserRef}>
          <h2>Teaser</h2>
          <div className="video-container">
            <video
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              preload="auto"
              loading="lazy"
              onError={() => alert("Erreur de chargement de la vidéo")}
            >
              <source src={video} type="video/mp4" />
              Votre navigateur ne prend pas en charge la vidéo.
            </video>
          </div>
        </div>

        <div className="comments animate-on-scroll">
          <h2>Avis des spectateurs</h2>
        </div>
        <div className="comments-container">
          <div className="comments-wrapper">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment.text}</p>
                <span>{comment.author}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="all-reseau animate-on-scroll">
          <div className="reseau">
            <h2>
              Infos, Actu et <span className="responsive-br"></span>
              Prochaines Dates<span className="dots">.</span>
            </h2>
            <p>
              Sarah :{" "}
              <a href="tel:+33631224854" className="contact-phone">
                06 31 22 48 54
              </a>
            </p>
          </div>

          <div className="icon">
            <div className="facebook">
              <a
                href="https://www.facebook.com/cabaretwanubida"
                aria-label="Wanubida"
                title="Suivez-nous sur Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="insta">
              <a
                href="https://www.instagram.com/cabaret_wanubida/"
                aria-label="Instagram Compagnie Poly R"
                title="Suivez-nous sur Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pic">
          <img
            src={chap}
            alt="Chapiteau de la Compagnie Wanubida"
            className="responsive-img"
            onClick={() => handleImageClick(chap)}
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && handleImageClick(chap)}
          />
        </div>
      </main>

      <Footer />

      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Image agrandie" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
