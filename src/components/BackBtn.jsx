import React from 'react'
import { ArrowLeft } from "../assets";

const BackBtn = () => {
  return (
    <a
      href="#"
      className="w-fit mb-8 flex justify-start items-center gap-6 text-xs tracking-body1 leading-body1 font-bold md:text-med"
    >
      <ArrowLeft />
      <p>Go back</p>
    </a>
  );
}

export default BackBtn