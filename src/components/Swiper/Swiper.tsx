import * as React from 'react'
import { useState, useEffect } from 'react';
import { NativeModules, ScrollView, Image, View, StyleSheet, ImageSourcePropType, Text, Dimensions } from 'react-native'
import Dot from '../Dots/Dots';

import { swiper } from '../../types/swiper';

const screenWidth = Dimensions.get('screen').width;

export const FlashSwiper: React.FC<swiper> = ({ components, color, innerDotBackground, innerDotBorderColor }) => {
  const [scrollViewWidth, setScrollWidth] = useState<number>(0);
  const [viewLayoutWidth, setViewLayoutWidth] = useState<number>(0);
  const [currentPageonSwiper, setCurrentPageOnSwiper] = useState<number>(0);

  const { swiperContainer, dotsContainer, container } = styles;


  //calculating scroll view width
  useEffect(() => {
    try {
      const widthOfComponent = components[0].component.props.style.width;
      const marginOfComponent = components[0].component.props.style.margin;
      const marginHorizontalOfComponent = components[0].component.props.style.marginHorizontal;

      if (marginOfComponent) {
        setScrollWidth(widthOfComponent + (marginOfComponent * 2))
      }
      else if (marginHorizontalOfComponent) {
        setScrollWidth(widthOfComponent + (marginHorizontalOfComponent * 2))
      }
      else if (widthOfComponent) {
        setScrollWidth(widthOfComponent)
      }
      else {
        setScrollWidth(screenWidth)
      }

    } catch (error) {
      throw Error('components required');
    }
  }, [])


  const pageCalculate = (x: number) => {
    setCurrentPageOnSwiper(x / viewLayoutWidth);
  }

  const onLayout = (event: any) => {
    setViewLayoutWidth(event.nativeEvent.layout.width)
  }

  const onMomentumScrollEnd = (event: any) => {
    pageCalculate(event.nativeEvent.contentOffset.x)
  }

  return (
    <View style={container}>
      <View onLayout={onLayout} style={[swiperContainer, { width: scrollViewWidth }]}>
        <ScrollView
          decelerationRate={0}
          snapToAlignment={"center"}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onMomentumScrollEnd={onMomentumScrollEnd}
        >
          {components.map((component: { component: JSX.Element }) => {
            return (component.component)
          })}
        </ScrollView>
        <View style={dotsContainer}>
          {components.map((dot: any, index: number) => {
            if (currentPageonSwiper == index) {
              return (<Dot key={index} innerDotBackground={innerDotBackground} innerDotBorderColor={innerDotBorderColor} color={color} selected={true} />)
            } else {
              return (<Dot key={index} innerDotBackground={innerDotBackground} innerDotBorderColor={innerDotBorderColor} color={color} selected={false} />)
            }
          })}
        </View>
      </View>
    </View>

  )
}

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
})

export default FlashSwiper
