/* @flow */

import * as React from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import color from "color"

import Touchable from "./Touchable"
import Icon from "./Icon"
import { withTheme } from "../core/theming"
import type { IconSource } from "./Icon"
import type { Theme, $RemoveChildren } from "../types"

type Props = $RemoveChildren<typeof Touchable> & {|
  /**
   * Icon to display.
   */
  icon: IconSource,
  /**
   * Color of the icon.
   */
  color?: string,
  /**
   * Size of the icon.
   */
  size?: number,
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean,
  /**
   * Whether the button is loading. A loading button is greyed out and `onPress` is not called on touch.
   */
  loading?: boolean,
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
  /**
   * @optional
   */
  theme: Theme
|}

/**
 * An icon button is a button which displays only an icon without a label.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/icon-button-1.png" />
 *     <figcaption>Icon button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/icon-button-2.png" />
 *     <figcaption>Pressed icon button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="add-a-photo"
 *     color={Colors.red500}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
const IconButton = ({
  icon,
  color: customColor,
  size = 32,
  accessibilityLabel,
  disabled,
  loading,
  onPress,
  theme,
  style,
  ...rest
}: Props) => {
  const iconColor = customColor || theme.colors.text
  const rippleColor = color(iconColor)
    .alpha(theme.disabledOpacity)
    .rgb()
    .string()

  return (
    <Touchable
      onPress={onPress}
      disabled={disabled || loading}
      background={Touchable.Ripple(rippleColor)}
      style={[
        styles.container,
        loading ||
          (disabled && {
            opacity: theme.disabledOpacity
          }),
        style
      ]}
      accessibilityLabel={accessibilityLabel}
      accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityStates={disabled ? ["disabled"] : undefined}
      hitSlop={{ top: 6, left: 6, bottom: 6, right: 6 }}
      {...rest}>
      <View>
        {icon && loading !== true ? <Icon name={icon} size={size} color={iconColor} /> : null}
        {loading ? <ActivityIndicator size="small" color={iconColor} /> : null}
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
})

export default withTheme(IconButton)
