import React from "react";
import Countdown from "react-countdown";

const SaleCount = () => {
  // Set the target date (e.g., 3 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // 3 days from now
  targetDate.setHours(23, 59, 59, 0); // Set to end of day

  // Format time values to always show 2 digits
  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="">
      {/* Header with red accent */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-red-600 w-3 h-10 md:w-4 md:h-12 flex-shrink-0"></div>
        <h1 className="text-2xl md:text-3xl font-extrabold">Today&apos;s</h1>
      </div>

      {/* Main content */}
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex gap-10">
              {/* Flash Sales title */}
              <h1 className="text-2xl md:text-4xl font-extrabold">
                Flash Sales
              </h1>

              {/* Timer section */}
              <div className="flex items-center h-full">
                {/* Days */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Days</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(days)}
                  </h2>
                </div>
                <span className="text-xl font-extrabold h-full flex items-center justify-center text-red-500 pt-5">
                  :
                </span>

                {/* Hours */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Hours</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(hours)}
                  </h2>
                </div>
                <span className="text-xl font-extrabold h-full flex items-center justify-center text-red-500 pt-5">
                  :
                </span>

                {/* Minutes */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Minutes</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(minutes)}
                  </h2>
                </div>
                <span className="text-xl font-extrabold h-full flex items-center justify-center text-red-500 pt-5">
                  :
                </span>

                {/* Seconds */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Seconds</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(seconds)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default SaleCount;
