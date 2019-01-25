/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    Text,
    TextInput,
} from 'react-native';
import Navigation from './app/page/navigation';

TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {defaultProps: false})
Text.defaultProps = Object.assign({}, Text.defaultProps, {allowFontScaling: false})

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Navigation/>
        );
    }
}
