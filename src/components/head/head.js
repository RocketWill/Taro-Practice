import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import Top from './top';

class Head extends Component{
    render(){
        return (
        <View className="head">
            <Top />
            
            <Text>整體頭部</Text>
        </View>)
    }
}
export default Head;