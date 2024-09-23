import { useRef, useState, useEffect, useCallback } from "react";
import End from "../Components/End";
import "./Lacie.css";
import dossiertda from "../Fichier/dossiertda.pdf";
import cafetek from "../Fichier/fichetekcafe.pdf";
import videocafe from "../Video/cafevideo.mp4";
import Gauthier from "../Pics/Gauthier.webp";
import Gauthier2 from "../Pics/Gauthier2.webp";
import Pierre3 from "../Pics/Pierre3.webp";
import Pierre2 from "../Pics/Pierre2.webp";
import Corentin from "../Pics/Corentin.webp";
import Corentin2 from "../Pics/Corentin2.webp";
import Adrien4 from "../Pics/adrien4.webp";
import Florian2 from "../Pics/Florian2.webp";
import Sarah2 from "../Pics/Sarah2.webp";
import Ulysse from "../Pics/Ulysse.webp";
import Ulysse2 from "../Pics/Ulysse2.webp";
import temps from "../Pics/temps.webp";
import tda1 from "../Pics/tda1.webp";
import tda2 from "../Pics/tda2.webp";
import tda3 from "../Pics/tda3.webp";
import pic12 from "../Pics/12.webp";
import pic25 from "../Pics/25.webp";
import pic10 from "../Pics/10.webp";
import pic16 from "../Pics/16.webp";
import pic9 from "../Pics/9.webp";
import pic30 from "../Pics/30.webp";
import pic29 from "../Pics/29.webp";
import pic11 from "../Pics/11.webp";
import adrien3 from "../Pics/adrien3.webp";
import pic4 from "../Pics/4.webp";
import pic6 from "../Pics/6.webp";
import pic32 from "../Pics/32.webp";
import cafeflyer from "../Pics/cafeflyer.webp";
import corentin4 from "../Pics/corentin4.webp";
import Emilie from "../Pics/Emilie.webp";
import Sarah from "../Pics/Sarah.webp";

const Lacie = () => {
  const teaserRef = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const [currentImageIndexes, setCurrentImageIndexes] = useState({
    Corentin: 0,
    Gauthier: 0,
    Pierre: 0,
    Adrien: 0,
    Florian: 0,
    Emilie: 0,
    Ulysse: 0,
    Ernestine: 0,
    tda: 0,
    Coco: 0,
  });

  const [activeSection, setActiveSection] = useState(null);

  const handleImageClick = useCallback((image) => {
    console.log("Clicked image:", image);
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  const handlePlay = () => {
    teaserRef.current.classList.add("video-playing");
  };

  const handlePause = () => {
    teaserRef.current.classList.remove("video-playing");
  };

  const handleButtonClick = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  useEffect(() => {
    const intervals = {
      Corentin: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Corentin: prevIndexes.Corentin === 2 ? 0 : prevIndexes.Corentin + 1,
        }));
      }, 6000),
      Gauthier: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Gauthier: prevIndexes.Gauthier === 2 ? 0 : prevIndexes.Gauthier + 1,
        }));
      }, 6000),
      Pierre: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Pierre: prevIndexes.Pierre === 2 ? 0 : prevIndexes.Pierre + 1,
        }));
      }, 6000),

      Adrien: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Adrien: prevIndexes.Adrien === 2 ? 0 : prevIndexes.Adrien + 1,
        }));
      }, 6000),
      Florian: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Florian: prevIndexes.Florian === 2 ? 0 : prevIndexes.Florian + 1,
        }));
      }, 6000),
      Emilie: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Emilie: prevIndexes.Emilie === 2 ? 0 : prevIndexes.Emilie + 1,
        }));
      }, 6000),
      Ulysse: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Ulysse: prevIndexes.Ulysse === 2 ? 0 : prevIndexes.Ulysse + 1,
        }));
      }, 6000),
      Ernestine: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Ernestine:
            prevIndexes.Ernestine === 2 ? 0 : prevIndexes.Ernestine + 1,
        }));
      }, 6000),
      Coco: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          Coco: prevIndexes.Coco === 1 ? 0 : prevIndexes.Coco + 1,
        }));
      }, 6000),
      tda: setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          tda: prevIndexes.tda === 2 ? 0 : prevIndexes.tda + 1,
        }));
      }, 6000),
    };

    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  return (
    <>
      <div className="lacie">
        <div className="lacie-titre">
          <h1>La Compagnie</h1>
          <h2>Wanubida</h2>
        </div>
        <div className="historique">
          <h2>Historique</h2>
        </div>
        <div className="intro">
          <div className="lacie-text">
            <p>
              Elle voit le jour en 2020 sous l’impulsion de Pierre, Corentin et
              Gauthier. Ils réunissent une équipe de 8 artistes issus de
              différentes disciplines et créent ensemble un spectacle
              pluridisciplinaire haut en couleur.
            </p>
          </div>
        </div>
        <div className="equipe-titre">
          <h2>L&rsquo;ÉQUIPE</h2>
        </div>
        <div className="cabaret">
          <h3>Cabaret Wanubida</h3>
        </div>
        <div className="artistes">
          <div className="personne-reverse">
            <div className="pic1">
              <img
                src={pic32}
                alt="Corentin Boisset, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Corentin === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Corentin2}
                alt="Corentin Boisset, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Corentin === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={pic25}
                alt="Corentin Boisset, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Corentin === 2 ? "active" : ""}
                loading="lazy"
              />
            </div>
            <div className="text1">
              <h3>Corentin Boisset</h3>
              <p className="main-text">
                Clown et danseur, il est touchant et drôle par sa maladresse et
                incarne le facteur à merveille. <br />
                Il fait le lien en virevoltant parmi les autres personnages et
                vous embarque avec légèreté dans son monde un peu branlant.
              </p>
              <p className="hover-text">Le Facteur</p>
            </div>
          </div>

          <div className="personne">
            <div className="text1">
              <h3>Gauthier Koch</h3>
              <p className="main-text">
                Clown, musicien, auteur compositeur interprète et Alsacien, il
                joue de son accent pour donner vie au Belge, le frère du
                jardinier. <br />
                Ce frangin fantasque ne sort jamais sans sa Météor à la main, la
                guitare ou l&#39;accordéon en bandoulière. <br />
                Trinquera-t-il avec vous ?
              </p>
              <p className="hover-text">Le frère du Jardinier</p>
            </div>
            <div className="pic1">
              <img
                src={Gauthier}
                alt="Gauthier Koch, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Gauthier === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Gauthier2}
                alt="Gauthier Koch, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Gauthier === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={pic12}
                alt="Gauthier Koch, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Gauthier === 2 ? "active" : ""}
                loading="lazy"
              />
            </div>
          </div>

          <div className="personne-reverse">
            <div className="pic1">
              <img
                src={Pierre3}
                alt="Pierre Auguste, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Pierre === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Pierre2}
                alt="Pierre Auguste, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Pierre === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={pic6}
                alt="Pierre Auguste, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Pierre === 2 ? "active" : ""}
                loading="lazy"
              />
            </div>
            <div className="text1">
              <h3>Pierre Auguste</h3>
              <p className="main-text">
                Acrobate touche-à-tout, jongleur et poète de l&#39;existence, il
                croque la vie à pleines dents ! <br />
                Pierre prête son énergie débordante et son enthousiasme à
                Contenterie, le jardinier, qui fera pousser aussi bien les
                sourires sur vos visages et la joie dans vos cœurs que les
                fleurs du jardin.
              </p>
              <p className="hover-text">Le Jardinier</p>
            </div>
          </div>
          <div className="personne">
            <div className="text1">
              <h3>Ernestine Céleri</h3>
              <p className="main-text">
                Ernestine est raconteuse d&#39;histoires qu&#39;elle partage en
                musique, chant, danse ou galipettes. <br />
                Assez insaisissable dans le rôle de Jo, iel observe ce monde
                étrange, se questionne et vous le livre parfois tout brut de
                langage, ou bien dansé ou vibrant du son de son marimba et de sa
                voix.
              </p>
              <p className="hover-text">Jo</p>
            </div>
            <div className="pic1">
              <img
                src={pic11}
                alt="Ernestine Celeri, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Ernestine === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Sarah2}
                alt="Ernestine Celeri, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Ernestine === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Sarah}
                alt="Ernestine Celeri, artiste de La Compagnie Wanubida"
                className={`left-image ${
                  currentImageIndexes.Ernestine === 2 ? "active" : ""
                }`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="personne-reverse">
            <div className="pic1">
              <img
                src={pic16}
                alt="Florian Gouvier, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Florian === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Florian2}
                alt="Florian Gouvier, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Florian === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={pic10}
                alt="Florian Gouvier, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Florian === 2 ? "active" : ""}
                loading="lazy"
              />
            </div>
            <div className="text1">
              <h3>Florian Gouvier</h3>
              <p className="main-text">
                Florian est un jongleur, acrobate, technicien lumière, prof de
                cirque... <br />
                Mais ce qu&#39;il aime par-dessus tout, c&#39;est rêver. Alors,
                pour pouvoir le faire tout le temps, il a donné naissance à
                Marco Leptique, maestro de la sieste, dormeur professionnel,
                virevoltant des songes ! <br />
                Venez rêver en sa compagnie !
              </p>
              <p className="hover-text">Marco Leptique</p>
            </div>
          </div>
          <div className="personne">
            <div className="text1">
              <h3>Ulysse Junek</h3>
              <p className="main-text">
                Altiste virtuose, énergumène passionné et esthète cuistot,
                Ulysse se transforme pour notre plus grande joie en Tyson,
                culturiste de la tignasse, poseur invétéré, philosophe de
                comptoir aux questionnements existentiels. <br />
                Venez écouter ses discours et sa sublime musique, ou
                l&#39;inverse !
              </p>
              <p className="hover-text">Tyson</p>
            </div>
            <div className="pic1">
              <img
                src={Ulysse}
                alt="Ulysse Junek, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Ulysse === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Ulysse2}
                alt="Ulysse Junek, artiste de La Compagnie Wanubida"
                className={`right-image ${
                  currentImageIndexes.Ulysse === 1 ? "active" : ""
                }`}
                loading="lazy"
              />

              <img
                src={pic29}
                alt="Ulysse Junek, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Ulysse === 2 ? "active" : ""}
                loading="lazy"
              />
            </div>
          </div>
          <div className="personne-reverse">
            <div className="pic1">
              <img
                src={pic30}
                alt="Emilie Rossi, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Emilie === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Emilie}
                alt="Emilie Rossi, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Emilie === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={pic9}
                alt="Emilie Rossi, artiste de La Compagnie Wanubida"
                className={`left-image ${
                  currentImageIndexes.Emilie === 2 ? "active" : ""
                }`}
                loading="lazy"
              />
            </div>
            <div className="text1">
              <h3>Emilie Rossi</h3>
              <p className="main-text">
                Danseuse et Circassienne, de l&#39;aérien à la contorsion,
                Emilie utilise le mouvement comme langage. <br />
                Elle passe de la sensualité au burlesque, de l&#39;intime à
                l&#39;époustouflant en un clin d&#39;œil. <br />
                Derrière la rudesse de Josie, son personnage, on aperçoit toute
                sa fragilité et ses failles, qui nous touchent et nous font
                rire.
              </p>
              <p className="hover-text">Josie</p>
            </div>
          </div>
          <div className="personne">
            <div className="text1">
              <h3>Adrien Sergent</h3>
              <p className="main-text">
                Il sait faire chanter tous les instruments qui passent entre ses
                mains... d&#39;ailleurs il aime aussi beaucoup chanter. <br />
                Est-ce lui ou Marcel, son personnage, qui ne peut s&#39;empêcher
                de taper sur tout ce qu&#39;il trouve ? <br />
                Ce qui est certain, c&#39;est qu&#39;il nous fait vibrer à
                l&#39;unisson de ses belles harmonies.
              </p>
              <p className="hover-text">Marcel</p>
            </div>
            <div className="pic1">
              <img
                src={pic4}
                alt="Adrien Sergent, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Adrien === 0 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={Adrien4}
                alt="Adrien Sergent, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Adrien === 1 ? "active" : ""}
                loading="lazy"
              />
              <img
                src={adrien3}
                alt="Adrien Sergent, artiste de La Compagnie Wanubida"
                className={currentImageIndexes.Adrien === 2 ? "active" : ""}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="valeurs">
          <h2>NOS VALEURS</h2>
        </div>
        <div className="valeur-text">
          <div className="intro">
            <div className="button-container">
              <button
                onClick={() => handleButtonClick("inclusion")}
                className={
                  activeSection === "inclusion"
                    ? "button-active"
                    : "button-inactive"
                }
              >
                Inclusion
              </button>
              {activeSection === "inclusion" && (
                <p>
                  L&#39;écriture et l&#39;administration collective du spectacle
                  et de la compagnie, en tenant compte des qualités de chacun.e,
                  le choix de créer pour ce lieu mythique qu&#39;est le
                  chapiteau sont les principaux ingrédients nécessaires à{" "}
                  <span>l&#39;équipe du Cabaret Wanubida</span> pour assurer
                  <span>l&#39;inclusion</span> de toutes et tous, artistes et
                  public. <br />
                  Le chapiteau, avec sa structure légère, peut s&#39;implanter
                  dans des lieux où l&#39;accès à la culture est inexistant.{" "}
                  <br />
                  Sa forme enveloppante, l&#39;imaginaire associé de spectacles
                  <span>&quot;accessibles à toustes&quot;</span>, en opposition
                  aux salles, potentiellement intimidantes, et puis la
                  modularité de l&#39;espace permet à tous les publics de venir
                  assister au spectacle sans problématique d&#39;accès physique
                  ou mentale.
                </p>
              )}
            </div>
            <div className="button-container2">
              <button
                onClick={() => handleButtonClick("partage")}
                className={
                  activeSection === "partage"
                    ? "button-active"
                    : "button-inactive"
                }
              >
                Partage
              </button>
              {activeSection === "partage" && (
                <p>
                  Se goûte et se respire à chaque minute du spectacle et de la
                  vie du collectif. <br />
                  Les artistes brisent <span>le 4ème mur</span> et dialoguent
                  directement avec le public, le prennent à partie, sans pour
                  autant le contraindre. <br />
                  Ce dernier est largement invité à participer tout au long du
                  spectacle. <br />
                  La vie en collectif, propre à la tournée de cirque, être
                  accueillis et aidés par nos hôtes, par de nombreux bénévoles
                  venus de tous horizons, nous invite à
                  <span>un riche partage de vie</span> et de travail.
                </p>
              )}
            </div>
            <div className="button-container3">
              <button
                onClick={() => handleButtonClick("poésie")}
                className={
                  activeSection === "poésie"
                    ? "button-active"
                    : "button-inactive"
                }
              >
                Poésie
              </button>
              {activeSection === "poésie" && (
                <p>
                  Sans elle, pas de collectif, de rencontre et de magie. <br />
                  Sans poésie, pas de pas de côté avec le réel qui nous permet
                  de mieux le voir, parfois : sous un autre angle, sans nous le
                  prendre en pleine tronche, en passant par le rire (autre
                  ingrédient phare de notre travail). <br />
                  Nous sommes tous.tes convaincu.es que c&#39;est elle,
                  <span> de la toute petite poésie</span> d&#39;une coïncidence
                  à la grande des académies ou des feux d&#39;artifices, qui met
                  de la couleur dans nos vies, et sur scène, et souhaitons vous
                  le partager.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="shows">
          <h2>LES AUTRES SPECTACLES</h2>
        </div>
        <div className="aimer">
          <h3>Le temps d&rsquo;aimer</h3>
        </div>
        <div className="moreshows">
          <p>
            &quot;Un duo de clown qui se remémore l&#39;ancien temps pour aller
            de l&#39;avant !&quot;
          </p>
          <div className="flex-intro">
            <div className="pic-aimer">
              <img
                src={temps}
                alt="affiche du spectacle le temps d'aimer"
                onClick={() => handleImageClick(temps)}
                loading="lazy"
              />
            </div>
            <div className="pro1">
              <h2>Dossier Pro</h2>
              <div className="button-container1">
                <a
                  href={dossiertda}
                  download="dossier.pdf"
                  className="download-button1"
                >
                  Télécharger le document PDF
                </a>
              </div>
              <div className="button-container10">
                <a
                  href={dossiertda}
                  className="download-button1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le document PDF
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="personne-reverse">
          <div className="pic1">
            <img
              src={tda1}
              alt="Zoé Renou, gauthier knoch, artiste de La Compagnie Wanubida"
              className={currentImageIndexes.tda === 0 ? "active" : ""}
              loading="lazy"
            />
            <img
              src={tda2}
              alt="Zoé Renou, gauthier knoch, artiste de La Compagnie Wanubida"
              className={currentImageIndexes.tda === 1 ? "active" : ""}
              loading="lazy"
            />
            <img
              src={tda3}
              alt="Zoé Renou, gauthier knoch, artiste de La Compagnie Wanubida"
              className={currentImageIndexes.tda === 2 ? "active" : ""}
              loading="lazy"
            />
          </div>
          <div className="text1">
            <h3>Zoé Renou</h3>
            <h3>Gauthier Koch</h3>
            <p className="main-text">
              Zoïzoï l&#39;électrique et Jojo le musicien ont pour objectif
              premier de venir chanter « le temps d&#39;aimer ». <br />
              Pour cela il leur faut un décor, une ambiance. <br />
              Ils ont donc amassé au fil du temps divers objets insolites qui
              ont chacun leur histoire et leur singularité. Généreux, énergiques
              mais distraits et maladroits, un méli-mélo se construit autour de
              Claudia, une ancienne carriole qu&#39;ils ont convertie en scène.{" "}
              <br />
              Malgré toute la méticulosité dont ils font preuve, ils se
              retrouvent confrontés à de nombreux obstacles et dilemmes. <br />
              Ce n&#39;est qu&#39;une fois le décor installé et la complicité du
              public acquise qu&#39;ils pourront présenter leur ultime numéro.
            </p>
            <p className="hover-text">Zoïzo et Jojo</p>
          </div>
        </div>

        <div className="cafe">
          <h3>Le temps d&apos;un café</h3>
          <p>-Spectacle burlesque tout public- </p>
          <span>45 min</span>
          <h4>Teaser</h4>
        </div>
        <div className="cafeshow" ref={teaserRef}>
          <div className="videocafe">
            <video controls onPlay={handlePlay} onPause={handlePause}>
              <source src={videocafe} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="personne-reverse">
          <div className="text1">
            <h3>Corentin Boisset </h3>
            <p className="main-text">
              Dans une routine métro boulot dodo, le temps s&#39;arrête, puis
              s&#39;accélère. <br />
              De quoi faire perdre la tête. <br />
              Heureusement, Léon a le temps d&#39;un café pour souffler. Mais
              serait-ce suffisant? <br />
              Ce solo de clown, mime, théâtre physique, emprunt de danse
              contemporaine est d&#39;une qualité fine. <br />
              Très drôle et sensible, ce spectacle raconte les galères
              quotidiennes et le temps à côté duquel on passe; nous renvoie à
              notre humanité, tout en simplicité. <br />
              Les enfants tout comme les plus grands s&#39;émeuvent ensemble de
              ce clown du quotidien et de ses chutes.
            </p>
            <p className="hover-text">Léon</p>
          </div>
          <div className="pic1">
            <img
              src={Corentin}
              alt="Corentin Boisset, artiste de La Compagnie Wanubida"
              className={currentImageIndexes.Coco === 0 ? "active" : ""}
              loading="lazy"
            />
            <img
              src={corentin4}
              alt="Corentin Boisset, artiste de La Compagnie Wanubida"
              className={currentImageIndexes.Coco === 1 ? "active" : ""}
              loading="lazy"
            />
          </div>
        </div>
        <div className="file1">
          <div className="pro1">
            <h2>Dossier Technique</h2>
            <div className="button-container1">
              <a
                href={cafetek}
                download="dossier.pdf"
                className="download-button1"
              >
                Télécharger le document PDF
              </a>
            </div>
            <div className="button-container10">
              <a
                href={cafetek}
                className="download-button1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le document PDF
              </a>
            </div>
          </div>
          <div className="pro1">
            <h2>Flyer</h2>

            <div className="button-container1">
              <a
                href={cafeflyer}
                download="dossier.pdf"
                className="download-button1"
              >
                Télécharger le document PDF
              </a>
            </div>
            <div className="button-container10">
              <a
                href={cafeflyer}
                className="download-button1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le document PDF
              </a>
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

export default Lacie;
