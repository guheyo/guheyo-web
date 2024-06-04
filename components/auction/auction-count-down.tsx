'use client';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import ScheduleIcon from '@mui/icons-material/Schedule';

function AuctionCountdown({
  targetDate,
  displayLabel,
}: {
  targetDate: Date;
  displayLabel: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timer;

    const updateCountdown = () => {
      const now = dayjs();
      const end = dayjs(targetDate);
      const diff = end.diff(now);

      if (diff <= 0) {
        setIsAuctionEnded(true);
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const formattedTimeLeft =
        days > 1
          ? `${days}일`
          : `${hours.toString().padStart(2, '0')}:${minutes
              .toString()
              .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setTimeLeft(formattedTimeLeft);
    };

    updateCountdown(); // Initial call
    intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex flex-row gap-1 items-center">
      <ScheduleIcon className="opacity-50" fontSize="inherit" />
      {isAuctionEnded ? (
        <div className="flex flex-row items-center">
          {displayLabel && <span className="opacity-50">경매 종료:</span>}
          <span className="font-semibold ml-1">
            {dayjs(targetDate).format('YY.MM.DD HH:mm')}
          </span>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          {displayLabel && <span className="opacity-50">남은 시간:</span>}
          <span className="font-semibold ml-1">{timeLeft}</span>
        </div>
      )}
    </div>
  );
}

export default AuctionCountdown;
