import React from "react"
import "./toolkit.css"

export default function ToolkitCard({ item: { path, text } }) {
  return (
    <div className="toolkitCard">
      <img src={path} alt={`${text} icon`} />
      <span>{text}</span>
    </div>
  )
}
