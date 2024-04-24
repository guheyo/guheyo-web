import Image from 'next/image';
import RatingIcon from './rating-icon';

export default function RatingInputs() {
  return (
    <>
      <RatingIcon
        icon={
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/emoji/frustrated.gif`}
            width={56}
            height={56}
            alt="불쾌해요"
          />
        }
        label="불쾌해요"
      />
      <RatingIcon
        icon={
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/emoji/ok.gif`}
            width={56}
            height={56}
            alt="좋아요"
          />
        }
        label="좋아요"
      />
      <RatingIcon
        icon={
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/emoji/love.gif`}
            width={56}
            height={56}
            alt="최고예요"
          />
        }
        label="최고예요"
      />
    </>
  );
}
