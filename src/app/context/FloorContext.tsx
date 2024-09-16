"use client";
import React, { Children, createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};
interface FloorContextTypes {
  floorNumber: number;
  setFloorNum: (num: number) => void;
}
export const FloorNumberContext = createContext<FloorContextTypes>({
  floorNumber: 0,
  setFloorNum: () => {},
});
const FloorContext = ({ children }: Props) => {
  const [floorNum, setFloorNum] = useState<number>(0);
  return (
    <FloorNumberContext.Provider value={{ floorNumber: floorNum, setFloorNum }}>
      {children}
    </FloorNumberContext.Provider>
  );
};

export default FloorContext;
