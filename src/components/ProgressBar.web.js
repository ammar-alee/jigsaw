import * as React from "react"
import { View } from "react-native"

export default function ProgressBar({
  progress,
  borderRadius,
  color,
  unfilledColor,
  borderColor,
  borderWidth,
  style,
}) {
  return (
    <View style={[style, {backgroundColor:unfilledColor, borderRadius}]}>
      <View style={{backgroundColor:color ,width:progress, height:"100%"}}/>
    </View>
  )
}
