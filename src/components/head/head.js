import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import Top from './top';
import Activity from './activity'
import './head.sass'

class Head extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            store: {
                title: "川湘居",
                notice: "歡迎光臨，很高興為您服務～",
                tags: ["味道讚", "主食真好", "份量足"]
            }
        }
    }
    render(){
        let {store} = this.state;
        return (
        <View className="head">
            <Top />
            
            <Image className="back" src={require('../../assets/img/back.jpg')} />

            
            <View className="store">
                <Image className="store_img" src={require('../../assets/img/store.jpg')} />

                <View className="store_text">
                    <Text>{store.title}</Text>
                    <Text>{store.notice}</Text>
                    <View>
                        {store.tags.map((item, index) => 
                            <Text className="tags_text" key={index}>{item}</Text>
                        )}
                    </View>
                </View>
            </View>
            <Activity />
        </View>)
        
    }
}
export default Head;