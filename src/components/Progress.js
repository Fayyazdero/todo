import React from "react";

export const Progress = ({pwidth, value}) => {
  return (
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style={{width: `${pwidth}%`}}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
      </div>
    </div>
  );
};
