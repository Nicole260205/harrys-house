import { useState } from "react";

function Tour() {
  const allShows = [
    {
      date: "December 06, 2022",
      city: "São Paulo",
      state: "Brazil",
      venue: "Allianz Parque",
      ticketsLink: "#",
    },
    {
      date: "December 08, 2022",
      city: "Rio de Janeiro",
      state: "Brazil",
      venue: "Jeunesse Arena",
      ticketsLink: "#",
    },
    {
      date: "December 10, 2022",
      city: "Curitiba",
      state: "Brazil",
      venue: "Pedreira Paulo Leminski",
      ticketsLink: "#",
    },
    {
      date: "December 13, 2022",
      city: "São Paulo",
      state: "Brazil",
      venue: "Allianz Parque",
      ticketsLink: "#",
    },
    {
      date: "December 14, 2022",
      city: "São Paulo",
      state: "Brazil",
      venue: "Allianz Parque",
      ticketsLink: "#",
    },
    {
      date: "January 26, 2023",
      city: "Inglewood",
      state: "United States",
      venue: "Kia Forum",
      ticketsLink: "#",
    },
    {
      date: "January 27, 2023",
      city: "Inglewood",
      state: "United States",
      venue: "Kia Forum",
      ticketsLink: "#",
    },
    {
      date: "January 28, 2023",
      city: "Inglewood",
      state: "United States",
      venue: "Kia Forum",
      ticketsLink: "#",
    },
    {
      date: "January 31, 2023",
      city: "Thousand Palms",
      state: "United States",
      venue: "Acrisure Arena",
      ticketsLink: "#",
    },
    {
      date: "February 01, 2023",
      city: "Thousand Palms",
      state: "United States",
      venue: "Acrisure Arena",
      ticketsLink: "#",
    },
    // Adicione mais shows conforme necessário
  ];

  const [visibleShows, setVisibleShows] = useState(allShows.slice(0, 8));
  const [showAll, setShowAll] = useState(false);

  const toggleShows = () => {
    if (showAll) {
      setVisibleShows(allShows.slice(0, 8));
    } else {
      setVisibleShows(allShows);
    }
    setShowAll(!showAll);
  };

  return (
    <div className="tour">
      <div className="tour-title">
        <h1>Love On Tour</h1>
      </div>
      <table className="tour-table">
        <tbody>
          {visibleShows.map((show, index) => (
            <tr key={index}>
              <td>{show.date}</td>
              <td>
                {show.city}, {show.state}
              </td>
              <td>{show.venue}</td>
              <td>
                <a
                  href={show.ticketsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>tickets</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {allShows.length > 8 && (
        <div className="more-shows">
          <button onClick={toggleShows}>
            {showAll ? "Show Less" : "More Shows"}
            <span className={`arrow ${showAll ? "up" : "down"}`}>▼</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Tour;
