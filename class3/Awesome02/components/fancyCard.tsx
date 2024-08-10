import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: "https://www.tsavonationalparkkenya.com/wp-content/uploads/2020/08/Game-Drives-in-Tsavo-National-Park-750x450.jpg" }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Tsavo National Park</Text>
                    <Text style={styles.cardLabel}>Kenya Safari Guide</Text>
                    <Text style={styles.cardDescription}>
                        Tsavo is made up of two separate parks, Tsavo East National Park and Tsavo West National Park. Located in Coast Province of Kenya in between Nairobi City and Mombasa.
                    </Text>
                    <Text style={styles.cardFooter}>15 minutes away</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        margin: 5,
    },
    cardElevated: {
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },
    cardImage: {
        width: '100%',
        height: 180,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    cardFooter: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
    },
});
