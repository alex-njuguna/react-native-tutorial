import React from "react"
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppPro() {
    const isDarkMode = useColorScheme() === "dark"

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    whiteText: {
        color: "#fff"
    },
    darkText: {
        color: "#000000"
    }
})

export {AppPro}