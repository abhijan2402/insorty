import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        class="flex items-center justify-center"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
