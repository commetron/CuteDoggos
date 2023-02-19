
import {  Image, View } from "react-native";
import * as React from "react";

interface ItemProps {
    item: {
        message: string
    }
};

export const Cards = ({ item }: ItemProps) => (
        <View style={{alignContent:'center', justifyContent: 'center', margin: 5, marginTop: 200}}>
            <Image source={{
                uri: item.message
            }}
                style={{ width: 400, height: 400}}
            />
        </View>
);



