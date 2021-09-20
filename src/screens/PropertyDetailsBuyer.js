import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { icon } from '../components/AppStyles';
import BaseView from '../components/BaseView';
import Button from '../components/Button';
import { fontSize, height, width } from '../components/Resizer';
import { COLORS, FONTS } from '../constants';

export default function PropertyDetailsBuyer() {
    const [password, setPassword] = useState("")

    const navigation = useNavigation()
    const images = [
        "https://i.pravatar.cc/300",
        "https://i.pravatar.cc/300",
        "https://i.pravatar.cc/300",
        "https://i.pravatar.cc/300",
    ]

    return (
        <BaseView scrollEnabled={false}>
            <View style={{ height: height(40) }}>

                <Swiper
                    style={{ height: height(40) }}
                    dot={<View style={{
                        backgroundColor: 'gray', height: width(2),
                        width: width(2), borderRadius: width(1),
                        marginBottom: 40, marginHorizontal: 5
                    }} />}
                    activeDot={<View style={{
                        backgroundColor: COLORS.secondary, height: width(2),
                        width: width(2), borderRadius: width(1),
                        marginBottom: 40, marginHorizontal: 5
                    }} />}>
                    {images.map(e => {
                        return <View style={{ height: height(40) }}>
                            <Image style={{ flex: 1, borderBottomLeftRadius: width(8), borderBottomRightRadius: width(8) }} source={{ uri: e }} />
                        </View>
                    })}
                </Swiper>

                <View style={{
                    flexDirection: 'row', position: 'absolute', alignItems: 'center',
                    flex: 1, width: '100%', paddingTop: 50, backgroundColor: '#00000055', paddingBottom: 20
                }}>

                    <TouchableOpacity style={{ paddingHorizontal: 8, width: 30 }} onPress={() => { navigation.goBack() }}>
                        <Image
                            style={icon(20)}
                            resizeMode='contain'
                            source={require('../assets/icons/arrow-left.png')} />
                    </TouchableOpacity>

                    <View style={{ flex: 1 }} />

                    <TouchableOpacity style={{ paddingHorizontal: 8, width: 40 }} onPress={() => { }}>
                        <Image
                            style={icon(20)}
                            resizeMode='contain'
                            source={require('../assets/icons/heartbig.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: 8, width: 40 }} onPress={() => { }}>
                        <Image
                            style={icon(20)}
                            resizeMode='contain'
                            source={require('../assets/icons/share.png')} />
                    </TouchableOpacity>

                </View>

            </View>

            <ScrollView
                style={{
                    backgroundColor: 'white', borderRadius: 20, margin: 20, padding: 10,
                    height: height(60), top: height(-8)
                }}>
                <View style={{ flex: 1 }}>

                    <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 10 }}>

                        <Text style={{ fontFamily: FONTS.medium, fontSize: fontSize(5) }}>Medina</Text>

                        <Text style={{
                            color: '#1473E6', paddingTop: 10,
                            fontFamily: FONTS.medium, fontSize: fontSize(4.5)
                        }}>$ 2,50,000</Text>

                        <View style={styles.topItemContainer}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image
                                    style={[styles.itemImage, { tintColor: COLORS.secondary }]}
                                    resizeMode='contain'
                                    source={require('../assets/icons/marker.png')} />
                                <View>
                                    <Text style={styles.attrTitle}>Region</Text>
                                    <Text style={styles.attrValue}>Greater Accra Region</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={[styles.itemImage, { tintColor: COLORS.secondary }]}
                                    resizeMode='contain'
                                    source={require('../assets/icons/area.png')} />
                                <View>
                                    <Text style={styles.attrTitle}>Area Range</Text>
                                    <Text style={styles.attrValue}>601-1048 Sq. Ft.</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.topItemContainer}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={[styles.itemImage, { tintColor: COLORS.secondary }]}
                                    resizeMode='contain'
                                    source={require('../assets/icons/mobile.png')} />
                                <View>
                                    <Text style={styles.attrTitle}>Mobile</Text>
                                    <Text style={styles.attrValue}>123 (456) 7890</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={[styles.itemImage, { tintColor: COLORS.secondary }]}
                                    resizeMode='contain'
                                    source={require('../assets/icons/pin.png')} />
                                <View>
                                    <Text style={styles.attrTitle}>City</Text>
                                    <Text style={styles.attrValue}>Accra</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.topItemContainer}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={[styles.itemImage, { tintColor: COLORS.secondary }]}
                                    resizeMode='contain'
                                    source={require('../assets/icons/pin.png')} />
                                <View>
                                    <Text style={styles.attrTitle}>Area/Suburb</Text>
                                    <Text style={styles.attrValue}>Medina</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>

                    <View style={{ padding: 20, borderRadius: 20, backgroundColor: COLORS.secondary, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    resizeMode='contain'
                                    source={require('../assets/icons/bed.png')} />
                                <View>
                                    <Text style={styles.itemLabel}>Bedrooms</Text>
                                    <Text style={styles.itemValue}>03</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    resizeMode='contain'
                                    source={require('../assets/icons/bath.png')} />
                                <View>
                                    <Text style={styles.itemLabel}>Bathrooms</Text>
                                    <Text style={styles.itemValue}>04</Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Image
                                    style={styles.itemImage}
                                    resizeMode='contain'
                                    source={require('../assets/icons/building.png')} />
                                <View>
                                    <Text style={styles.itemLabel}>Floors Count</Text>
                                    <Text style={styles.itemValue}>02</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Button style={{
                            marginVertical: 10, marginEnd: 5,
                            flex: 1, height: 40
                        }}
                            type="solid"
                            backgroundColor="#313131"
                            title="CALL"
                            image={require('../assets/icons/call.png')}
                            textColor="white" />

                        <Button style={{
                            marginVertical: 10, marginStart: 5,
                            flex: 1, height: 40
                        }}
                            type="solid"
                            backgroundColor="#313131"
                            image={require('../assets/icons/bubble-chat.png')}
                            title="CHAT"
                            onPress={() => navigation.navigate('Chat')}
                            textColor="white" />

                    </View>

                    <Button style={{ height: 40 }}
                        type="solid"
                        backgroundColor={"#1473E6"}
                        onPress={() => navigation.navigate('Search')}
                        title="VIEW PROPERTY ON MAP"
                        textColor="white" />

                    <Text style={{
                        marginVertical: height(5), alignSelf: 'center', color: 'red',
                        fontFamily: FONTS.regular, fontSize: fontSize(4)
                    }}>Report This Property</Text>

                </View>
            </ScrollView>

        </BaseView >
    )
}

const styles = StyleSheet.create({
    topItemContainer: { flexDirection: 'row', flex: 1, paddingVertical: 10 },
    itemContainer: { flex: 1, flexDirection: 'row' },
    itemImage: { tintColor: 'white', height: height(2), width: width(2), marginEnd: 4, top: Platform.OS == 'android' ? 4 : 0 },
    itemValue: { fontFamily: FONTS.regular, color: 'white', marginTop: 5 },
    itemLabel: { fontFamily: FONTS.light, color: '#ADCBEF' },
    desc: { fontFamily: FONTS.medium, color: '#686868', lineHeight: 16 },
    attrTitle: { fontFamily: FONTS.medium, color: '#999999' },
    attrValue: { fontFamily: FONTS.regular, color: '#666666' },
})