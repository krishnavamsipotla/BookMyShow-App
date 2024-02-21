import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useColors } from '../Utilis/colors';
import { nowShowing } from '../Utilis/data';
import { useNavigation } from '@react-navigation/native';
import Details from '../Screens/Details';


const NowShowing = () => {
    const nav = useNavigation()

    return (
        <FlatList
            numColumns={2}
            data={nowShowing}
            renderItem={({ item, index }) =>
                <TouchableOpacity
                    onPress={() => {
                        nav.navigate("Details", { item })
                    }}
                    style={{
                        flex: 1,
                        margin: '1%',
                        borderRadius: 10,
                    }}
                >
                    <Image
                        style={{ height: 400, borderRadius: 10 }}
                        source={{ uri: item.img }}
                    />
                    <View
                        style={{ position: 'absolute', bottom: 25, left: 15, gap: 5 }}>
                        <Text
                            style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>{item.title}
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <MaterialIcons name='favorite' size={30} color={useColors.primary} />
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: '500' }}>{item.fav}%</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            } />
    )
}

export default NowShowing