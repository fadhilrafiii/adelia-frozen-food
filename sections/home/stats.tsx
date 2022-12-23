import CountUp from 'react-countup';

import styles from './home.module.scss';

const Stats = () => {
  return (
    <section
      id="statistik-penjualan"
      className={'p-4 lg:py-14 bg-lighter-grey ' + styles.statsBoxShadow}
    >
      <div className="flex flex-wrap justify-evenly  gap-y-9">
        <div className="basis-1/2 md:basis-1/4 flex flex-col items-center">
          <span className="font-bold text-[26px] md:text-4xl lg:text-5xl xl:text-6xl mb-3">
            <CountUp end={500} />+
          </span>
          <span className="uppercase font-medium text-[10px] md:text-base lg:text-xl xl:text-2xl">
            Penjualan
          </span>
        </div>
        <div className="basis-1/2 md:basis-1/4 flex flex-col items-center">
          <span className="font-bold text-[26px] md:text-4xl lg:text-5xl xl:text-6xl mb-3">
            <CountUp end={300} />+
          </span>
          <span className="uppercase font-medium text-[10px] md:text-base lg:text-xl xl:text-2xl">
            Distributor
          </span>
        </div>
        <div className="basis-1/2 md:basis-1/4 flex flex-col items-center">
          <span className="font-bold text-[26px] md:text-4xl lg:text-5xl xl:text-6xl mb-3">
            <CountUp end={500} />+
          </span>
          <span className="uppercase font-medium text-[10px] md:text-base lg:text-xl xl:text-2xl">
            Reseller
          </span>
        </div>
        <div className="basis-1/2 md:basis-1/4 flex flex-col items-center">
          <span className="font-bold text-[26px] md:text-4xl lg:text-5xl xl:text-6xl mb-3">
            <CountUp end={5} />
          </span>
          <span className="uppercase font-medium text-[10px] md:text-base lg:text-xl xl:text-2xl">
            Outlet
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
