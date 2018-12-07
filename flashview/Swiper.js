/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View, Image,
    Alert,
    Dimensions, TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


import SwiperSs from 'react-native-swiper'

const {width, height} = Dimensions.get('window')


// 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
//     'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
//     'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'

type Props = {};
export default class Swiper extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            imgList: [{
                imageName: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                titleName: '嘻哈喜好喜好喜好哈哈001'


            }, {
                imageName: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                titleName: '嘻哈喜好喜好喜好哈哈002'

            }, {

                imageName: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
                ,
                titleName: '嘻哈喜好喜好喜好哈哈003'
            }],

        }

    }

    swiperItemClick(item,index) {

        Alert.alert(item.titleName + index.toString())

    }


    render() {
        const ContentView = this.state.imgList.map((item, index) => {

            return (


                <View key={index} style={styles.slide} title={<Text numberOfLines={1}
                                                                    style={styles.title}>

                    {index.toString() + item.titleName}</Text>}>
                    <TouchableOpacity onPress={() => this.swiperItemClick(item, index)
                    }>


                        <Image resizeMode='stretch' style={styles.image}
                               source={{uri: item.imageName}}/>
                    </TouchableOpacity>

                </View>)


        })


        return (


            <View style={styles.container}>

                <View style={{width: width, height: 240}}>
                    <SwiperSs style={styles.wrapper} height={240}
                              horizontal={true}
                              index={0}
                              showsButtons={false}
                              autoplay={true}
                              onIndexChanged={(index) => {

                                  // 监听录播图当前选择
                                  // Alert.alert(index.toString())
                              }}
                              onMomentumScrollEnd={(e, state, context) => {
                                  //     console.log('index:', state.index)
                                  // Alert.alert(state.index.toString())
                              }

                              }


                              dot={<View style={{
                                  backgroundColor: 'white',
                                  width: 5,
                                  height: 5,
                                  borderColor: 'white',
                                  borderRadius: 4,
                                  marginLeft: 3,
                                  marginRight: 3,
                                  marginTop: 3,
                                  marginBottom: 3
                              }}/>}
                              activeDot={<View style={{
                                  backgroundColor: 'white',
                                  width: 8,
                                  height: 8,
                                  borderColor: 'white',
                                  borderRadius: 4,
                                  marginLeft: 3,
                                  marginRight: 3,
                                  marginTop: 3,
                                  marginBottom: 3
                              }}/>}
                              paginationStyle={{
                                  backgroundColor: 'rgba(0,0,0,0.5)',
                                  height: 30,
                                  bottom: 0,
                                  flexDirection: 'row',
                                  justifyContent: 'flex-end',
                                  paddingRight: 10

                              }}
                              containerStyle={{}}


                              loop={true}


                    >


                        {ContentView}


                        {/*<View style={styles.slide} title={<Text numberOfLines={1} style={styles.title}>上单没人赶紧来抓</Text>}>*/}
                        {/*<Image resizeMode='stretch' style={styles.image}*/}
                        {/*source={{uri: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'}}/>*/}
                        {/*</View>*/}
                        {/*<View style={styles.slide}*/}
                        {/*title={<Text numberOfLines={1} style={styles.title}>中单只有5人让我单杀</Text>}>*/}
                        {/*<Image resizeMode='stretch' style={styles.image}*/}
                        {/*source={{uri: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'}}/>*/}
                        {/*</View>*/}
                        {/*<View style={styles.slide} title={<Text numberOfLines={1} style={styles.title}>下路别来</Text>}>*/}
                        {/*<Image resizeMode='stretch' style={styles.image}*/}
                        {/*source={{uri: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'}}/>*/}
                        {/*</View>*/}

                    </SwiperSs>
                </View>


                <View style={{width: width, height: height - 240, backgroundColor: 'red'}}>


                </View>


            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',


    },

    wrapper: {
        height: 240,
        width: width,
        position: 'absolute',
        top: 0,
        left: 0
    },

    slide: {
        height: 240,
        width: width,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        height: 240,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        height: 240,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        height: 240,
        width: width,
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
        height: 240
    },
    title: {
        backgroundColor: 'transparent',
        bottom: 30,
        height: 30,
        textAlign: 'left',
        color: 'white',
        paddingTop: 6


    }
}



