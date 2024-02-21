import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useColors } from '../Utilis/colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Seats } from '../Utilis/data';
import Availability from '../Components/Availability';
import { MallSeats } from '../Context/Wrapper';



const Malls = ({ route }) => {
    const { title, mall, date, time, img } = route.params
    console.log(img);

    const { seatsArray, setseatsArray } = useContext(MallSeats);
    let amount = 0;


    if (seatsArray.length > 0) {
        amount = 100 * seatsArray.length
    }

    console.log(seatsArray)
    console.log(title, mall, date, time)









    const nav = useNavigation()
    return (
        <SafeAreaView
            style={{
                paddingHorizontal: 10,
                flex: 1,
                backgroundColor: 'white',
                gap: 10,

            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    height: responsiveHeight(6),
                    borderBottomColor: '#e3e3e3',
                    borderBottomWidth: 3,

                }}>
                <FontAwesome5 onPress={() => {
                    nav.goBack()
                }}
                    name='chevron-left' size={26} color={useColors.primary} />
                <Text
                    style={{
                        fontWeight: '600',
                        color: 'black',
                        fontSize: 19
                    }}>
                    {title}</Text>
            </View>


            <Text
                style={{
                    fontSize: 17,
                    fontWeight: '400',
                    color: 'grey'
                }}>
                {mall} | {date.dat}th Date | {time}
            </Text>


            <View
                style={{ alignItems: 'center' }}>
                <FlatList
                    numColumns={6}
                    data={Seats}
                    renderItem={({ item, index }) => (
                        seatsArray.includes(item) ? (
                            <TouchableOpacity
                                onPress={() => {
                                    setseatsArray(seatsArray.filter((remove) => remove !== item));

                                    console.log(item, "Hey iam seats")
                                }}
                                style={{
                                    backgroundColor: 'green',
                                    height: 40,
                                    width: 40,
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    margin: '3%'
                                }}>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => {
                                    setseatsArray([...seatsArray, item]);

                                    console.log(item, "Hey iam seats")
                                }}
                                style={{
                                    backgroundColor: '#e3e3e3',
                                    height: 40,
                                    width: 40,
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    margin: '3%'
                                }}>
                            </TouchableOpacity>
                        )

                    )
                    } />
            </View>

            <View style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 10,
                // backgroundColor: 'red',
                // height: 40,
                marginTop: 20
            }}>
                <Availability colors={'red'} name={'Unavailable'} />
                <Availability colors={'#e3e3e3'} name={'Available'} />
                <Availability colors={'green'} name={'Selected'} />


            </View>
            <View style={{ flex: 0.8, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => {
                        amount == 0 ? Alert.alert('Please Select Seats') : nav.navigate('MyTicket', {
                            title,
                            img,
                            mall,
                            date: date.dat
                        })
                        console.log('clicked')
                    }}
                    activeOpacity={0.9}
                    style={{
                        height: 50,
                        backgroundColor: useColors.primary,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 10,
                        flexDirection: 'row',
                        paddingHorizontal: 30
                    }}>

                    <Text style={{
                        color: 'white',
                        fontWeight: '700',
                        fontSize: 16
                    }}>
                        Pay Now</Text>
                    <Text style={{
                        color: 'white',
                        fontWeight: '700',
                        fontSize: 16
                    }}>₹ {amount}</Text>





                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Malls