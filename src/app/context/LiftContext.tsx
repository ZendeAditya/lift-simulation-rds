// LiftContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Lift {
  currentFloor: number;
  targetFloor: number | null;
  isMoving: boolean;
}

export interface LiftContextProps {
  lifts: Lift[];
  requestLift: (requestedFloor: number) => void;
}

export const LiftContext = createContext<LiftContextProps | undefined>(
  undefined
);

interface LiftProviderProps {
  children: ReactNode;
  numLifts: number;
  numFloors: number;
}

export const LiftProvider: React.FC<LiftProviderProps> = ({
  children,
  numLifts,
}) => {
  const [lifts, setLifts] = useState<Lift[]>(
    Array.from({ length: numLifts }, () => ({
      currentFloor: 0,
      targetFloor: null,
      isMoving: false,
    }))
  );

  const requestLift = (requestedFloor: number) => {
    const nearestLiftIndex = lifts.reduce(
      (nearest, lift, index) => {
        if (lift.isMoving) return nearest;
        const distance = Math.abs(lift.currentFloor - requestedFloor);
        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: -1, distance: Infinity }
    ).index;

    if (nearestLiftIndex !== -1) {
      const updatedLifts = lifts.map((lift, idx) => {
        if (idx === nearestLiftIndex) {
          return { ...lift, targetFloor: requestedFloor, isMoving: true };
        }
        return lift;
      });
      setLifts(updatedLifts);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLifts((lifts) =>
        lifts.map((lift) => {
          if (!lift.isMoving || lift.targetFloor === null) return lift;

          const direction = lift.targetFloor > lift.currentFloor ? 1 : -1;
          const nextFloor = lift.currentFloor + direction;

          if (nextFloor === lift.targetFloor) {
            return {
              ...lift,
              currentFloor: nextFloor,
              targetFloor: null,
              isMoving: false,
            };
          }
          return { ...lift, currentFloor: nextFloor };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LiftContext.Provider value={{ lifts, requestLift }}>
      {children}
    </LiftContext.Provider>
  );
};
