"use client";
import { InputContexts } from "@/app/context/InputContext";
import React, { useContext } from "react";
import Lift from "./Lift";

type Props = {};

const LiftDisplay = (props: Props) => {
  const { LiftNumber } = useContext(InputContexts) || {};

  const numberArray: number[] = Array.from(
    { length: Number(LiftNumber) },
    (_, index) => index + 1
  );

  return (
    <div className=" relative ps-52 ">
      <div className="absolute w-full bottom-5 flex items-center justify-start gap-5">
        {numberArray.map((lift, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-4"
            style={{ bottom: `${index * 100}px` }}
          >
            <Lift liftId={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiftDisplay;
