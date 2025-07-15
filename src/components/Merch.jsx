import blusinha from '../assets/blusinha.png'
import garrafinha from '../assets/garrafinha.png'
import bone from '../assets/bone.png'
import vinil from '../assets/vinil_merch.png'

function Merch() {
  return (
    <>
      <div className="merch">
        <div className="merch-title">
          <h1>Merch</h1>
        </div>
        <div className="merch-grid">
          <img src={bone} alt="" />
          <img src={garrafinha} alt="" />
          <img src={blusinha} alt="" />
        </div>
      </div>
    </>
  );
}

export default Merch
