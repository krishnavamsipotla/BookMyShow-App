
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useColors } from '../Utilis/colors';
import { useNavigation } from '@react-navigation/native';
import { MallSeats, Store } from '../Context/Wrapper';


const MyTicket = ({ route }) => {
    const { data, setdata } = useContext(Store);
    const { seatsArray, setseatsArray } = useContext(MallSeats);


    const { title, mall, date, time, img } = route.params;

    const nav = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: responsiveHeight(6),
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2,
                    gap: 10
                }}>
                    <FontAwesome5 onPress={() => { nav.goBack() }} name='chevron-left' size={26} color={useColors.primary} />
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 19 }}>My Ticket</Text>
                </View>

                {/* Ticket Details */}
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#e3e3e3',
                    marginTop: 20,
                }}>
                    {/* Image */}
                    <Image style={{
                        height: 150,
                        width: 130,
                        borderRadius: 15,
                        resizeMode: 'contain'
                    }} source={{ uri: img }} />

                    {/* Ticket Info */}
                    <View style={{ gap: 5 }}>
                        <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>
                            {title}</Text>
                        <Text style={{ fontWeight: '500', color: 'grey', fontSize: 14 }}
                        >{mall}, {data}</Text>
                        <Text style={{ fontWeight: '500', color: 'grey', fontSize: 14 }}>
                            {date}th date, {time}</Text>
                        <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>
                            {seatsArray.join(" , ")}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <AntDesign name='barcode' size={26} color='black' />
                            <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>
                                {seatsArray}Krishna</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                onPress={() => {
                    nav.navigate('Home');
                    setseatsArray([])
                }}
                style={{
                    height: 50,
                    backgroundColor: useColors.primary,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20 // Add margin bottom to provide space between button and bottom of the screen
                }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Continue to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MyTicket;
