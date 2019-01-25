import React from 'react';
import { createStackNavigator, createAppContainer   } from 'react-navigation';

import Home from './home';


const AppNavigation = createStackNavigator (
    {
        Home:{
            screen:Home,
            navigationOptions:{
                title: 'Home',
            }
        }
    },
    {
        initialRouteName: 'Home',
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        onTransitionStart: () => {
            console.log('导航栏切换开始');
        },
        onTransitionEnd: () => {
            console.log('导航栏切换结束');
        }
    }


);



export default createAppContainer(AppNavigation);


