import { View } from 'react-native';

export default function App() {
  return (
    <View style={{backgroundColor:"orange",flex: 1,flexDirection: "row-reverse",}}>
      <View style={{width:80,height:80,backgroundColor:"blue"}}></View>
      <View style={{width:80,height:80,backgroundColor:"yellow"}}></View>
      <View style={{width:80,height:80,backgroundColor:"green"}}></View>
    </View>
  );
}
