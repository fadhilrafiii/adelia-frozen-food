import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

interface CountAnimationProps {
  end: number;
}

const CountAnimation = ({ end }: CountAnimationProps) => {
  return (
    <CountUp end={end} redraw>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default CountAnimation;
