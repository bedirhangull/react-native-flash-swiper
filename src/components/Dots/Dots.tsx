import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { dot } from '../../types/dot';

const Dot: React.FC<dot> = ({color, innerDotBorderColor, innerDotBackground, selected, key}) => {

    const { dot, innerDot } = style;

    const _renderDot = () => {
        if(selected){
            return(
                <View key={key} style={[dot, {backgroundColor: color}]}>
                    <View style={[innerDot, {borderColor: innerDotBorderColor, backgroundColor: innerDotBackground}]} />
                </View>
            )
        }
        else{
            return(<View key={key} style={[innerDot, {borderColor: innerDotBorderColor, backgroundColor: innerDotBackground}]} />)
        }
    }

    return(_renderDot())
}

export default Dot;

const style = StyleSheet.create({
   dot: {
    height: 18,
    width: 18,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
   },
   innerDot: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderWidth: 2,
   }
})
