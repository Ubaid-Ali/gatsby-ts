import React from "react";

interface propsType {
    path?: string;
}

export default ({path}: propsType) => {
  return (
    <div>
      Client 1 Component <br /> current page is {path}
    </div>
  );
};
