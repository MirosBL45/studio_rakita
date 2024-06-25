// links
import Link from 'next/link';

// icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';

function Socials() {
  return (
    <>
      <div className="flex items-center gap-x-14">
        <div className="flex items-center gap-x-5 text-lg lg:text-2xl xl:text-3xl">
          <Link
            href={'https://www.youtube.com/@studiorakita3385/videos'}
            className="hover:text-accent transition-all duration-300"
            rel="noopener noreferrer"
            target="_blank"
            title={'Pogledajte Naš YouTube kanal'}
          >
            <RiYoutubeLine />
          </Link>
          <Link
            href={'https://www.instagram.com/highlights.studio.rakita/'}
            className="hover:text-accent transition-all duration-300"
            rel="noopener noreferrer"
            target="_blank"
            title={'Pogledajte Nas na Instagramu'}
          >
            <RiInstagramLine />
          </Link>
          <Link
            href={'https://www.facebook.com/highlights.studio.rakita/'}
            className="hover:text-accent transition-all duration-300"
            rel="noopener noreferrer"
            target="_blank"
            title={'Pogledajte Naš Facebook nalog'}
          >
            <RiFacebookLine />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Socials;
