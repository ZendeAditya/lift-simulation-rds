"use client";

import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

interface InputContextType {
  LiftNumber: string;
  setLiftNumber: (value: string) => void;
  Floors: string;
  setFloors: (value: string) => void;
}

export const InputContexts = createContext<InputContextType | undefined>(
  undefined
);

const InputContext = ({ children }: Props) => {
  const [LiftNumber, setLiftNumber] = useState<string>();
  const [Floors, setFloors] = useState<string>();

  if (LiftNumber == "0" || Floors == "0") {
    alert("Input should not be zero!");
  }

  return (
    <InputContexts.Provider
      value={{
        LiftNumber: LiftNumber || "",
        setLiftNumber,
        Floors: Floors || "",
        setFloors,
      }}
    >
      {children}
    </InputContexts.Provider>
  );
};

export default InputContext;
