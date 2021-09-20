import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Text,
    TextInput,
    View
} from 'react-native';
import AppHeader from '../components/AppHeader';
import AppItem from '../components/AppItem';
import AppPicker from '../components/AppPicker';
import AppStyles, { icon } from '../components/AppStyles';
import BaseView from '../components/BaseView';
import { fontSize, height, width } from '../components/Resizer';
import { FONTS } from '../constants';

export default function Home() {
    const [type, setType] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigation = useNavigation()

    const data = [
        { isFor: 'sale', isFav: false },
        { isFor: 'rent', isFav: false },
        { isFor: 'sale', isFav: true },
        { isFor: 'rent', isFav: false },
        { isFor: 'sale', isFav: false },
    ]

    return (
        <BaseView
            header={
                <AppHeader
                    title={type == 'recent' ? "Recently Viewed" :
                        type == 'confirmed' ? "Confirmed Bookings" :
                            "Favorite Properties"}
                    onBell={() => { navigation.navigate('Notifications') }}
                    // onFilter={() => { }}
                    onLeftPress={() => navigation.goBack()} />
            }>

            <View style={{ flex: 1, paddingVertical: height(5) }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: width(5) }}>
                    <View style={AppStyles.searchInputCont} >
                        <Image style={icon(15)} source={require('../assets/icons/search.png')} />
                        <TextInput
                            style={AppStyles.searchInput}
                            placeholder={'Search'}
                        />
                    </View>
                    <View style={{ width: width(4) }} />
                    <View style={[AppStyles.searchInputCont]} >
                        <Image
                            style={[{ tintColor: 'lightgray' }, icon(15)]}
                            resizeMode='contain'
                            source={require('../assets/icons/marker.png')} />
                        <AppPicker
                            value={type}
                            onValueChange={(value) => setType(value)}
                            items={[
                                { label: 'All', value: 'all' },
                                { label: 'Sold Out', value: 'sold' },
                                { label: 'Confirmed Bookings', value: 'confirmed' },
                                { label: 'Recently Viewed', value: 'recent' },
                            ]} />
                    </View>
                </View>

                <FlatList
                    data={data}
                    style={{ paddingVertical: height(1) }}
                    renderItem={({ item }) => {
                        return <AppItem navigation={navigation} isFav={item.isFav} isFor={item.isFor} />
                    }}
                />

            </View>

        </BaseView>
    )
}