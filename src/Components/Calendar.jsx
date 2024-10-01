import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  parseISO,
} from "date-fns";
import { fr } from "date-fns/locale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./Calendar.css";
import groupe3 from "../Pics/groupe3.webp";

// Liste des événements avec des classes spéciales pour certaines dates
const events = [
  {
    date: "2024-09-27",
    type: "friday",
    link: "/billetterie/event1",
    time: "19:00",
  },
  {
    date: "2024-09-28",
    type: "saturday",
    link: "/billetterie/event2",
    time: "16:00",
  },
  {
    date: "2024-09-29",
    type: "sunday",
    link: "/billetterie/event3",
    time: "16:00",
  },
  {
    date: "2024-10-02",
    type: "wednesday",
    link: "/billetterie/event4",
    time: "16:00",
  },
  {
    date: "2024-10-03",
    type: "thursday",
    link: "/billetterie/event19",
    time: "10:00",
  },
  {
    date: "2024-10-04",
    type: "friday",
    link: "/billetterie/event5",
    time: "10:00/19:00",
  },
  {
    date: "2024-10-05",
    type: "saturday",
    link: "/billetterie/event6",
    time: "16:00",
  },
  {
    date: "2024-10-06",
    type: "sunday",
    link: "/billetterie/event7",
    time: "11:00/16:00",
  },

  {
    date: "2024-10-18",
    type: "friday",
    link: "/billetterie/event8",
    time: "19:00",
  },
  {
    date: "2024-10-19",
    type: "saturday",
    link: "/billetterie/event9",
    time: "16:00",
  },
  {
    date: "2024-10-20",
    type: "sunday",
    link: "/billetterie/event10",
    time: "16:00",
  },
  {
    date: "2024-10-23",
    type: "wednesday",
    link: "/billetterie/event11",
    time: "16:00",
  },
  {
    date: "2024-10-25",
    type: "friday",
    link: "/billetterie/event12",
    time: "19:00",
  },
  {
    date: "2024-10-26",
    type: "saturday",
    link: "/billetterie/event13",
    time: "16:00",
  },
  {
    date: "2024-10-27",
    type: "sunday",
    link: "/billetterie/event14",
    time: "16:00",
  },
  {
    date: "2024-10-30",
    type: "wednesday",
    link: "/billetterie/event15",
    time: "16:00",
  },
  {
    date: "2024-11-01",
    type: "friday",
    link: "/billetterie/event16",
    time: "19:00",
  },
  {
    date: "2024-11-02",
    type: "saturday",
    link: "/billetterie/event17",
    time: "16:00",
  },
  {
    date: "2024-11-03",
    type: "sunday",
    link: "/billetterie/event18",
    time: "11:00/16:00",
  },

  {
    date: "2022-09-30",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-01",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-12",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-14",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-10-15",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-10-16",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-19",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-21",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-10-22",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-10-23",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-26",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-10-28",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-10-29",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-10-30",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-11-02",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2022-11-04",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-11-05",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2022-11-06",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-10-06",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-07",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-08",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-10-11",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-10-13",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-14",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-15",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-20",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-21",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-22",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-10-25",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-10-27",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-28",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-10-29",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-11-01",
    type: "past",
    link: "",
    time: "",
  },

  {
    date: "2023-11-03",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-11-04",
    type: "past",
    link: "",
    time: "",
  },
  {
    date: "2023-11-05",
    type: "past",
    link: "",
    time: "",
  },
];

const Calendar = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const monthParam = query.get("month");

  useEffect(() => {
    // Set initial month based on URL parameter
    if (monthParam) {
      setCurrentMonth(parseISO(`${monthParam}-01`));
    } else {
      setCurrentMonth(new Date());
    }
  }, [monthParam]);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          />
        </div>
        <div className="col col-center">
          <span className="month-label">
            {format(currentMonth, dateFormat, { locale: fr })}
          </span>
        </div>
        <div className="col col-end">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          />
        </div>
      </div>
    );
  };

  const renderSpecialCases = () => {
    return (
      <div className="special-cases">
        <div className="special-case passees">
          Dates <span>passées</span>
        </div>
        <div className="special-case wednesday">
          Mercredi <span>16h</span>
        </div>
        <div className="special-case friday">
          Vendredi <span> 19h</span>
        </div>
        <div className="special-case saturday">
          Samedi <span>16h</span>
        </div>
        <div className="special-case sunday">
          Dimanche <span>16h</span>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eeee";
    const days = [];
    let startDate = startOfWeek(currentMonth, { locale: fr });

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      days.push(
        <div className="col col-center" key={i}>
          {format(day, dateFormat, { locale: fr })}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { locale: fr });
    const endDate = endOfWeek(monthEnd, { locale: fr });

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat, { locale: fr });
        const event = events.find((event) =>
          isSameDay(parseISO(event.date), day)
        );
        const type = event ? event.type : "";
        const time = event ? event.time : "";
        // Vérification si c'est le 3 octobre
        const isOrangeDay = format(day, "yyyy-MM-dd") === "2024-10-03";

        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, new Date())
                ? "selected"
                : isOrangeDay
                ? "orange-day" // Appliquer la classe orange-day
                : type
            }`}
            key={day}
            onClick={() => (type === "past" ? null : onDateClick(event))}
          >
            {event && <div className="event-indicator" />}
            <span className="number">{formattedDate}</span>
            {event && <span className="time-tooltip">{time}</span>}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  const onDateClick = (event) => {
    if (event && event.link) {
      navigate(event.link);
    }
  };

  return (
    <>
      <div className="calendar-page-background">
        <div className="titre">
          <h1>Agenda</h1>
        </div>
        <div className="calendar">
          {renderSpecialCases()}
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      </div>
      <div className="groupe-pic">
        <img
          src={groupe3}
          alt="photo groupe"
          className="responsive-agenda"
          onClick={() => handleImageClick(groupe3)}
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
    </>
  );
};

export default Calendar;
