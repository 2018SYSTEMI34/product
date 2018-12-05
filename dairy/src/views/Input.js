/**
 * 登録画面クラス
 */

import React, { Component } from 'react';
import { View, TextInput, Button,StyleSheet,Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Dairy from '../db/diary';

/**
 * 登録画面オブジェクト
 */
export default class InputView extends Component {

    // 初期化処理
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            id : props.id ? props.id : 0,
            date : props.date ? props.date : date,
            day  : props.day ? props.day : date.getDay(), 
            sentence : props.sentence
        }
    }

    // 登録処理
    save = () => {
        let dairy = new Dairy;
        dairy.wrireDairy({
            id : this.state.id,
            writed_on : this.state.date,
            day : this.state.day,
            sentence : this.state.sentence
        });
        
        // アラートで登録完了を通知
        Alert.alert(
            "",
            "保存完了しました。",
            [
              {text: 'OK', onPress: () => {}},
            ],
            { cancelable: false }
          )
    }

    // 日付変更処理
    onDateChage(date) {
        this.setState({date : date,day : date.getDay()})
    }



    // 画面描画処理
    render() {
        return(
            <View　style={style.App}>
                <DatePicker
                    style={style.Input}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="確定"
                    cancelBtnText="キャンセル"
                    onDateChange={(date) => {this.onDateChage(date)}}
                />
                <TextInput
                    placeholder = "入力してください！"
                    multiline = {true}
                    maxLength = {200}
                    style={{height:300,width:300, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(sentence) => this.setState({sentence:sentence})}
                    value={this.state.sentence}
                    blurOnSubmit={false}
                />
                <Button color="#67c5ff" title="保存" onPress={this.save} />
            </View>
        );
    }
}

// 登録画面のstyle管理
const style = StyleSheet.create( {
    App : {
        textAlign : "center",
        alignItems: "center",
        justifyContent: "center",
    },
    Input : {
        margin: 5,
        padding: 3,
        borderWidth : 1,
        borderColor: "#afcdfa",
        width:200,
        alignItems: "center",
        justifyContent: "center",
    }
});