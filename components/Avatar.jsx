// next image
import Image from 'next/image';

function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/drone.svg'}
        width={737}
        height={678}
        alt="avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
}

export default Avatar;
