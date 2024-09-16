"use client";
import InputContext, { InputContexts } from "@/app/context/InputContext";
import { LiftProvider } from "@/app/context/LiftContext";
import React, { ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
};

const LiftProviders = ({ children }: Props) => {
  const { LiftNumber, Floors } = useContext(InputContexts) || {};
  return (
    <LiftProvider numLifts={Number(LiftNumber)} numFloors={Number(Floors)}>
      {children}
    </LiftProvider>
  );
};

export default LiftProviders;
