"use client";
import React, { FormEvent, useState, useContext, ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { InputContexts } from "@/app/context/InputContext";
import { useRouter } from "next/navigation";
type Props = {};

const InputForm = (props: Props) => {
  const router = useRouter();
  const context = useContext(InputContexts);

  if (!context) {
    throw new Error("InputForm must be used within an InputProvider");
  }
  const { Lifts, setLifts, Floors, setFloors } = context;

  const handleLiftsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLifts(e.target.value);
  };

  const handleFloorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFloors(e.target.value);
  };
  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/simulation");
  };
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className=" border-2 rounded-lg shadow-xl w-96 h-72 text-center dark:shadow-lg dark:shadow-gray-700">
        <h2 className="text-xl p-2 uppercase">Lift Simulation</h2>

        <form
          className="p-5 relative flex items-center justify-center flex-col"
          onSubmit={hanldeSubmit}
        >
          <div className="py-4">
            <Input
              className="w-80"
              type="number"
              placeholder="Enter the No. of Floors?"
              value={Floors}
              onChange={handleFloorsChange}
            />
          </div>
          <div className="py-4">
            <Input
              className="w-80"
              type="number"
              placeholder="Enter the No. of Lifts?"
              value={Lifts}
              onChange={handleLiftsChange}
            />
          </div>
          <div>
            <Button className="bg-green-400 py-4 w-52 text-black font-bold text-lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InputForm;
