import React from "react";
import { Button } from "../ui/button";

type Props = {
  floorId: number;
};

const Floor = (props: Props) => {
  const handleUpButton = () => {
    console.log("Up button on : ", props.floorId);
  };
  const handleDownButton = () => {
    console.log("Down button on : ", props.floorId);
  };
  return (
    <div className="p-2">
      <div className="w-auto h-40 mx-4 border-2 border-gray-700 shadow-lg rounded-md p-3">
        <div className=" flex flex-col py-7 gap-3">
          <Button
            onClick={handleUpButton}
            className="bg-green-400 py-2 w-40 rounded-md shadow-lg"
          >
            Up
          </Button>
          <Button
            onClick={handleDownButton}
            className="bg-red-400 py-2 w-40 rounded-md shadow-lg"
          >
            Down
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Floor;
