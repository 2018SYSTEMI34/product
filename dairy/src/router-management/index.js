/**
 * 画面遷移の管理クラス
 * 
 * react-native-router-fluxを使用して、
 * 画面遷移を実施します。
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import Disp from '../views/Disp';
import Input from '../views/Input';


/**
 * 画面遷移管理オブジェクト
 */
export default class RouterManagement extends Component {

    render() {
        return (
            <Router>
                <Tabs 
                    key='root'
                    swipeEnabled={ true }
                    animationEnabled={ true }
                >
                    <Scene
                        key='home'
                        component={Disp}
                        title='ホーム'
                        iconName='collections'
                        initial
                        iconColor='red'
                        icon={TabBarIcon}
                        />
                    <Scene
                        key='search'
                        component={Disp}
                        title='検索'
                        iconName='textsms'
                        iconColor='red'
                        icon={TabBarIcon}
                    />
                    <Scene
                        key='input'
                        component={Input}
                        title='日記を書く'
                        iconName='accessibility'
                        iconColor='red'
                        icon={TabBarIcon}
                    />
                    <Scene
                        key='backup'
                        component={Disp}
                        title='バックアップ'
                        iconName='settings'
                        iconColor='red'
                        icon={TabBarIcon}
                    />
                </Tabs>
            </Router>
        );
    }
}

const styles = {
    tabIconContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabIconStyle: {
      width: 24,
      height: 24,
      fontSize: 24,
    },
  }
  
  const TabBarIcon = props => (
    <View style={styles.tabIconContainerStyle}>
    </View>
  );
  