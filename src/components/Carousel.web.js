import React from "react"
import UnsupportedView from "./UnsupportedView"

export default function Carousel({ aspectRatio, style }) {
  return <UnsupportedView tag="Carousel" style={[style, { aspectRatio }]} />
}
