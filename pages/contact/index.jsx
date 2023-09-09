// icons
import { BsArrowRight } from 'react-icons/bs';

// framer-motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// emailjs
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_i3rs6cc',
        'template_oonxz7s',
        formRef.current,
        'o2jP32BE4AwKYKPs8'
      )
      .then(
        () => {
          setLoading(false);
          if (language === 'eng') {
            alert('Thank you. I will get back to you as soon as possible.');
          } else {
            alert('Hvala Vam. Javiću se čim budem u prilici.');
          }
        },
        (error) => {
          setLoading(false);
          console.log(error);
          if (language === 'eng') {
            alert('Somthing went wrong. Please, try again.');
          } else {
            alert('Nešto ne radi. Molimo probajte ponovo.');
          }
        }
      );
    e.target.reset();
  }

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Let`s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                name="user_name"
                type="text"
                placeholder="name"
                className="input"
              />
              <input
                name="user_email"
                type="email"
                placeholder="email"
                className="input"
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="subject"
              className="input"
            />
            <textarea
              name="message"
              className="textarea"
              placeholder="message"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {language === 'eng'
                  ? loading
                    ? 'Sending...'
                    : 'Let`s talk'
                  : loading
                  ? 'Šalje se...'
                  : 'Budimo u kontaktu'}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[32px] text-accent" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
