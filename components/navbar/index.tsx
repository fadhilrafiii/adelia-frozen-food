import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white relative shadow-lg z-10">
      <div className="w-full max-w-[419px] py-3 md:py-5 flex justify-evenly items-center gap-16 md:gap-32 mx-auto">
        <Link
          href="/produk"
          className="px-6 font-medium text-grey  text-sm md:text-2xl"
        >
          Produk
        </Link>
        <Link
          href="/tentang"
          className="px-6 font-medium text-grey  text-sm md:text-2xl"
        >
          Tentang
        </Link>
      </div>
      <div className="absolute inset-x-center w-[84px] md:w-[139px] h-[80px] md:h-[129px]  top-1">
        <Image
          src="/images/logo.png"
          alt="Adelia Frozen Food Lampung"
          sizes="(min-width: 768px) 139px, 66px"
          fill
          priority
        />
      </div>
    </header>
  );
};

export default Navbar;
