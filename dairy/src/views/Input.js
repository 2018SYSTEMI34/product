/**
 * 登録画面クラス
 */

import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Dairy from '../db/diary';

/**
 * 登録画面オブジェクト
 */
export default class InputView extends Component {

    // 初期化処理
    constructor(props) {
        super(props);
        this.state = {
            id: props.id ? props.id : 0,
            date: props.date ? props.date : new Date(),
            sentence: props.sentence ? props.sentence : null,
        }
    }

    // 登録処理
    save = () => {
        // 入力チェク
        if (this.state.sentence === null || this.state.sentence  === "" ) {
            Alert.alert(
                "",
                "本文を入力してください。",
                [
                    { text: "OK", onPress: () => { } },
                ],
                { cancelable: false }
            )
            return;
        }
        let dairy = new Dairy;
        dairy.wrireDairy({
            id: this.state.id,
            writed_on: this.state.date,
            sentence: this.state.sentence
        });

        // アラートで登録完了を通知
        Alert.alert(
            "",
            "保存完了しました。",
            [
                { text: 'OK', onPress: () => { } },
            ],
            { cancelable: false }
        )
    }

    // 日付変更処理
    onDateChage(date) {
        this.setState({ date: date })
    }

    // 画面描画処理
    render() {
        return (
            <View style={style.App}>
                <DatePicker
                    style={style.DatePicker}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="確定"
                    cancelBtnText="キャンセル"
                    onDateChange={(date) => { this.onDateChage(date) }}
                />
                <TextInput
                    placeholder="入力してください！"
                    multiline={true}
                    maxLength={200}
                    style={style.textInput}
                    onChangeText={(sentence) => this.setState({ sentence: sentence })}
                    value={this.state.sentence}
                    blurOnSubmit={false}
                />
                <Button color="#67c5ff" title="保存" onPress={this.save} />
            </View>
        );
    }
}

// 登録画面のstyle管理
const style = StyleSheet.create({
    App: {
        textAlign: "center",
        alignItems: "center",
        padding: 10,
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height
    },
    DatePicker: {
        width: "100%",
    },
    textInput: {
        marginTop: 10,
        width: "100%",
        height: 400,
        borderWidth: 1,
        fontSize: 18,
    }
});