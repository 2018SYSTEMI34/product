/**
 * 一覧表示画面クラス
 */

import React, { Component } from 'react';
import { View, Text ,FlatList,Image } from 'react-native';
import Style from '../style';

/**
 * 一覧表示画面オブジェクト
 */
export default class DispView extends Component {

    constructor(props) {
        super(props);
        //TODO Propsから受け取るようにする
        this.state = {
            days : [
                {year:"2018", day:"11/1", dow:"(月)",content:"HelloWorld"},
                {year:"2018", day:"11/2", dow:"(火)",content:"HelloWorld"},
                {year:"2018", day:"11/3", dow:"(水)",content:"HelloWorld"},
                {year:"2018", day:"11/4", dow:"(木)",content:"HelloWorld"},
                {year:"2018", day:"11/5", dow:"(金)",content:"HelloWorld"},
                {year:"2018", day:"11/6", dow:"(土)",content:"HelloWorld"},
                {year:"2018", day:"11/7", dow:"(日)",content:"HelloWorld"}
            ],
        }
    }

    //TODO ListView is deprecated
    // ListViewを使用した一覧表示
    render() {
        return (
            <View>
                <FlatList data={this.state.days} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
            </View>
        )
    }

    // １行の内容生成
    renderItem = ({item}) => {
        return (
            <View style={Style.SingleArea}>
                <View style={Style.DispContent}>
                    <Text style={Style.DispDateText}>{item.year}</Text>
                    <Text style={Style.DispDateText}>{item.day}</Text>
                    <Text style={Style.DispDateText}>{item.dow}</Text>
                </View>
                <View style={Style.DispContentMain}>
                    <Text style={Style.DispDateText}>{item.content}</Text>
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
}

/**
const styles = {
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  fontStyle: {
    fontSize: 36,
    fontWeight: '600'
  }
}

class Disp extends Component {
  render() {
    return (
      <View style={styles.pageStyle}>
        <Text style={styles.fontStyle}>Article</Text>
      </View>
    )
  }
}

export default Disp;
*/