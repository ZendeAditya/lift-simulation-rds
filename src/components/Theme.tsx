"use client";
import { ThemeValue } from "@/app/context/ThemeContext";
import React, { useContext } from "react";
import { Button } from "./ui/button";

type Props = {};

const Theme = (props: Props) => {
  const { theme, setMode } = useContext(ThemeValue);
  return (
    <div>
      <Button
        className="py-2 px-2 w-24 rounded-lg m-2 bg-black dark:bg-white"
        onClick={() => setMode("light")}
      >
        {theme}
      </Button>
    </div>
  );
};

export default Theme;
