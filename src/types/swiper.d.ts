import { ViewProps } from 'react-native'

interface swiper {

  /**
   * if you want to swipe components
   */
  components: Array[{key: number, component: JSX.Element}]

  /**
   * color of wrapper dot
   */
  color?: ViewProps.backround.color

  /**
   * border color of inner dot
   */
  innerDotBorderColor?: ViewProps.borderColor.color

  /**
   * color of inner dot
   */
  innerDotBackground?: ViewProps.backround.color

  /**
   * this is need for current page handle
   */
  selected?: true | false
}
