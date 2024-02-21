import { View, Text } from 'react-native'
import React, { useContext } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { useColors } from '../Utilis/colors';
import { Store } from '../Context/Wrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Header = () => {

    const { data, setdata } = useContext(Store)


    return (
        <View
            style={{
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 10
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Entypo
                    name='location-pin' size={30} color={useColors.primary} />
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: useColors.primary
                    }}>
                    {data != null ? data : 'Select City'}
                </Text>
            </View>
            <Feather
                onpress={() => {
                    AsyncStorage.removeItem("login");
                }}
                name='search'
                size={30}
                color={useColors.primary} />

        </View>
    )
}

export default Header