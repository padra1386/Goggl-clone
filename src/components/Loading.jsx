import React from "react";
import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Watch ariaLabel="loading-indicator" />{" "}
    </div>
  );
};

export default Loading;
