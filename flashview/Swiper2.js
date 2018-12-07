/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
    Alert,
    Dimensions} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const loading ='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const Slide = props => {
    return (<View style={styles.slide}>
        <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
        {
            !props.loaded && <View style={styles.loadingView}>
                <Image style={styles.loadingImage} source={{uri: loading}} />
            </View>
        }
    </View>)
}

type Props = {};
export default class Swiper2 extends Component<Props> {


    constructor (props) {
        super(props)
        this.state = {
            imgList: [
                'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
                'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
                'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
                'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
            ],
            loadQueue: [0, 0, 0, 0]
        }
        this.loadHandle = this.loadHandle.bind(this)
    }

    loadHandle (i) {
        let loadQueue = this.state.loadQueue
        loadQueue[i] = 1
        this.setState({
            loadQueue
        })
    }
    render () {
        return (
            <View style={{width:width,height: 250}}>
                <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={true}>
                    {
                        this.state.imgList.map((item, i) => <Slide
                            loadHandle={this.loadHandle}
                            loaded={!!this.state.loadQueue[i]}
                            uri={item}
                            i={i}
                            key={i} />)
                    }
                </Swiper>
                <View>
                    <Text>Current Loaded Images: {this.state.loadQueue}</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    wrapper: {
    },

    slide: {
        width:width,height: 250,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width:width,height: 250,
        backgroundColor: 'transparent'
    },

    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    loadingImage: {
        width: 60,
        height: 60
    }
}



