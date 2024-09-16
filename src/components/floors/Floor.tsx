"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { FloorNumberContext } from "@/app/context/FloorContext";
import { LiftContext, LiftContextProps } from "@/app/context/LiftContext";

type Props = {
  floorId: number;
};

const Floor = (props: Props) => {
  const { setFloorNum } = useContext(FloorNumberContext);
  const { requestLift } = useContext(LiftContext) as LiftContextProps;
  const handleUpButton = () => {
    setFloorNum(props.floorId);
    requestLift(props.floorId);
  };
  const handleDownButton = () => {
    setFloorNum(props.floorId);
    requestLift(props.floorId);
  };
  return (
    <div className="p-2 pt">
      <div className="w-auto h-44 mx-4 border-2 border-gray-700 shadow-lg rounded-md p-3">
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
