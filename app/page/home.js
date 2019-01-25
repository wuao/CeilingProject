import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

const width = Dimensions.get('window').width;
export default class Home extends Component<Props>  {


    constructor(props) {
        super(props);
        this.mangerbar = -1;
        this.state = {
            isShowCeiling: false,
            btnOne: true,
            btnTwo: false,
            btnThere: false,
            textone: '内容布局1'
        }

    }
    btOnClick(type) {

        switch (type) {
            case 0:
                this.setState({
                    btnOne: true,
                    btnTwo: false,
                    btnThere: false,
                    isShowCeiling: false,//防止在某些tab 页面不一样的时候 产生2个tab 栏 所以全部置为fals
                    textone: '内容布局1',
                });
                break;
            case 1:
                this.setState({
                    btnOne: false,
                    btnTwo: true,
                    btnThere: false,
                    isShowCeiling: false,
                    textone: '内容布局2'
                });
                break;
            case 2:
                this.setState({
                    btnOne: false,
                    btnTwo: false,
                    btnThere: true,
                    isShowCeiling: false,
                    textone: '内容布局3'
                });
                break;
        }

    }


    isshowTabBar() {

        if (this.state.isShowCeiling) {
            return   this.showTabBar(true);
        } else {
            return null
        }

    }

    showTabBar(type = false) {
        return (
            <View style={type ? styles.tablebarv2 : styles.view_bodybarvv}>
                <View style={styles.tablebar}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {
                            this.btOnClick(0);
                        }}>

                        <View style={styles.viewbtn}>
                            <View style={styles.line}/>
                            <Text
                                style={[styles.textdetalis, {color: this.state.btnOne ? '#2D99EE' : '#333333'}]}>Tab1</Text>
                            <View
                                style={[styles.line, {backgroundColor: this.state.btnOne ? '#2D99EE' : 'fff'}]}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'transparent'}

                        onPress={() => {
                            this.btOnClick(1);
                        }}>

                        <View style={styles.viewbtn}>
                            <View style={styles.line}/>
                            <Text
                                style={[styles.textdetalis, {color: this.state.btnTwo ? '#2D99EE' : '#333333'}]}>Tab2</Text>
                            <View
                                style={[styles.line, {backgroundColor: this.state.btnTwo ? '#2D99EE' : 'fff'}]}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}

                        onPress={() => {
                            this.btOnClick(2);
                        }}>

                        <View style={styles.viewbtn}>
                            <View style={styles.line}/>
                            <Text
                                style={[styles.textdetalis, {color: this.state.btnThere ? '#2D99EE' : '#333333'}]}>Tab3</Text>
                            <View
                                style={[styles.line, {backgroundColor: this.state.btnThere ? '#2D99EE' : 'fff'}]}/>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>

        );
    }


    _onScrollBeginDrag = (e) => {
    };

    _onScrollEndDrag = (e) => {

    }

    /**
     * 滚动触发回调
     *
     *
     * 置顶的原理
     * 2 就是在将其在滚动的过程中在滚动到超过你所需要置顶的高度的时候 就将其设置为position: 'absolute',
     * 比如 我的顶部布局有160 那么就是说我在滚动了到160之后 才会开始触发置顶操作  小于这个操作的滚动回调的高度 我们不会触发 这样 我们会
     * 解决一部分的滚动事件回调的抖动操作
     * 2  在满足已经置顶的操作的之前  我们还需要 分清楚触发滚动的方向 我们通过y轴的距离来判断 大于
     *    顶部的布局的时候 那么就是往上滑动 那么就是触发置顶操作
     * 3  在触发之后 我们需要通过一个变量来记录 我们的是否已经置顶了 来避免触发重复置顶 这样会产生抖动效果 我们只需要随便给一个变量默认-1
     *    触发之后 我们 设置为0  然后在触发还原操作之后 我们在将其重置为-1  就行了
     * 4  如果说我们整个布局是大ScrollView的 包裹head 然后body 是一个列表那么 我推荐将ScrollView的 触发效果屏蔽掉 2个会产生冲突
     *    这样的操作 最要就通FlatList本身的置顶操作来做 然后将其通过数据 布局来做 不同的item 渲染不同的view
     *
     *
     *
     *
     *
     * @param e
     * @private
     */
    _onScroll(e) {
        let {x, y} = e.nativeEvent.contentOffset;

        if (y < (150) && this.mangerbar == 0) {
            console.log('还原操作偏移' + y);
            this.setState((state) => {
                state.isShowCeiling = false;
                return state;
            });
            this.mangerbar = -1;
        } else {
            //up
            //往上推是吸顶操作
            if (y >= 150 && this.mangerbar != 0) {
                console.log('吸顶操作偏移' + y);
                this.mangerbar = 0;
                this.setState((state) => {
                    state.isShowCeiling = true;
                    return state;
                });
            }
        }

    }


    render() {
        return (
            [
                <ScrollView
                    scrollEventThrottle={16}
                    key={0}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                    onScroll={(e) => {
                        this._onScroll(e);
                    }}>
                    <View style={styles.container}>
                        <View style={styles.headview}>
                            <Text style={{color: '#333333', fontSize: 14, textAlign: 'center'}}>MoreTime 我是头部布局</Text>
                            <Text style={{
                                color: '#333333',
                                fontSize: 14,
                                textAlign: 'center',
                                marginTop: 8
                            }}>红色物质长方体固态转移</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            {this.showTabBar()}
                            <Text style={{height: 100, backgroundColor: '#F46E76'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#3AC07D'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#588680'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#FD9626'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#7FC1FB'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#808080'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#4CA6F4'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#FF3B31'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#866E58'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#F46E76'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#3AC07D'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#588680'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#FD9626'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#7FC1FB'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#808080'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#4CA6F4'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#FF3B31'}}>{this.state.textone}</Text>
                            <Text style={{height: 100, backgroundColor: '#866E58'}}>{this.state.textone}</Text>
                        </View>


                    </View>


                </ScrollView>,
                this.isshowTabBar(),
            ]
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    headview: {
        height: 100,
        width: width,
        backgroundColor: '#2D99EE',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tablebar: {
        height: 50,
        width: width,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tablebarv2: {
        height: 50,
        width: width,
        backgroundColor: '#F46E76',
        position: 'absolute',
        left: 0,
    },
    textdetalis: {
        fontSize: 14,
        textAlign: 'center',

    },
    view_bodybarvv: {
        height: 50,
        width: width,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: 2,
        width: 34
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    viewbtn: {
        width: width / 3,
        height: 45,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

});
