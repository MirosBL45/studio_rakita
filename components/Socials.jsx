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
            href={''}
            className="hover:text-accent transition-all duration-300"
          >
            <RiYoutubeLine />
          </Link>
          <Link
            href={''}
            className="hover:text-accent transition-all duration-300"
          >
            <RiInstagramLine />
          </Link>
          <Link
            href={''}
            className="hover:text-accent transition-all duration-300"
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
