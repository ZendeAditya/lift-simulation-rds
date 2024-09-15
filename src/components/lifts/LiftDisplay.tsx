"use client";
import { InputContexts } from "@/app/context/InputContext";
import React, { useContext } from "react";
import Lift from "./Lift";

type Props = {};

const LiftDisplay = (props: Props) => {
  const { Lifts } = useContext(InputContexts) || {};

  const numberArray: number[] = Array.from(
    { length: Number(Lifts) },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-start gap-2 relative ps-52">
      {numberArray.map((num: number) => (
        <div key={num}>
          <Lift />
        </div>
      ))}
    </div>
  );
};

export default LiftDisplay;
