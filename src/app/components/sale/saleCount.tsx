"use client";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Header from "../ui/Header";

const SaleCount = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    date.setHours(23, 59, 59, 0);
    setTargetDate(date);
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  if (!targetDate) {
    return null; // or you can return a loading spinner
  }

  return (
    <div className="">
      <Header title="Today's" />

      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex gap-10">
              <h1 className="text-2xl md:text-4xl font-extrabold">
                Flash Sales
              </h1>

              <div className="flex items-center h-full">
                {/* Days */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Days</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(days)}
                  </h2>
                </div>
                <span className="text-xl font-extrabold h-full flex items-center justify-center text-[#DB4444] pt-5">
                  :
                </span>

                {/* Hours */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Hours</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(hours)}
                  </h2>
                </div>
                <span className="text-xl font-extrabold h-full flex items-center justify-center text-[#DB4444] pt-5">
                  :
                </span>

                {/* Minutes */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <p className="text-xs md:text-sm leading-tight">Minutes</p>
                  <h2 className="text-xl md:text-2xl font-extrabold leading-none">
                    {formatTime(minutes)}
                  </h2>
                </div>
                <span className="text-xl font-extrabold h-full flex items-center justify-center text-[#DB4444] pt-5">
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
