import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Media.css";
import End from "../Components/End";
import groupe7 from "../Pics/groupe7.webp";
import pic40 from "../Pics/40.webp";
import groupe from "../Pics/groupe.webp";
import chap4 from "../Pics/chap4.webp";

const Media = () => {
  const [activeSections, setActiveSections] = useState({
    parcours1: false,
    parcours2: false,
    parcours3: false,
  });

  const [enlargedImage, setEnlargedImage] = useState(null);

  // Fonction pour basculer l'état d'une section
  const handleParcoursClick = (parcours) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [parcours]: !prevState[parcours],
    }));
  };

  // Fonction pour gérer le clic sur une image
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  // Fonction pour fermer l'image agrandie
  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <div className="media">
        <div className="media-titre">
          <h1>Médiation</h1>
        </div>
        <div className="tittle-media">
          <h2>3 parcours de médiation</h2>
          <h3>(ou mille autres à imaginer ensemble !)</h3>
        </div>

        <div className="li">
          <button
            className={activeSections.parcours1 ? "active" : ""}
            onClick={() => handleParcoursClick("parcours1")}
          >
            Parcours 1 : <span>Journée au chapiteau Wanubida</span>
          </button>
        </div>
        {activeSections.parcours1 && (
          <div className="media-content">
            <div className="texte-media">
              <div className="blur-background">
                <p>
                  <span>
                    Atelier &ldquo;Les dessous du cirque&rdquo; :<br />
                  </span>
                  D’où vient le cirque ?<br />
                  Qu’est-ce qu’un spectacle ?<br />
                  Quels sont les métiers du spectacle ?<br />
                  Visite des lieux (chapiteau, scène, coulisses)
                </p>
                <p>
                  <span>
                    Atelier découverte des arts du cirque :<br />
                  </span>
                  Initiation à l&#39;acrobatie, au jonglage, à la musique, au
                  théâtre et à la danse.
                </p>
                <p>
                  <span>
                    Bord plateau à l&rsquo;issue d&rsquo;une représentation :
                    <br />
                  </span>
                  Les enfants peuvent échanger avec les artistes, poser leurs
                  questions et partager leurs impressions.
                </p>
              </div>
            </div>
            <img
              src={pic40}
              alt="Emilie chapiteau"
              className="parcours-img"
              onClick={() => handleImageClick(pic40)}
              loading="lazy"
            />
          </div>
        )}

        <div className="li">
          <button
            className={activeSections.parcours2 ? "active" : ""}
            onClick={() => handleParcoursClick("parcours2")}
          >
            Parcours 2 : <span>Plongez dans l&rsquo;univers du cirque</span>
          </button>
        </div>
        {activeSections.parcours2 && (
          <div className="media-content">
            <img
              src={groupe}
              alt="Photo de groupe"
              className="parcours-img2"
              onClick={() => handleImageClick(groupe)}
              loading="lazy"
            />
            <div className="texte-media2">
              <div className="blur-background">
                <p>
                  Parcours sur plusieurs semaines sous{" "}
                  <span>le chapiteau Wanubida</span> ou au sein de votre
                  structure.
                </p>
                <p>
                  <span>
                    Chaque semaine, une discipline différente est abordée :
                    <br />
                  </span>
                  Acrobatie, jonglage, musique, théâtre et danse.
                </p>
                <p>
                  La structure de ce parcours est à adapter en fonction de
                  l&#39;âge des participants et des possibilités d&#39;accueil.
                </p>
                <p>
                  <span>
                    Bord plateau à l&rsquo;issue d&rsquo;une représentation :
                    <br />
                  </span>
                  Les enfants peuvent échanger avec les artistes, poser leurs
                  questions et partager leurs impressions.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="li">
          <button
            className={activeSections.parcours3 ? "active" : ""}
            onClick={() => handleParcoursClick("parcours3")}
          >
            Parcours 3 : <span>Tous.tes en scène !</span>
          </button>
        </div>
        {activeSections.parcours3 && (
          <div className="media-content">
            <div className="texte-media3">
              <div className="blur-background">
                <p>
                  <span>Les artistes de la Cie Wanubida</span> embarquent les
                  participant.es à travers les différentes disciplines du
                  spectacle <span>&ldquo;La tournée du facteur&rdquo;</span>{" "}
                  pour aboutir à la création d’un spectacle présenté devant les
                  parents et autres élèves !
                </p>
                <p>
                  <span>
                    Parcours sur une semaine minimum :<br />
                  </span>
                  Volume horaire à définir en fonction des participants.
                </p>
                <p>
                  <span>
                    Bord plateau à l&rsquo;issue d&rsquo;une représentation :
                    <br />
                  </span>
                  Les enfants peuvent échanger avec les artistes, poser leurs
                  questions et partager leurs impressions.
                </p>
              </div>
            </div>
            <img
              src={chap4}
              alt="Photo de chapiteau"
              className="parcours-img3"
              onClick={() => handleImageClick(chap4)}
              loading="lazy"
            />
          </div>
        )}

        <div className="referent2">
          <h4>Référente Médiation</h4>
          <h5>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href="mailto:cabaretwanubida@gmx.fr">cabaretwanubida@gmx.fr</a>
          </h5>
          <h5>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Emilie : 06 24 96 29 25
          </h5>
        </div>
      </div>

      <div className="media-pic">
        <img
          src={groupe7}
          alt="Photo jonglage"
          onClick={() => handleImageClick(groupe7)}
          loading="lazy"
        />
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

export default Media;
