import { aboutData } from "../../data/aboutData";
import { useState } from "react";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

function index() {
  const [index, setIndex] = useState(0);
  const [paja, setPaja] = useState(2);

  return (
    <div>
      <Circles />
    <p onClick={setIndex(3)}>paja: {paja}</p>
    <p onClick={setPaja(4)}>index: {index}</p>
    </div>
  );
}

export default index;
