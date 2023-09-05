// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

function Contact() {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] bg-pink-500/10">
          {/* text */}
          <h2 className="h2">
            Let`s <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form action="">
            <div className="flex">
              <input type="text" placeholder="name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
