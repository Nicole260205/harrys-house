import harry from '../assets/about.png'
function About() {
  return (
    <>
      <div className="about">
        <img src={harry} alt="Harry Styles" className="about-image" />
        <div className="about-text">
          <h1 className="about-title">about</h1>
          <p className="about-paragraph">
            "Harry's House" is a stunning album that showcases Harry Styles'
            growth as a musician and songwriter. With its diverse range of
            musical styles and introspective lyrics, the album is a testament to
            Harry's versatility and his ability to create music that resonates
            with audiences around the world.
          </p>
          <p className="about-paragraph">
            The album's title, "Harry's House", is a reference to the singer's
            childhood home in Holmes Chapel, England, and the album's artwork
            features a photograph of the house. The album has been praised for
            its honesty and vulnerability, with many critics noting that it
            showcases a more mature and introspective side of Harry Styles.
          </p>
        </div>
      </div>
    </>
  );
}

export default About
