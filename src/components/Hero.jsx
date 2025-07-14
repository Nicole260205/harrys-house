import harry_house from "../assets/harrys_house.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <img src={harry_house} alt="Harry's House" className="hero-image" />
      </div>
      <h1 className="hero-title">Harry's House</h1>
    </>
  );
}

export default Hero;
