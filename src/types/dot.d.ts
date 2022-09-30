import { ViewProps, ViewStyle } from "react-native";

interface dot {

    /**
     * color of wrapper dot
     */
    color: ViewProps.backround.color

    /**
     * border color of inner dot 
     */
    innerDotBorderColor: ViewProps.borderColor.color

    /**
     * color of inner dot
     */
    innerDotBackground: ViewProps.backround.color

    /**
     * this is need for current page handle
     */
    selected: true | false,

    /**
     * key
     */
    key?: ViewProps.key
}
