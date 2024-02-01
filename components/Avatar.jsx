// next image
import Image from 'next/image';

function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
      <Image
        src={'/drone.svg'}
        width={537}
        // width={737}
        height={678}
        alt="avatar"
        className="translate-z-0"
      />
    </div>
  );
}

export default Avatar;
