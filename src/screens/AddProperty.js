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

export default function AddProperty() {
    const [selected, setSelected] = useState(0)
    const [isRental, setRental] = useState(false)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [mobile, setMobile] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [bedroom, setBedroom] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [areaWidth, setWidth] = useState('')
    const [region, setRegion] = useState('')
    const [suburb, setSuburb] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState(0)
    const [price, setPrice] = useState(0)

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
                title="Add New Property"
                onBell={() => { }}
                onLeftPress={() => navigation.goBack()} />}>

            <View style={{ flex: 1, paddingVertical: height(2) }}>
                <FlatList
                    data={items}
                    numColumns={2}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
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

                <FlatList
                    data={[1, 2, 3, 4]}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: width(5), marginTop: 10 }}
                    renderItem={({ item, index }) => {
                        if (index == 3)
                            return <View style={{
                                height: height(8), alignItems: 'center',
                                width: height(8), backgroundColor: 'white',
                                justifyContent: 'center', borderRadius: 10, marginEnd: 10
                            }}>
                                <Image style={{ height: 20, width: 20, borderRadius: 10 }}
                                    source={require('../assets/icons/plus.png')} />
                            </View>
                        else
                            return <View style={{
                                height: height(8), alignItems: 'center',
                                width: height(8), backgroundColor: 'white',
                                justifyContent: 'center', borderRadius: 10, marginEnd: 10
                            }}>
                                <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                    source={{ uri: 'https://i.pravatar.cc/300' }} />
                            </View>
                    }}
                />

                <View style={{ flexDirection: 'row', flex: 1, margin: width(5) }}>
                    <Pressable style={[styles.button, { backgroundColor: isRental ? COLORS.secondary : 'white' }]}
                        onPress={() => { setRental(true) }}>
                        <Text style={[{ color: !isRental ? '#999999' : 'white' }, styles.buttonText]}>Rental</Text>
                    </Pressable>
                    <Pressable style={[styles.button, { backgroundColor: !isRental ? COLORS.secondary : 'white', marginEnd: null }]}
                        onPress={() => { setRental(false) }}>
                        <Text style={[{ color: isRental ? '#999999' : 'white' }, styles.buttonText]}>Sale</Text>
                    </Pressable>
                </View>

                <AppTextInput
                    title={"Property Name"}
                    value={name}
                    onChangeText={setName}
                    returnKeyType="done"
                    placeholder={'Your Property Name'}
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />

                <AppTextInput
                    title={"Region"}
                    value={region}
                    onChangeText={setRegion}
                    returnKeyType="done"
                    placeholder={'Add Your Region'}
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />

                <AppTextInput
                    title={"City"}
                    value={city}
                    onChangeText={setCity}
                    returnKeyType="done"
                    placeholder={'Add Your City'}
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />
                <AppTextInput
                    title={"Area/Suburb"}
                    value={suburb}
                    onChangeText={setSuburb}
                    returnKeyType="done"
                    placeholder={'Add Your Suburb'}
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />

                <AppTextInput
                    title={"Mobile"}
                    value={mobile}
                    onChangeText={setMobile}
                    returnKeyType="done"
                    maxLength={15}
                    placeholder={'Your Mobile'}
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />

                <AppTextInput
                    title={"Pin Code"}
                    value={pinCode}
                    onChangeText={setPinCode}
                    maxLength={10}
                    returnKeyType="done"
                    placeholder={'Your Pin Code'}
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />

                <Text style={styles.heading}>The {items[selected].title} Listing Type</Text>
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

                <AppTextInput
                    value={price}
                    title="Pricing"
                    containerStyle={{ flex: 1 }}
                    keyboardType="numeric"
                    maxLength={20}
                    onChangeText={setPrice}
                    placeholder="e.g. $10000"
                    returnKeyType="done"
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />

                <View style={{ flexDirection: 'row' }}>

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
                <AppTextInput
                    title={"Area Space"}
                    value={areaWidth}
                    containerStyle={{ flex: 1 }}
                    keyboardType="numeric"
                    metrics={'Sq. ft.'}
                    maxLength={20}
                    onChangeText={setWidth}
                    returnKeyType="done"
                    blurOnSubmit={true}
                    onSubmitEditing={() => { }}
                />
            </View>

            <AppTextInput
                title={"Description"}
                value={description}
                onChangeText={setDescription}
                multiline={true}
                containerStyle={{ flex: 1 }}
                onSubmitEditing={() => { }}
            />

            <Button style={{ margin: width(10), marginBottom: height(10) }}
                onPress={() => navigation.navigate('HomeSeller')}
                title="ADD NEW PROPERTY" textColor="white" />

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