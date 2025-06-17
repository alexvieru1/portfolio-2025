// components/SmoothCursorWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { SmoothCursor } from "./smooth-cursor";

export default function SmoothCursorWrapper() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isTouch) return null;
  return <SmoothCursor />;
}
