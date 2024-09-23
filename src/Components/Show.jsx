import { useRef, useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Components/Show.css";
import video from "../Video/Wanubida.mp4";
import dossier from "../Fichier/dossier.pdf";
import dossiertek from "../Fichier/dossiertek.pdf";
import affiche from "../Pics/affiche.webp";
import pic2 from "../Pics/2.webp";
import groupe5 from "../Pics/groupe5.webp";
import chap8 from "../Pics/chap8.webp";

const Show = () => {
  const teaserRef = useRef(null);
  const noteTextRef = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handlePlay = useCallback(() => {
    teaserRef.current.classList.add("video-playing");
  }, []);

  const handlePause = useCallback(() => {
    teaserRef.current.classList.remove("video-playing");
  }, []);

  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const node = noteTextRef.current; // Copie locale

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <>
      <div className="show">
        <div className="show-titre">
          <h1>Spectacle</h1>
        </div>
        <div className="facteur-h2">
          <h2>La tournée du Facteur</h2>
        </div>

        <div className="public">
          <img
            src={affiche}
            alt="Affiche du spectacle, La tournée du Facteur, compagnie Wanubida"
            onClick={() => handleImageClick(affiche)}
            loading="lazy"
          />

          <h2>-Kahem-</h2>

          <h3>Cirque poétique et absurde</h3>
          <span>Durée : 1h15</span>
          <p>Spectacle tout public à partir de 5 ans</p>
        </div>
        <div className="facteur">
          <div className="facteur-text" ref={noteTextRef}>
            <p>
              Le facteur commence sa tournée quotidienne. <br />
              Que représente cette figure en voie de disparition ? <br />
              Ce spectacle est une ode au maintien du lien social avec ses bons
              et ses mauvais côtés. <br />
              Une succession de gueules cassées, de pirouettes et d&rsquo;amour,
              d&rsquo;accordéon et de chutes. <br />
              Finalement, n&rsquo;est-ce pas cela la vie ? <br />
              Dans ce spectacle, jongleurs, acrobates, danseurs, musiciens et
              clowns vous offrent un moment suspendu drôle, poétique et absurde.{" "}
              <br />
              Vous suivrez le facteur dans la ronde folle de sa distribution
              rocambolesque, à l&rsquo;image des figures qui croisent sa route.
            </p>
          </div>
        </div>
        <div className="teaser-spectacle">
          <h2>Teaser</h2>
        </div>
        <div className="teaser-show" ref={teaserRef}>
          <div className="video-container">
            <video
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              preload="metadata"
              loading="lazy"
            >
              <source src={video} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </div>
        <div className="file">
          <div className="pro">
            <h2>Dossier Pro</h2>

            <div className="button-container">
              <a
                href={dossier}
                download="dossier.pdf"
                className="download-button"
              >
                Télécharger le document PDF
              </a>
              <a
                href={dossier}
                className="download-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le document PDF
              </a>
              <img
                src={pic2}
                alt="Photo de groupe"
                className="responsive-groupe-img"
                onClick={() => handleImageClick(pic2)}
                loading="lazy"
              />
            </div>
          </div>

          <div className="tek">
            <h2>Dossier Technique</h2>

            <div className="button-container">
              <a
                href={dossiertek}
                download="dossiertek.pdf"
                className="download-button"
              >
                Télécharger le document PDF
              </a>
              <a
                href={dossiertek}
                className="download-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le document PDF
              </a>
              <img
                src={groupe5}
                alt="Photo technique"
                className="responsive-groupe2-img"
                onClick={() => handleImageClick(groupe5)}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="tek-accueil">
          <p>
            * Les conditions d&apos;accueil technique sont à discuter au
            préalable directement avec l&apos;équipe *
          </p>
        </div>
        <div className="referrent">
          <h4>Référent technique</h4>

          <h5>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href="mailto:cabaretwanubida@gmx.fr">cabaretwanubida@gmx.fr</a>
          </h5>
          <h6>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Corentin : 06 80 54 05 74
          </h6>
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
      <div className="pic-contact">
        <img
          src={chap8}
          alt="Photo night chapiteau ombres"
          className="responsive-contact"
          onClick={() => handleImageClick(chap8)}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Show;
