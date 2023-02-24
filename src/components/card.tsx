
import {  Image, StyleSheet} from "react-native";
import * as React from "react";


interface ItemProps {
    item: {
        message: string
    }
};

export const Cards = ({ item }: ItemProps) => (
   
        <Image source={{
            uri: item.message
        }}
        style={style.container}
        />
);

const style = StyleSheet.create({
    container:{width: 400, height: 400, alignContent:'center', justifyContent: 'center', margin: 5, marginTop: 200},
})

