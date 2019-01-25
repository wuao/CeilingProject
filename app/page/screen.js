/**
 *
 * Copyright 2017-present whcapp
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * https://github.com/netyouli/whcapp
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {
    Dimensions,
    Platform
} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

/**
 * 是否为刘海屏手机（目前只判断ios）
 * @returns {boolean}
 */
export function isIphonex() {
    if (Platform.OS === 'ios') {
        return (width === 375 && height === 812) ||   /// iphonex
            (width === 414 && height === 896);      /// iphonexr
    }
    return false;
}

// 底部安全距离
export const bottomSafeDistance = isIphonex() ? 34 : 0;

// 顶部安全距离
export const topSafeDistance = isIphonex() ? 44 : 0;
/**
 * 是否为刘海屏手机（是则采用iphonexStyle样式，否则normalStyle）
 * @param iphonexStyle
 * @param normalStyle
 * @returns {*}
 */
export function ifIphonex(iphonexStyle, normalStyle) {
    if (isIphonex()) {
        return iphonexStyle;
    }
    return normalStyle;
}