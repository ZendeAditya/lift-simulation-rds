"use client";
import { InputContexts } from "@/app/context/InputContext";
import React, { useContext, useMemo } from "react";
import Floor from "./Floor";

type Props = {};

const FloorDisplay = (props: Props) => {
  const { LiftNumber, Floors } = useContext(InputContexts) || {};

  const numberArray: number[] = Array.from(
    { length: Number(Floors) },
    (_, index) => index + 1
  );

  return (
    <div className="relative pt-10">
      {numberArray.map((num: number) => (
        <div key={num} className="my-2">
          <p className="text-2xl absolute py-[4rem] px-2">{num}</p>
          <Floor floorId={num} />
        </div>
      ))}
    </div>
  );
};

export default FloorDisplay;
