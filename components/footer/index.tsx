import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer
      id="adelia-frozen-food-info"
      className={'flex flex-wrap ' + styles.footerShadow}
    >
      <div className="basis-1/2 min-w-[320px]">
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
      <div className="basis-1/2 min-w-[320px] py-6 px-5">
        <h3 className="text-[18px] !tracking-[0.075em] mb-1 uppercase">
          Adelia Frozen Food
        </h3>
        <p className="text-grey text-sm capitalize">
          Pusatnya frozen yang berkualitas, lengkap, dan murah
        </p>
      </div>
    </footer>
  );
};

export default Footer;
