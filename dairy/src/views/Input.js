/**
 * 登録画面クラス
 */

import React, { Component } from 'react';
import { View, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Style from '../style';

/**
 * 登録画面オブジェクト
 */
export default class InputView extends Component {

    // 初期化処理
    constructor(props) {
        super(props);
        this.state = {
            date : props.date ? props.date : new Date(),
            content : props.content ? props.content : "Hello World!"
        }
    }

    // 画面描画処理
    render() {
        return(
            <View　style={Style.App}>
                <DatePicker
                    style={Style.Input}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="確定"
                    cancelBtnText="キャンセル"
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(content) => this.setState({content:content})}
                    value={this.state.content}
                />
                <Button style={{height:40}} title="登録" />
            </View>
        );
    }
}