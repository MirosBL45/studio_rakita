// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

import { useLanguage } from './LanguageContext';

function Header() {
  const { language, setLanguage } = useLanguage();
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 pt-10">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/rakita-logo.png'}
              width={220}
              height={48}
              alt="rakita-logo"
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
}

export default Header;
