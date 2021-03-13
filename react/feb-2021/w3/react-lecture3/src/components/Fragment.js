import React from "react";

const Fragment = () => {
  const displayTV = () => {
    let arr = ["Good Girls", "Marriage or Mortgage", "Grey's Anatomy"];
    let arrOfJsx = arr.map((tv) => {
      return (
        <div key={tv} className="button">
          <h3>{tv}</h3>
          <p>Amazing</p>
        </div>
      );
    });
    return arrOfJsx;
  };

  return (
    <React.Fragment>
      {displayTV()}
      <h3>React Fragment and alligator bites</h3>
    </React.Fragment>
  );
};

export default Fragment;
