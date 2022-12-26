import React from 'react';

import StarIcon from 'components/icons/star-fill';

import styles from './rating.module.scss';

interface RatingProps {
  iconColor?: string;
  rating: number;
  className: string;
  iconSize?: 'large' | 'medium' | 'small';
}

const Rating = ({
  iconColor = '#FFC93D',
  rating,
  className = '',
  iconSize = 'medium',
}: RatingProps) => {
  return (
    <div className="inline-flex relative">
      <div
        style={{ width: `calc(20% * ${rating}` }}
        className={'flex gap-1 overflow-hidden ' + className}
      >
        {Array(5)
          .fill(0)
          .map((_: number, idx: number) => (
            <span key={idx} className={styles[`starIcon-${iconSize}`]}>
              <StarIcon size={15} color={iconColor} />
            </span>
          ))}
      </div>
    </div>
  );
};

export default Rating;
