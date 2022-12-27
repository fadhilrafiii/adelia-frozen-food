import Image from 'next/image';

import Rating from 'components/rating';

import { Review } from 'shared/types/review';

import styles from './review-card.module.scss';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div
      className={
        'flex rounded-[12px] md:rounded-[20px] overflow-hidden h-full ' +
        styles.reviewCardShadow
      }
    >
      <div className="basis-1/3 relative">
        <Image
          src={review.image}
          alt={'Review dari ' + review.customerName}
          fill
          className="object-cover"
          placeholder="blur"
          quality={100}
        />
      </div>
      <div className="basis-2/3 bg-lighter-grey p-3 lg:p-5 flex flex-col justify-between items-start gap-y-6">
        <div>
          <h4 className="text-dark-grey mb-1 text-sm lg:text-xl xl:text-2xl font-bold capitalize">
            {review.customerName}
          </h4>
          <p className="text-justify text-[10px] lg:text-sm">{review.review}</p>
        </div>
        <Rating rating={review.rating} />
      </div>
    </div>
  );
};

export default ReviewCard;
