/**
 * 一覧表示画面クラス
 */

import React, { Component } from 'react';
import { View, Text ,FlatList,Image } from 'react-native';
import Style from '../style';
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
            <View style={Style.SingleArea}>
                <View style={Style.DispContent}>
                    <Text style={Style.DispDateText}>{item.writed_on.getFullYear()}</Text>
                    <Text style={Style.DispDateText}>{item.writed_on.getMonth() + 1}/{item.writed_on.getDate()}</Text>
                    <Text style={Style.DispDateText}>{this.changeDay(item.writed_on.getDay())}</Text>
                </View>
                <View style={Style.DispContentMain}>
                    <Text style={Style.DispDateText}>{item.sentence}</Text>
                </View>
                <View style={Style.DispContent}>
                    <Image source={require('../img/twitter.png')} style={Style.DispImage}/>
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
