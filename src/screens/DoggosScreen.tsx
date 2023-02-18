import React, { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { Cards } from "../components/card";
import { RefreshingButton } from "../components/refeshingButton";
import { useDoggos } from "../hooks/useDoggos";

export function DoggosScreen() {
    const { data, status, refetch } = useDoggos();

    if (status === 'loading') { return <Text>Loading</Text>; }
    if (status === 'error') { return <Text>Error</Text>; }

    for (let elements of data) {
        <><h1><View>
            <Cards item={elements} />
            <RefreshingButton refetch={refetch} />
        </View></h1></>
    }
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 10,
        marginTop: 20,
    },
});

