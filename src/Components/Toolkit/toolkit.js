import React from "react"
import TOOLS from "./data"
import "./toolkit.css"

export default function Toolkit() {
  return (
    <div className="toolkit">
      <h4>This site was built with</h4>
      <div className="tools">
        {TOOLS.map((tool) => (
          <img src={tool} alt="" />
        ))}
      </div>
    </div>
  )
}
