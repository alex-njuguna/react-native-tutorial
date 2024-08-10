import {StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView style={styles.container} horizontal={true}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>1</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>2</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>3</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>4</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>5</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>6</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 8
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 5
    },
    elevatedCard: {
        backgroundColor: "beige",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 5
    }
})
