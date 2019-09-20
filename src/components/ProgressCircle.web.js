import React from "react"
import UnsupportedView from "./UnsupportedView"

export default function ProgressCircle({ color, size, style }) {
  return <UnsupportedView tag="ProgressCircle" style={[style, { width: size, height: size }]} />
}
