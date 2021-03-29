import React from "react";
import { View, Image } from "react-native";
import LottieView from "lottie-react-native";

/*export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/13015-santa-claus.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}*/
export default class SantaAnimation extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require("../assets/s2.png")}
          style={{ width: 60, height: 100 }}
        ></Image>
      </View>
      /*<LottieView
      source={require('../assets/13015-santa-claus.json')}
      style={{width:"60%"}}
      autoPlay loop />*/
    );
  }
}
