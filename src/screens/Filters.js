import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppHeader from '../components/AppHeader';
import AppTextInput from '../components/AppTextInput';
import BaseView from '../components/BaseView';
import { fontSize, height, width } from '../components/Resizer';
import { COLORS, FONTS } from '../constants';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Button from '../components/Button';
import AppPicker from '../components/AppPicker';
import AppStyles, { icon } from '../components/AppStyles';

export default function Filters() {
    const [selected, setSelected] = useState(0)
    const [isRental, setRental] = useState(false)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [mobile, setMobile] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [bedroom, setBedroom] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [areaWidth, setWidth] = useState('')
    const [length, setLength] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState(0)
    const [price, setPrice] = useState([1000, 5000])

    const navigation = useNavigation()

    const items = [
        { image: require('../assets/icons/penthouse.png'), title: 'Home', types: ["House", "Compound House", "Multi Family", "Condo", "Apartment", "Rooms"] },
        { image: require('../assets/icons/apartment.png'), title: 'Warehouse', types: ["Distribution Centers", "Public", "Private", "Climate Controlled"] },
        { image: require('../assets/icons/buildingadd.png'), title: 'Stores', types: ["Departmental", "Supermarkets", "Hypermarkets"] },
        { image: require('../assets/icons/land.png'), title: 'Land/Lots', types: ["Urban/Built-up", "Agricultural", "Rangeland", "Forest"] },
    ]

    return (
        <BaseView
            header={<AppHeader
                title="Filters"
                onLeftPress={() => navigation.goBack()} />}>

            <View style={{ flex: 1, paddingVertical: height(2) }}>
                <View style={[AppStyles.searchInputCont, { margin: width(5), marginBottom: 0 }]} >
                    <Image
                        style={[{ tintColor: 'lightgray' }, icon(15)]}
                        resizeMode='contain'
                        source={require('../assets/icons/marker.png')} />
                    <AppPicker
                        placeholder="Location"
                        value={location}
                        onValueChange={(value) => setLocation(value)}
                        items={[
                            { label: 'Sydney', value: 'football' },
                            { label: 'New York', value: 'baseball' },
                            { label: 'Tokyo', value: 'hockey' },
                        ]} />
                </View>

                <FlatList
                    data={items}
                    numColumns={2}
                    contentContainerStyle={{ paddingHorizontal: 10, marginTop: 20 }}
                    renderItem={({ index, item }) => {
                        return (
                            <Pressable onPress={() => setSelected(index)} style={{
                                height: height(15), flex: 1, margin: 10, alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: selected == index ? COLORS.secondary : 'white', borderRadius: 20
                            }}>
                                <Image style={{
                                    tintColor: selected == index ? 'white' : 'lightgray',
                                    height: height(6), width: height(6)
                                }} source={item.image} />
                                <Text style={{ color: selected == index ? 'white' : '#999999', marginTop: 10, fontSize: fontSize(4) }}>{item.title}</Text>
                            </Pressable>
                        )
                    }}
                />

                <View style={{ flexDirection: 'row', flex: 1, margin: width(5), marginBottom: 0 }}>
                    <Pressable style={[styles.button, { backgroundColor: isRental ? COLORS.secondary : 'white' }]}
                        onPress={() => { setRental(true) }}>
                        <Text style={[{ color: !isRental ? '#999999' : 'white' }, styles.buttonText]}>Rental</Text>
                    </Pressable>
                    <Pressable style={[styles.button, { backgroundColor: !isRental ? COLORS.secondary : 'white', marginEnd: null }]}
                        onPress={() => { setRental(false) }}>
                        <Text style={[{ color: isRental ? '#999999' : 'white' }, styles.buttonText]}>Sale</Text>
                    </Pressable>
                </View>

                <Text style={styles.heading}>Pricing</Text>

                <View>
                    <MultiSlider
                        values={price}
                        max={[10000]}
                        sliderLength={width(85)}
                        trackStyle={{ height: 4 }}
                        step={500}
                        containerStyle={{ alignItems: 'center' }}
                        onValuesChange={(t) => { setPrice(t) }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: fontSize(4), color: COLORS.secondary }}>${price[0]} - ${price[1]}</Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: fontSize(4), color: 'gray' }}>$0.00 - $10,000</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 20 }}>

                    <AppTextInput
                        title={"Bedrooms"}
                        value={bedroom}
                        containerStyle={{ flex: 1 }}
                        maxLength={3}
                        keyboardType="numeric"
                        onChangeText={setBedroom}
                        returnKeyType="done"
                        blurOnSubmit={true}
                        onSubmitEditing={() => { }}
                    />

                    <AppTextInput
                        title={"Bathrooms"}
                        value={bathroom}
                        onChangeText={setBathroom}
                        maxLength={3}
                        returnKeyType="done"
                        keyboardType="numeric"
                        containerStyle={{ flex: 1 }}
                        blurOnSubmit={true}
                        onSubmitEditing={() => { }}
                    />

                </View>
                <Text style={styles.heading}>{items[selected].title} Type</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {items[selected].types.map((item, index) => {
                        return <Pressable
                            style={[styles.button,
                            {
                                backgroundColor: index == type ? COLORS.secondary : 'white', width: width(42),
                                marginStart: 20, marginEnd: null, flex: null
                            }]}
                            onPress={() => { setType(index) }}>
                            <Text style={[{ color: index == type ? 'white' : '#999999' }, styles.buttonText]}>{item}</Text>
                        </Pressable>
                    })}
                </View>
            </View>

            <Button style={{ margin: width(10), marginBottom: height(10) }}
                onPress={() => navigation.goBack()}
                title="APPLY" textColor="white" />

        </BaseView >
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1, marginEnd: 20, borderRadius: 20,
        alignItems: 'center', justifyContent: 'center',
        height: height(6), marginVertical: 10
    },
    buttonText: {
        fontFamily: FONTS.regular, fontSize: fontSize(4)
    },
    heading: {
        fontSize: fontSize(5), color: 'gray',
        marginHorizontal: width(5), marginVertical: 10
    }
})