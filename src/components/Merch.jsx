import blusinha from "../assets/blusinha.png";
import garrafinha from "../assets/garrafinha.png";
import bone from "../assets/bone.png";
import vinil from "../assets/vinil_merch.png";

function Merch() {
  return (
    <div className="merch">
      <div className="merch-title">
        <h1>Merch</h1>
      </div>

      <div className="merch-grid">
        <div className="merch-left">
          <div className="merch-lateral">
            <img src={bone} alt="boné" />
            <img src={garrafinha} alt="garrafinha" />
          </div>
          <div className="merch-shop">
            <img src={vinil} alt="vinil" />
            <div className="merch-shop-text">
              <h1>HS Merch</h1>
              <button className="merch-shop-button">shop now</button>
            </div>
          </div>
        </div>

        <div className="merch-horizontal">
          <img src={blusinha} alt="blusinha" />
        </div>
      </div>
    </div>
  );
}

export default Merch;
