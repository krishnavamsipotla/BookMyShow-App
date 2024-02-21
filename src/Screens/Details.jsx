import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useColors } from '../Utilis/colors';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { dates } from "../Utilis/data";
import { Theaters } from '../Utilis/data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Details = ({ route }) => {
    const [date, setdate] = useState();

    const nav = useNavigation()
    const { title, img } = route.params.item
    console.log(title)
    const [isSelected, setisSelected] = useState();


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', gap: 10 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: responsiveHeight(6),
                    //  backgroundColor: "red",
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2,
                    paddingHorizontal: 15,
                    justifyContent: 'space-between'
                }}>

                {/* ChildBox 1 */}

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <FontAwesome5 onPress={() => {
                        nav.goBack()
                    }} name='chevron-left' size={26} color={useColors.primary} />
                    <Text
                        style={{
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 19
                        }}>
                        {title}</Text>
                </View>
                {/* ChildBox2 */}
                <Feather
                    name='search'
                    size={30}
                    color={useColors.primary} />





            </View>


            <View
                style={{
                    height: responsiveHeight(10),
                    // backgroundColor: 'red',
                    alignItems: 'center',
                }}>
                <FlatList
                    horizontal
                    data={dates}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                console.log(item)
                                setisSelected(index)
                                setdate(item)

                            }}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                paddingHorizontal: 10,
                                marginHorizontal: 10,
                                backgroundColor: isSelected == index ? 'red' : null,

                            }}>
                            <Text
                                style={{
                                    color: isSelected == index ? 'white' : 'red',
                                    fontWeight: '500',
                                    fontSize: 16
                                }}>
                                {item.day}</Text>
                            <Text style={{
                                fontWeight: '700', fontSize: 18,
                                color: isSelected == index ? 'white' : 'black'
                            }}>
                                {item.dat}</Text>
                            <Text
                                style={{
                                    color: isSelected == index ? 'white' : 'black',
                                    fontWeight: '500',
                                    fontSize: 16
                                }}>{item.mon}</Text>

                        </TouchableOpacity>}
                />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 20 }}
                data={Theaters} renderItem={({ item, index }) => (
                    <View style={{
                        height: responsiveHeight(19),
                        // backgroundColor: 'red',
                        borderWidth: 1,
                        borderColor: '#E3E3E3',
                        marginBottom: 10,
                        borderRadius: 12,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        gap: 10
                    }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10
                            }}>
                            <MaterialIcons name='favorite-border' size={26} color='black' />
                            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{item.name}</Text>

                        </View>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 13
                        }}>
                            Non-cancellable</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {item.timings.map((value, index) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        date != null
                                            ? nav.navigate('Malls', {
                                                title,
                                                mall: item.name,
                                                date,
                                                time: value,
                                                img
                                            })
                                            : Alert.alert('Please Select a date');
                                    }}
                                    key={index}
                                    style={{
                                        paddingHorizontal: 10,
                                        borderWidth: 2,
                                        borderColor: 'green',
                                        marginRight: 5,
                                        borderRadius: 10,
                                        marginBottom: 7,
                                        paddingVertical: 5

                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: 'green',
                                        }}>
                                        {value}</Text>

                                </TouchableOpacity>
                            ))}

                        </View>

                    </View>
                )}
            />


        </SafeAreaView>
    )
}

export default Details