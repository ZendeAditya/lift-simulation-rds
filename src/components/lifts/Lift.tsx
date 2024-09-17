import React, { useContext } from "react";
type Props = {
  liftId: number;
};

const Lift = (props: Props) => {
  return (
    <div className="">
      <div className="w-20 h-40 rounded-lg border-2 border-green-500 ">
        {props.liftId}
      </div>
    </div>
  );
};

export default Lift;
