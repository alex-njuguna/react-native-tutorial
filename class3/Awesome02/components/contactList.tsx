import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Alice',
            status: 'Enjoys hiking in the mountains on weekends.',
            imageUrl: "https://static.vecteezy.com/system/resources/previews/012/641/541/large_2x/young-person-hiking-female-standing-on-top-rock-backpack-woman-looking-at-beautiful-mountain-valley-at-sunlight-in-summer-landscape-with-sport-girl-high-hills-forest-sky-travel-and-tourism-photo.jpg"
        },
        {
            uid: 2,
            name: 'Bob',
            status: 'Passionate about painting and creating abstract art.',
            imageUrl: "https://get.pxhere.com/photo/man-person-portrait-professional-profession-hairstyle-face-glasses-head-eyewear-portrait-photography-vision-care-passport-photograph-1238378.jpg"
        },
        {
            uid: 3,
            name: 'Charlie',
            status: 'Loves experimenting with new recipes and cooking gourmet meals.',
            imageUrl: "https://get.pxhere.com/photo/man-person-people-portrait-professional-profession-smiling-senior-citizen-elder-face-happy-980074.jpg"
        },
        {
            uid: 4,
            name: 'Diana',
            status: 'An avid reader who spends evenings with mystery novels.',
            imageUrl: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg"
        },
        {
            uid: 5,
            name: 'Edward',
            status: 'Enjoys playing chess and participating in local tournaments.',
            imageUrl: "https://get.pxhere.com/photo/man-person-black-and-white-people-white-photography-male-portrait-young-darkness-black-monochrome-smile-ethnic-close-up-face-men-homeless-american-head-beauty-african-emotion-adult-ethnicity-monochrome-photography-portrait-photography-leroy-film-noir-facial-hair-black-people-1295886.jpg"
        }
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={true}>
                {contacts.map(({uid, name, status, imageUrl}) => (
                    <View style={styles.userCard} key={uid}>
                        <Image style={styles.userImage} source={{uri: imageUrl}}/>
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
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
        padding: 10
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        marginVertical: 2,
        borderRadius: 8,
        backgroundColor: "#96bdc2",

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 8
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    userStatus: {
        marginRight: 8
    }
})
