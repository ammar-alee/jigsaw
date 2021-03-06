/* @flow */
/* eslint-disable react/no-unused-prop-types */

import * as React from "react"
import PortalConsumer from "./PortalConsumer"
import PortalHost, { PortalContext } from "./PortalHost"
import { ThemeProvider, withTheme } from "../../core/theming"
import type { Theme } from "../../types"

type Props = {
  /**
   * Content of the `Portal`.
   */
  children: React.Node,
  /**
   * @optional
   */
  theme: Theme
}

/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from '@draftbit/ui';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
class Portal extends React.Component<Props> {
  // @component ./PortalHost.js
  static Host = PortalHost

  render() {
    const { children, theme } = this.props

    return (
      <PortalContext.Consumer>
        {manager => (
          <PortalConsumer manager={manager}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PortalConsumer>
        )}
      </PortalContext.Consumer>
    )
  }
}

export default withTheme(Portal)
