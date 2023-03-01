import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Cards } from "../components/card";
import RefreshingButton from "../components/RefreshingButton";
import { useDoggos } from "../hooks/useDoggos";

const DoggosScreen = () => {
    const { data, status, refetch } = useDoggos();

    if (status === 'loading') { return <Text>Loading</Text>; }
    if (status === 'error') { return <Text>Error</Text>; }
    console.log(data)
    return (
        <><View style={styles.container}>
            <Cards item={data} />
            <RefreshingButton refetch={refetch} />
        </View></>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 10,
        marginTop: 20,
        justifyContent: 'center'
    },
});

export default DoggosScreen;
