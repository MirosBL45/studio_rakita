// links
import Link from 'next/link';

// icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';

import { SlGlobe } from 'react-icons/sl';

function Socials({ language, setLanguage }) {
  return (
    <>
      <div className="flex items-center gap-x-14">
        <div className="flex items-center gap-x-5 text-lg lg:text-2xl xl:text-3xl">
          <Link
            href={'https://www.youtube.com/@studiorakita3385/videos'}
            className="hover:text-accent transition-all duration-300"
            rel="noopener noreferrer"
            target="_blank"
            title={
              language === 'eng'
                ? 'Visit Our YouTube channel'
                : 'Pogledajte Naš YouTube kanal'
            }
          >
            <RiYoutubeLine />
          </Link>
          <Link
            href={'https://www.instagram.com/highlights.studio.rakita/'}
            className="hover:text-accent transition-all duration-300"
            rel="noopener noreferrer"
            target="_blank"
            title={
              language === 'eng'
                ? 'Visit Us on Instagram'
                : 'Pogledajte Nas na Instagramu'
            }
          >
            <RiInstagramLine />
          </Link>
          <Link
            href={'https://www.facebook.com/highlights.studio.rakita/'}
            className="hover:text-accent transition-all duration-300"
            rel="noopener noreferrer"
            target="_blank"
            title={
              language === 'eng'
                ? 'Visit Our Facebook account'
                : 'Pogledajte Naš Facebook nalog'
            }
          >
            <RiFacebookLine />
          </Link>
        </div>
        <div
          onClick={() => {
            if (language === 'srb') {
              setLanguage('eng');
            } else {
              setLanguage('srb');
            }
          }}
          title={
            language === 'srb' ? 'Translate into English' : 'Prevedi na srpski'
          }
          className="text-lg lg:text-2xl cursor-pointer z-50 hover:text-accent transition-all duration-300"
        >
          <SlGlobe />
        </div>
      </div>
    </>
  );
}

export default Socials;
