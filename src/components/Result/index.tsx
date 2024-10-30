import React from "react";

const Result = () => {
  return (
    <div className="bg-white p-6 rounded-lg bg-gradient">
      <h3 className="text-2xl font-bold">Your Result</h3>

      <div className="relative w-40 h-40 bg-purple-50 rounded-full flex justify-center items-center text-center p-5 font-bold text-lg grd-circle">
        <span className="font-extrabold text-7xl text-white result">76</span>
        of 100
      </div>
      <h2 className="text-white font-bold">Great</h2>
      <p className="text-lg font-medium">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
