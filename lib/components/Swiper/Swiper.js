import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import Dot from '../Dots/Dots';
const screenWidth = Dimensions.get('screen').width;
export const FlashSwiper = ({ components, color, innerDotBackground, innerDotBorderColor }) => {
    //calculating scroll view width
    useEffect(() => {
        try {
            const widthOfComponent = components[0].component.props.style.width;
            const marginOfComponent = components[0].component.props.style.margin;
            const marginHorizontalOfComponent = components[0].component.props.style.marginHorizontal;
            if (marginOfComponent) {
                setScrollWidth(widthOfComponent + (marginOfComponent * 2));
            }
            else if (marginHorizontalOfComponent) {
                setScrollWidth(widthOfComponent + (marginHorizontalOfComponent * 2));
            }
            else if (widthOfComponent) {
                setScrollWidth(widthOfComponent);
            }
            else {
                setScrollWidth(screenWidth);
            }
        }
        catch (error) {
            throw Error('components required');
        }
    });
    const { swiperContainer, dotsContainer, container } = styles;
    const [scrollViewWidth, setScrollWidth] = useState(0);
    const [viewLayoutWidth, setViewLayoutWidth] = useState(0);
    const [currentPageonSwiper, setCurrentPageOnSwiper] = useState(0);
    const pageCalculate = (x) => {
        setCurrentPageOnSwiper(x / viewLayoutWidth);
    };
    return (React.createElement(View, { style: container },
        React.createElement(View, { onLayout: (event) => {
                setViewLayoutWidth(event.nativeEvent.layout.width);
            }, style: [swiperContainer, { width: scrollViewWidth }] },
            React.createElement(ScrollView, { decelerationRate: 0, snapToAlignment: "center", pagingEnabled: true, showsHorizontalScrollIndicator: false, horizontal: true, onMomentumScrollEnd: (event) => pageCalculate(event.nativeEvent.contentOffset.x) }, components.map((component) => {
                return (component.component);
            })),
            React.createElement(View, { style: dotsContainer }, components.map((dot, index) => {
                if (currentPageonSwiper == index) {
                    return (React.createElement(Dot, { key: index, innerDotBackground: innerDotBackground, innerDotBorderColor: innerDotBorderColor, color: color, selected: true }));
                }
                else {
                    return (React.createElement(Dot, { key: index, innerDotBackground: innerDotBackground, innerDotBorderColor: innerDotBorderColor, color: color, selected: false }));
                }
            })))));
};
const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
});
export default FlashSwiper;
//# sourceMappingURL=Swiper.js.map