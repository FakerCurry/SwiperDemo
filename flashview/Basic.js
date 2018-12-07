/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
    Dimensions} from 'react-native';



import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

type Props = {};
export default class Basic extends Component<Props> {
    render () {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons>
                    <View style={styles.slide1}>
                        {/*<Text style={styles.text}>Hello Swiper</Text>*/}
                        <Image resizeMode='stretch' style={styles.image} source={{uri:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'}} />
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}

var styles = {
    container: {
        flex: 1
    },
    wrapper: {
      height:300,
        width:width

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        height: 300
    }
}



// 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
//     'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
//     'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
