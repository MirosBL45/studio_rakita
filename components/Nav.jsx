// data
import { navData, navDataSR } from '../data/navData';

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

// LanguageContext
import { useLanguage } from '../components/LanguageContext';

function Nav() {
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 mt-auto xl:right-[2%] z-50 t-0 w-full xl:w-16 xl:max-w-md xl:bottom-[25vh]">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {/* {language === 'eng'
          ? navData.map((link, index) => (
              <Link
                className={`${
                  link.path === pathname && 'text-accent'
                } relative flex items-center group hover:text-accent transition-all duration-300`}
                key={index}
                href={link.path}
              >
                <div className="absolute right-0 pr-14 hidden xl:group-hover:flex">
                  <div className="bg-rose-700 relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div
                      style={{ width: 'max-content' }}
                      className="text-[12px] leading-none font-semibold capitalize"
                    >
                      {link.name}
                    </div>

                    <div className="border-solid border-l-rose-700 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>

                <div>{link.icon}</div>
              </Link>
            ))
          : navDataSR.map((link, index) => (
              <Link
                className={`${
                  link.path === pathname && 'text-accent'
                } relative flex items-center group hover:text-accent transition-all duration-300`}
                key={index}
                href={link.path}
              >
                <div className="absolute right-0 pr-14 hidden xl:group-hover:flex">
                  <div className="bg-rose-700 relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div
                      style={{ width: 'max-content' }}
                      className="text-[12px] leading-none font-semibold capitalize"
                    >
                      {link.name}
                    </div>

                    <div className="border-solid border-l-rose-700 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>

                <div>{link.icon}</div>
              </Link>
            ))} */}
        {navDataSR.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && 'text-accent'
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            {/* tooltip */}
            <div className="absolute right-0 pr-14 hidden xl:group-hover:flex">
              <div className="bg-rose-700 relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div
                  style={{ width: 'max-content' }}
                  className="text-[12px] leading-none font-semibold capitalize"
                >
                  {link.name}
                </div>
                {/* triangle */}
                <div className="border-solid border-l-rose-700 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
