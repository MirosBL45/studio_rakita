import { aboutData } from "../../data/aboutData";
import { useState } from "react";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

function index() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Circles />
    </div>
  );
}

export default index;
