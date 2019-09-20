import React from "react"
import { ScrollView, View, StyleSheet } from "react-native"
import Image from "./Image"
import Elevation from "./Elevation"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import Config from "./Config"

export type CarouselProps = {
  images: Array<string | { uri: string }>,
  swiperPalette: "surface" | "background",
  aspectRatio: number,
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center",
  dotColor: string,
  theme: Theme,
  style: any
}

class Carousel extends React.PureComponent<CarouselProps> {
  state = {}

  static defaultProps = {
    images: [
      Config.placeholderImageURL,
      Config.placeholderImageURL,
      Config.placeholderImageURL,
      Config.placeholderImageURL,
      Config.placeholderImageURL,
      Config.placeholderImageURL,
      Config.placeholderImageURL
    ],
    resizeMode: "cover",
    style: { height: 250 }
  }

  constructor(props) {
    super(props)

    this.state = {
      scrollOffset: 0
    }
  }

  handleScroll = e => {
    this.setState({ scrollOffset: e.nativeEvent.contentOffset.x })
  }

  onPageLayout = event => {
    const { width } = event.nativeEvent.layout
    this.setState({ width })
  }

  render() {
    const { images, aspectRatio, swiperPalette, resizeMode, dotColor, theme, style } = this.props
    const { colors, spacing } = theme
    const { width } = this.state

    return (
      <View style={[styles.container, { aspectRatio }, style]} onLayout={this.onPageLayout}>
        <ScrollView
          onScroll={this.handleScroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}>
          {images.map((image, index) => {
            const imageStyle = { width }

            if (aspectRatio) {
              imageStyle.aspectRatio = aspectRatio
            } else {
              imageStyle.flex = 1
            }

            return (
              <View style={[styles.slidingPanel, { width }]} key={index}>
                <Image
                  source={typeof image === "string" ? { uri: image } : image}
                  resizeMode={resizeMode}
                  style={{ width, flex: 1, aspectRatio }}
                />
              </View>
            )
          })}
        </ScrollView>
        <View style={[styles.swipeNavWrapper, { bottom: spacing.large }]}>
          <View style={styles.swipeNav}>
            {Array.from({ length: images.length }, (_, i) => {
              const calculatedIndex = this.state.scrollOffset / width
              const activeDot = calculatedIndex >= i - 0.5 && calculatedIndex < i + 0.5

              let backgroundColor
              if (dotColor) {
                backgroundColor = dotColor
              } else {
                if (swiperPalette === "surface") {
                  if (activeDot) {
                    backgroundColor = colors.strong
                  } else {
                    backgroundColor = colors.light
                  }
                } else {
                  if (activeDot) {
                    backgroundColor = colors.background
                  } else {
                    backgroundColor = colors.surface
                  }
                }
              }

              return (
                <Elevation
                  key={i}
                  style={[
                    {
                      backgroundColor,
                      marginHorizontal: spacing.small / 2
                    },
                    styles.dot,
                    activeDot ? styles.activeDot : null
                  ]}
                />
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  slidingPanel: {
    alignItems: "center",
    justifyContent: "center"
  },
  swipeNavWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0
  },
  swipeNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    opacity: 0.5,
    width: Config.swiperInactiveDotSize,
    height: Config.swiperInactiveDotSize,
    borderRadius: Config.swiperInactiveDotSize
  },
  activeDot: {
    opacity: 1,
    elevation: 1,
    width: Config.swiperActiveDotSize,
    height: Config.swiperActiveDotSize,
    borderRadius: Config.swiperActiveDotSize
  }
})

export default withTheme(Carousel)
