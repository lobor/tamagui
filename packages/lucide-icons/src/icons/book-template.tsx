import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import { IconProps } from '../IconProps'
import { themed } from '../themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M20 22h-2" stroke={`${color}`} />
      <Path d="M20 15v2h-2" stroke={`${color}`} />
      <Path d="M4 19.5V15" stroke={`${color}`} />
      <Path d="M20 8v3" stroke={`${color}`} />
      <Path d="M18 2h2v2" stroke={`${color}`} />
      <Path d="M4 11V9" stroke={`${color}`} />
      <Path d="M12 2h2" stroke={`${color}`} />
      <Path d="M12 22h2" stroke={`${color}`} />
      <Path d="M12 17h2" stroke={`${color}`} />
      <Path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" stroke={`${color}`} />
      <Path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'BookTemplate'

export const BookTemplate = memo<IconProps>(themed(Icon))
