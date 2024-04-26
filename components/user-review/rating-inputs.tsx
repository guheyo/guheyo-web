import Image from 'next/image';
import { RatingOption } from '@/lib/user-review/user-review.types';
import { Control, Controller } from 'react-hook-form';
import { UserReviewFormValues } from '@/lib/offer/offer.interfaces';
import RatingIcon from './rating-icon';

export default function RatingInputs({
  control,
  ratingOptions,
}: {
  control: Control<UserReviewFormValues>;
  ratingOptions: RatingOption[];
}) {
  return (
    <>
      {ratingOptions.map((ratingOption) => (
        <Controller
          key={ratingOption.label}
          control={control}
          name="rating"
          defaultValue={undefined}
          render={({ field }) => (
            <button
              type="button"
              onClick={() => field.onChange(ratingOption.ratingValue)}
              className={
                ratingOption.ratingValue !== field.value
                  ? `text-xs md:text-sm text-dark-200`
                  : `text-xs md:text-sm text-light-200`
              }
            >
              <RatingIcon
                icon={
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_URL}/${ratingOption.emojiPath}`}
                    width={56}
                    height={56}
                    alt={ratingOption.alt}
                  />
                }
                label={ratingOption.label}
              />
            </button>
          )}
        />
      ))}
    </>
  );
}
