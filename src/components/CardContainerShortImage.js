import React from "react"
import { View, Text } from "react-native"
import Image from "./Image"
import Card from "./Card"
import Elevation from "./Elevation"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import Config from "./Config"

export type CardContainerShortImageProps = {
  image: string | { uri: string },
  title?: string,
  subtitle?: string,
  aspectRatio?: number,
  mode: "left" | "right",
  elevation: number,
  theme: Theme,
  style: any,
  onPress: () => void
}

class CardContainerShortImage extends React.PureComponent<CardContainerShortImageProps> {
  static defaultProps = {
    image: Config.squareImageUrl,
    elevation: 2,
    aspectRatio: 1,
    mode: "left"
  }

  render() {
    const {
      image,
      title,
      subtitle,
      mode,
      aspectRatio,
      elevation,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props

    return (
      <Card style={style} onPress={onPress}>
        <Elevation
          style={{
            elevation,
            borderRadius: borderRadius.global
          }}>
          <View
            style={{
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: mode === "right" ? "space-between" : "flex-start",
              borderRadius: borderRadius.global
            }}>
            {mode === "left" && (
              <Image
                style={{ aspectRatio }}
                source={typeof image === "string" ? { uri: image } : image}
                resizeMode="cover"
              />
            )}
            <View
              style={{
                padding: spacing.large,
                backgroundColor: colors.surface,
                flex: 1
              }}>
              <Text numberOfLines={1} style={[typography.headline5, { color: colors.strong }]}>
                {title}
              </Text>
              {subtitle ? (
                <Text
                  numberOfLines={1}
                  style={[typography.body2, { color: colors.medium, marginTop: spacing.text }]}>
                  {subtitle}
                </Text>
              ) : null}
            </View>
            {mode === "right" && (
              <Image
                style={{ aspectRatio }}
                source={typeof image === "string" ? { uri: image } : image}
                resizeMode="cover"
              />
            )}
          </View>
        </Elevation>
      </Card>
    )
  }
}

export default withTheme(CardContainerShortImage)
