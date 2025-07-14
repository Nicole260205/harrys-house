import { useState } from "react";
import "../App.css";

const allMVs = [
  {
    title: "Harry Styles - As It Was",
    url: "https://www.youtube.com/watch?v=H5v3kku4y6Q&list=RDH5v3kku4y6Q&start_radio=1",
  },
  {
    title: "Harry Styles - Late Night Talking",
    url: "https://www.youtube.com/watch?v=4VaqA-5aQTM",
  },
  {
    title: "Harry Styles - Music For a Sushi Restaurant",
    url: "https://www.youtube.com/watch?v=CiwMDFh_Rog",
  },
  {
    title: "Harry Styles - Satellite",
    url: "https://www.youtube.com/watch?v=bGZplqeIb3w",
  },
  {
    title: "Harry Styles - Daylight",
    url: "https://www.youtube.com/watch?v=-UJCMfuFtSQ",
  },
  {
    title: "Harry Styles - Lights Up",
    url: "https://www.youtube.com/watch?v=9NZvM1918_E",
  },
  {
    title: "Harry Styles - Adore You",
    url: "https://www.youtube.com/watch?v=VF-r5TtlT9w",
  },
  {
    title: "Harry Styles - Falling",
    url: "https://www.youtube.com/watch?v=olGSAVOkkTI",
  },
  {
    title: "Harry Styles - Watermelon Sugar",
    url: "https://www.youtube.com/watch?v=E07s5ZYygMg",
  },
  {
    title: "Harry Styles - Golden",
    url: "https://www.youtube.com/watch?v=P3cffdsEXXw",
  },
  {
    title: "Harry Styles - Sign of the Times",
    url: "https://www.youtube.com/watch?v=qN4ooNx77u0",
  },
  {
    title: "Harry Styles - Kiwi",
    url: "https://www.youtube.com/watch?v=9wg3v-01yKQ",
  },

  {
    title: "Harry Styles - Treat People with Kindness",
    url: "https://www.youtube.com/watch?v=L0X03zR0rQk",
  },
];

const mvSlides = [];
for (let i = 0; i < allMVs.length; i += 5) {
  const chunk = allMVs.slice(i, i + 5);
  if (chunk.length > 0) {
    mvSlides.push({
      main: chunk[0],
      others: chunk.slice(1),
    });
  }
}

function getYouTubeThumbnail(url) {
  const match = url.match(/v=([^&]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
}

export default function MVCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + mvSlides.length) % mvSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % mvSlides.length);
  };

  const currentSlide = mvSlides[currentIndex];

  return (
    <div className="mv-carousel fade-transition">
      <h1 className="mv-title">MVs</h1>
      <div className="mv-slide">
        <a
          href={currentSlide.main.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mv-main"
          style={{
            backgroundImage: `url(${getYouTubeThumbnail(
              currentSlide.main.url
            )})`,
          }}
        >
          <div className="mv-overlay">
            <span>{currentSlide.main.title}</span>
          </div>
        </a>

        <div className="mv-grid">
          {currentSlide.others.map((mv, index) => (
            <a
              key={index}
              href={mv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-thumb"
              style={{
                backgroundImage: `url(${getYouTubeThumbnail(mv.url)})`,
              }}
            >
              <div className="mv-overlay">
                <span>{mv.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mv-nav">
        <button onClick={handlePrev}>‹</button>
        <button onClick={handleNext}>›</button>
      </div>
    </div>
  );
}
