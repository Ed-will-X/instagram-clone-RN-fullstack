import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WINDOW_WIDTH } from '../../../constants/values'
import Story from '../../Home/Stories/components/Story'

const ProfileInfo = ({ data, mockData }) => {
    return(
        <View style={styles.parent}>
            {/* profile pic, posts and follow info */}
            <View style={styles.topRow}>
                <Story data={data} isProfilePic={true} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <View style={styles.infoView}>
                        <Text style={styles.infoValue}>{data.postCount}</Text>
                        <Text style={styles.infoText}>Posts</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.infoValue}>{data.followerCount}</Text>
                        <Text style={styles.infoText}>Followers</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.infoValue}>{data.followingCount}</Text>
                        <Text style={styles.infoText}>Following</Text>
                    </View>
                </View>
            </View>
            {/* account name, bio and followed by */}
            <View style={styles.secondRow}>
                <Text style={styles.accountName}>{data.fullname}</Text>
                <View style={styles.bioView}>{mockData.bio.map((item)=>{
                    return (
                        <Text style={styles.bioText}>{item}</Text>
                    )
                })}</View>
            </View>
        </View>
    )
}

export default ProfileInfo

const styles = StyleSheet.create({
    parent: {
        marginTop: WINDOW_WIDTH / 30,
        backgroundColor: "white",
        // paddingHorizontal: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginRight: 15
    },
    infoView: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 40,
        paddingLeft: 20
    },
    infoValue: {
        fontWeight: "bold",
        color: "black",
        fontSize: 18
    },
    infoText: {
        color: "black"
    },
    accountName: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    secondRow: {
        marginHorizontal: 20
    },
    bioView: {

    },
    bioText: {
        color: "black",
        fontWeight: "400"
    }
})