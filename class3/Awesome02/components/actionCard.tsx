import {StyleSheet, Text, View, TouchableOpacity, Linking, Image} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.headerText}>Mastery Based Learning</Text>
                <Image style={styles.cardImage}
                       source={{uri: "https://images.squarespace-cdn.com/content/v1/60c71940484f1a0d167f4151/1624274394097-7G6F9D4OSMASJCZ3WAJI/Web%2BGraphics3.png"}}
                />
                <View style={styles.cardBody}>
                    <Text numberOfLines={3}>
                        In the ever-evolving landscape of education, where the pursuit of knowledge
                        meets the quest for proficiency, Mastery Based Learning (MBL) emerges as a
                        beacon of effective, personalized learning. Unlike traditional models
                        that follow rigid timelines, MBL prioritizes individual mastery of core
                        concepts and skills, ensuring a thorough understanding before progression.
                    </Text>
                </View>

                <TouchableOpacity onPress={() => openWebsite("https://alex-njuguna.vercel.app/posts/masterly-based-learning-empowering-mastery-in-educ/")}>
                    <Text style={styles.cardFooter}>Read more</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 4,
        marginBottom: 8
    },
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 8
    },
    card: {
        overflow: "hidden",
        borderRadius: 8,
        marginHorizontal: 4,
        padding:8
    },
    cardElevated: {
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    cardImage: {
        width: "100%",
        height: 150
    },
    cardBody: {
        flex: 1,
        flexGrow: 2,
        marginVertical: 5
    },
    cardFooter: {
        fontSize: 16,
        color: "blue"
    },
    socialLinks: {

    }
})
