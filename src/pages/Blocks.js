import React from "react"

import "./Blocks.css"

export default function Blocks() {
  return (
    <div style={{ backgroundColor: "grey" }} className="block-layout">
      <div className="block block--full">Full Block</div>
      <div className="block block--full">Full Block</div>
      <div className="block block--full">Full Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--full">Full Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--full">Full Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--half">Half Block</div>
      <div className="block block--half">Half Block</div>
    </div>
  )
}
