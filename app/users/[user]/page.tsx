"use client"

import { useState } from "react";

export default function UserPage() {
  const [dc, setDc] = useState(Number(localStorage.getItem('dc')))
  return (
    <div>
      <h1>{dc}</h1>
    </div>
  );
}
