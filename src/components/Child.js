import React from "react";
import GrandChildren from './GrandChildren';

const Child = () => (
  <div className="child">
    <div>Child</div>
    <GrandChildren/>
  </div>
)

export default Child;