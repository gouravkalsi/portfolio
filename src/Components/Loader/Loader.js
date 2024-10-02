import React from "react";
import { Dna } from "react-loader-spinner";
export default function Loader() {
 return (
  <div className="w-full h-full flex justify-center items-center">
   <Dna visible={true} height="150" width="150" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
  </div>
 );
}
