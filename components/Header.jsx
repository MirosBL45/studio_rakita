// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-x-6 pt-[10px]">
          {/* logo */}
          <Link href={'/'}>
            <img
              className="h-[60px] sm:h-[100px]"
              src={'/rakita-logo-white.png'}
              alt="rakita-logo"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Header;
