import React from "react";

const Empty = () => {
  return (
    <div className="emptyView-wrapper flex justify-center items-center h-[100%]">
      <img
        className="max-w-[500px] w-[100%]"
        src="./images/gif/empty.gif"
        alt="Empty-GIF"
      />
    </div>
  );
};

export default Empty;
