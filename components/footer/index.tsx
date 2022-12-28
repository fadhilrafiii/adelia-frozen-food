import Link from 'next/link';

import CallFilledIcon from 'components/icons/call-filled';
import FacebookFilledIcon from 'components/icons/facebook-filled';
import InstagramOutlineIcon from 'components/icons/instagram-outline';
import LocationOutlineIcon from 'components/icons/location-outline';
import TiktokOutlineIcon from 'components/icons/tiktok-outline';

import { Colors } from 'shared/constants/colors';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer
      id="adelia-frozen-food-info"
      className={'flex flex-wrap bg-white ' + styles.footerShadow}
    >
      <div className="basis-1/2 flex-grow  min-w-[320px]">
        <div className={styles.mapouter}>
          <div className={styles.gmap_canvas}>
            <iframe
              className={styles.gmap_iframe}
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Frozen Mart Adelia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://www.gachacute.com/">Gacha Cute</a>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex-grow min-w-[320px] py-6 md:py-8 lg:px-11 px-5 md:px-7 xl:pr-16 lg:py-11 flex flex-col justify-between gap-y-6 md:gap-y-8 lg:gap-y-11">
        <div className="flex-grow">
          <h3 className="text-[18px] md:text-2xl lg:text-[32px] !tracking-[0.075em] mb-1 md:mb-2 lg:mb-[14px] uppercase">
            Adelia Frozen Food
          </h3>
          <p className="text-grey text-sm md:text-base lg:text-[30px] capitalize mb-6 md:mb-9 lg:mb-11 !leading-snug">
            Pusatnya frozen yang berkualitas, lengkap, dan murah
          </p>
          <div className="flex flex-col gap-2 md:gap-4">
            <Link
              href="https://api.whatsapp.com/send/?phone=6288276328327&text&type=phone_number&app_absent=0"
              target="_blank"
              className={
                'flex gap-3 md:gap-5  items-start justify-start ' +
                styles.socmedIcon
              }
            >
              <CallFilledIcon size={13} color={Colors.DarkGrey} />
              <span className="text-[10px] md:text-sm lg:text-[18px] md:[text-18px] text-dark-grey">
                (+62) 882-7632-8327
              </span>
            </Link>
            <div
              className={
                'flex gap-3 md:gap-5 items-start justify-start ' +
                styles.socmedIcon
              }
            >
              <LocationOutlineIcon size={13} color={Colors.DarkGrey} />
              <span className="text-[10px] md:text-sm lg:text-[18px] md:[text-18px] text-dark-grey">
                Jl. Purnawirawan No. 33, Bandar Lampung
              </span>
            </div>
            <Link
              href="https://instagram.com/adelia_frozen_bdl?igshid=YmMyMTA2M2Y="
              target="_blank"
              className={
                'flex gap-3 md:gap-5  items-start justify-start ' +
                styles.socmedIcon
              }
            >
              <InstagramOutlineIcon size={13} color={Colors.DarkGrey} />
              <span className="text-[10px] md:text-sm lg:text-[18px] md:[text-18px] text-dark-grey">
                adelia_frozen_bdl
              </span>
            </Link>
            <Link
              href="https://www.tiktok.com/@adeliafrozenfoodbdl"
              target="_blank"
              className={
                'flex gap-3 md:gap-5  items-start justify-start ' +
                styles.socmedIcon
              }
            >
              <TiktokOutlineIcon size={13} color={Colors.DarkGrey} />
              <span className="text-[10px] md:text-sm lg:text-[18px] md:[text-18px] text-dark-grey">
                adeliafrozenfoodbdl
              </span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100034012502987"
              target="_blank"
              className={
                'flex gap-3 md:gap-5  items-start justify-start ' +
                styles.socmedIcon
              }
            >
              <FacebookFilledIcon size={13} color={Colors.DarkGrey} />
              <span className="text-[10px] md:text-sm lg:text-[18px] md:[text-18px] text-dark-grey">
                Adelia Grosir (Adelia Frozen Food)
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[8px] md:text-xs lg:text-base text-[#1a1a1a]">
            &#169; Adelia Frozen Food 2022
          </span>
          <span className="text-[8px] md:text-xs lg:text-base text-[#1a1a1a]">
            Dibuat oleh Flee Tech
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
