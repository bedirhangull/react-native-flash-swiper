
![Logo](https://iili.io/LuiXFp.png)


# react-native-flash-swiper

## Why would you want to use my package?
* You can swipe images and components
* It is easy and fast to use
* When you use it, you will not experince any shifts in the screen







## Screenshot
![Logo](https://media0.giphy.com/media/dbkRFj8XSjZozqKp2J/giphy.gif?cid=790b76112b68d7222be0fd225a7d652872108c16ac23eb4d&rid=giphy.gif&ct=g)


## Installation

Install react-native-flash-swiper with npm

```bash
  npm install react-native-flash-swiper
```
Install react-native-flash-swiper with yarn

```bash
  yarn add react-native-flash-swiper
```
    
## Properties

Props | Default | Required  | Type | Description
--- | --- | --- | --- | --- 
color | "" | ****Required****|`string` | Color of wrapper dot | 
innerDotBackground | "" | ****Required**** |`string` | Color of inner dot | 
innerDotBorderColor | "" |****Required**** |`string` | Border color of inner dot | 
components | [] | ****Required****  |`Array[component: JSX, key: Number]` | You will swipe in the components that are inside the array | 


## Usage/Examples

```javascript
import * as React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { FlashSwiper } from 'react-native-flash-swiper'
import { Card } from '@components'

const App = () => {

  const data = [
    {component: <Card city='Istanbul' description="Istanbul is the largest city in Turkey, serving as the country's economic, cultural and historic hub.", image={require('./assets/1.jpg')} />, key: 1},
    {component: <Card city='German' description="Germany's central and southern regions have forested hills and mountains cut through by the Danube, Main, and Rhine river valleys.", image={require('./assets/2.jpg')} />, key: 2},
    {component: <Card city='France' description="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. ", image={require('./assets/3.jpg')}  />, key: 3},
    {component: <Card city='Italy' description="Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea, Tyrrhenian Sea, Mediterranean Sea, and other waters", image={require('./assets/4.jpg')}  />, key: 4},
  ]

  const { container } = styles;

  return (
    <SafeAreaView style={container}> 
      <View>
        <FlashSwiper
          components={data} 
          color='black'
          innerDotBorderColor='white'
          innerDotBackground='black'
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App

```


## Upcoming Features

 - Default Options
 - Right and Left arrow
 - Animation
 - Page numbers



## Authors

- developer [@bedirhangull](https://github.com/bedirhangull)
- Logo by [@ebrutiminci](https://www.linkedin.com/in/ebru-timinci-3791581a2/)


## 🔗 Links
[![youtube](https://img.shields.io/youtube/channel/subscribers/UCezPKZmMtzEEU-j6BJsr3yQ?style=social)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bedirhan-g%C3%BCl/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/bedirhngl)
[![twitter](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@dev.bedirhangul)
