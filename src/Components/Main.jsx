import { useRef, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import Footer from "../Components/Footer";
import chap from "../Pics/chapiteau.webp";
import affiche from "../Pics/affiche.webp";
import article from "../Pics/article.webp";
import video from "../Video/Wanubida.mp4";
import chap5 from "../Pics/chap5.webp";

const Main = () => {
  const navigate = useNavigate();
  const [enlargedImage, setEnlargedImage] = useState(null);
  const teaserRef = useRef(null);
  const goToAgendaApril = () => {
    navigate("/agenda?month=2025-04");
  };
  // Handle video play and pause
  const handlePlay = useCallback(() => {
    teaserRef.current.classList.add("video-playing");
  }, []);

  const handlePause = useCallback(() => {
    teaserRef.current.classList.remove("video-playing");
  }, []);

  // Handle image click and close
  const handleImageClick = useCallback((image) => {
    setEnlargedImage(image);
  }, []);

  const handleCloseImage = useCallback(() => {
    setEnlargedImage(null);
  }, []);

  // Redirect after 3 seconds
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <>
      <main className="main">
        <div className="cie">
          <h1 className="animated-title">Cabaret Wanubida</h1>
          <div className="description">
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
            alt="Affiche du spectacle, la tournée du facteur, Compagnie Wanubida"
            className="affiche-img"
            onClick={() => handleImageClick(affiche)}
            width="850"
            height="1200"
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && handleImageClick(affiche)} // Accessibility
          />
        </div>
        <div className="kahem">
          <p>-Kahem-</p>
        </div>
        <div className="teaser" ref={teaserRef}>
          <h2>Teaser</h2>
          <div className="video-container">
            <video
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              preload="auto"
              loading="lazy"
              onError={() => alert("Error loading video")}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="dates">
          <h2>Les prochaines dates</h2>
        </div>
        <div className="roane">
          <p>&quot;Retrouvez-nous à partir</p>
          <span>du 18 avril à Quingey&quot;</span>
        </div>
        <div className="button">
          <Link
            to="/agenda?month=2025-04"
            aria-label="Voir l'agenda des spectacles"
          >
            <button onClick={goToAgendaApril}>Agenda</button>
          </Link>
        </div>

        <div className="actus">
          <h2>ACTUS !</h2>
        </div>
        <div className="oyez">
          <h3>&ldquo;ATTENTION ATTENTION&rdquo;</h3>
          <p>
            Oyez oyez ! deux nouvelles représentations en avril se sont ajoutées
            à notre calendrier !
          </p>
          <p>
            Venez donc assister au sepctacle le vendredi 18 à 20h, le samedi 19
            et dimanche 20 à 16h !
          </p>
          <p>Un spectacle de bonne heure pour une journée de bonne humeur!</p>
        </div>
        <div className="benevol">
          <div className="text-benevoles">
            <span>
              <Link to="/contacts">Contactez-nous !</Link>
            </span>
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-imgchap">
            <img
              src={chap5}
              alt="Chapiteau monté par la Compagnie Wanubida"
              width="800"
              height="600"
              onClick={() => handleImageClick(chap5)}
              loading="lazy"
              tabIndex="0"
              onKeyPress={(e) => e.key === "Enter" && handleImageClick(chap5)} // Accessibility
            />
          </div>
        </div>
        <div className="all-press">
          <div className="presse">
            <h2>La presse en parle !</h2>
          </div>
          <div className="article">
            <img
              src={article}
              alt="Article de presse sur Wanubida"
              width="850"
              height="800"
              onClick={() => handleImageClick(article)}
              loading="lazy"
              tabIndex="0"
              onKeyPress={(e) => e.key === "Enter" && handleImageClick(article)} // Accessibility
            />
          </div>
        </div>
        <div className="comments">
          <h2>Avis des spectateurs</h2>
        </div>
        <div className="comments-container">
          <div className="comments-wrapper">
            {[
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
            ].map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment.text}</p>
                <span>{comment.author}</span>
              </div>
            ))}

            {[
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
            ].map((comment, index) => (
              <div key={index + 7} className="comment">
                <p>{comment.text}</p>
                <span>{comment.author}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tournee">
          <p>L&apos;équipe prépare sa 3ème tournée ! </p>
          <p>
            La Cie s&rsquo;agrandit, s&rsquo;équipe d&rsquo;un nouveau parquet
            et fabrique un nouvel espace d&rsquo;accueil public qui en jette !
          </p>
        </div>

        <div className="reseau">
          <h2>
            Nous Suivre<span className="dots">.</span>
          </h2>
        </div>
        <div className="icon">
          <div className="facebook">
            <a
              href="https://www.facebook.com/cabaretwanubida"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez notre page Facebook"
            >
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/cabaret_wanubida/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez notre page Instagram"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="pic">
          <img
            src={chap}
            alt="Chapiteau de la Compagnie Wanubida"
            className="responsive-img"
            onClick={() => handleImageClick(chap)}
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && handleImageClick(chap)} // Accessibility
          />
        </div>
      </main>
      <Footer />
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
    </>
  );
};

export default Main;
