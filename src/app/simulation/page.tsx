import FloorDisplay from "@/components/floors/FloorDisplay";
import LiftDisplay from "@/components/lifts/LiftDisplay";
import React from "react";

type Props = {};

const SimulationPage = (props: Props) => {
  return (
    <div className="relative h-screen">
      <FloorDisplay />
      <LiftDisplay />
    </div>
  );
};

export default SimulationPage;
