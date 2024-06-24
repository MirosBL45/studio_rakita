// icons
import { BsArrowRight } from 'react-icons/bs';

// framer-motion
import { motion } from 'framer-motion';

import { SERVICE_BASE, TEMPLATE_BASE, PUBLIC_BASE } from '../../data/constants';

// variants
import { fadeIn } from '../../variants';

// emailjs
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

// LanguageContext
// import { useLanguage } from '../../components/LanguageContext';

function Contact() {
  // const { language } = useLanguage();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(SERVICE_BASE, TEMPLATE_BASE, formRef.current, PUBLIC_BASE)
      .then(
        () => {
          setLoading(false);
          // if (language === 'eng') {
          //   alert('Thank you. I will get back to you as soon as possible.');
          // } else {
          //   alert('Hvala Vam. Javiću se čim budem u prilici.');
          // }
          alert('Hvala Vam. Javiću se čim budem u prilici.');
        },
        (error) => {
          setLoading(false);
          console.log(error);
          // if (language === 'eng') {
          //   alert('Somthing went wrong. Please, try again.');
          // } else {
          //   alert('Nešto ne radi. Molimo probajte ponovo.');
          // }
          alert('Nešto ne radi. Molimo probajte ponovo.');
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
            {'Imate neko'}{' '}
            {/* {language === 'eng' ? 'You have' : 'Imate neko'}{' '} */}
            <span className="text-accent">
              {'pitanje'}?
              {/* {language === 'eng' ? 'a question' : 'pitanje'}? */}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 mx-auto lg:mx-0 text-left"
          >
            Ako imate bilo kakve nedoumice ili želite saznati više o našim
            uslugama, slobodno nas kontaktirajte na telefon{' '}
            <a className="text-accent" href="tel:+381631234567">
              063 123 4567
            </a>{' '}
            ili putem forme. Odgovorićemo vam u najkraćem mogućem roku. Hvala na
            interesovanju!
          </motion.p>
          {/* form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
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
                placeholder="Ime"
                className="input"
                required
              />
              <input
                name="user_email"
                type="email"
                placeholder="E-mail"
                className="inputEmail"
                required
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Naslov"
              className="input"
              required
            />
            <textarea
              name="message"
              className="textarea"
              placeholder="Vaša poruka"
              required
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? 'Šalje se...' : 'Pošalji'}
                {/* {language === 'eng'
                  ? loading
                    ? 'Sending...'
                    : 'Let`s talk'
                  : loading
                  ? 'Šalje se...'
                  : 'Budimo u kontaktu'} */}
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
