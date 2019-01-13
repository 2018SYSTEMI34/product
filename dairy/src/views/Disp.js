/**
 * 一覧表示画面クラス
 */
import React, { Component } from 'react';
import { View, Text ,FlatList,Image,StyleSheet} from 'react-native';
import Dairy from '../db/diary';

/**
 * 一覧表示画面オブジェクト
 */
export default class DispView extends Component {

    constructor(props) {
        super(props);
        let dairy = new Dairy();
        //TODO Propsから受け取るようにする
        this.state = {
            records : dairy.allRecords(),
        }
    }

    //TODO ListView is deprecated
    // ListViewを使用した一覧表示
    render() {
        return (
            <View>
                <FlatList data={this.state.records} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
            </View>
        )
    }

    // １行の内容生成
    renderItem = ({item}) => {
        return (
            <View style={style.SingleArea}>
                <View style={style.DispContent}>
                    <Text style={style.DispDateText}>{item.writed_on.getFullYear()}</Text>
                    <Text style={style.DispDateText}>{item.writed_on.getMonth() + 1}/{item.writed_on.getDate()}</Text>
                    <Text style={style.DispDateText}>{this.changeDay(item.writed_on.getDay())}</Text>
                </View>
                <View style={style.DispContentMain}>
                    <Text style={style.DispDateText}>{item.sentence.substr(0,20)}</Text>
                </View>
                <View style={style.DispContent}>
                    <Image source={require('../img/twitter.png')} style={style.DispImage}/>
                </View>
            </View>
        );
    }

    // keyの生成
    // String型じゃないと警告がでる。
    keyExtractor = (item,index) => {
        return String(index);
    }

    //日本語の曜日を返す
    changeDay = (day) => {
        return [ "日", "月", "火", "水", "木", "金", "土" ][day]; 
    }
}

// 一覧表示のStyle管理
const style = StyleSheet.create( {
    //行のstyle
    SingleArea : {
        color: "#3f8afc",
        backgroundColor: "#c6e0f8",
        borderBottomWidth : 1,
        borderBottomColor:"#7fb1fc",
        width: "100%",
        height: "auto",
        flex : 1,
        flexDirection: 'row'
    },
    // 年月日エリア
    DispContent : {
        textAlign: "center",
        justifyContent : "center",
        width:"20%",
        padding: 15,
        color: "#7fb1fc",
    },
    // 年月日テキスト
    DispDateText : {
        fontSize : 13,
        color: "#7fb1fc",
    },
    // 文章エリア
    DispContentMain : {
        textAlign: "left",
        justifyContent: "center",
        width: "60%",
    },
    // 文章テキスト
    DispDateText : {
        fontSize : 13,
        color: "#7fb1fc",
    },
    // image
    DispImage : {
        width : 30,
        height: 30,
    },
})
