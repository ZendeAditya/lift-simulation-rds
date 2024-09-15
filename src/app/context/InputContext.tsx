"use client";

import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

interface InputContextType {
  Lifts: string;
  setLifts: (value: string) => void;
  Floors: string;
  setFloors: (value: string) => void;
}

export const InputContexts = createContext<InputContextType | undefined>(
  undefined
);

const InputContext = ({ children }: Props) => {
  const [Lifts, setLifts] = useState<string>();
  const [Floors, setFloors] = useState<string>();

  if (Lifts == "0" || Floors == "0") {
    alert("Input should not be zero!");
  }

  return (
    <InputContexts.Provider
      value={{ Lifts: Lifts || "", setLifts, Floors: Floors || "", setFloors }}
    >
      {children}
    </InputContexts.Provider>
  );
};

export default InputContext;
