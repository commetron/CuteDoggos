import React from "react";
import { Button, StyleSheet, View } from "react-native";

const RefreshingButton = ({ refetch }: any) => {
    return (
        <View style={style.button}>
            <Button
                onPress={refetch}
                title="New doggo !"
                color="white"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

const style = StyleSheet.create({
    button: {
        marginTop: 50,
        marginLeft: 125,
        borderWidth: 1,
        width: 150,

        borderColor: '#841584',
        backgroundColor: '#841584',
        borderRadius: 5
    }
})

export default RefreshingButton;

