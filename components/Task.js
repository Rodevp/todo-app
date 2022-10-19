import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

    const {text} = props;

    return (
        <View style={styles.taskItem}>
            <View style={styles.itemLeft}>
            <View 
                style={styles.square}
            />
            <Text style={styles.taskText}  >{text}</Text>
            </View>
            <View style={styles.circularItem}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: "#ffff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    taskText: {
        maxWidth: "80%"
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: "#55bcf6",
        opacity: 0.4,
        marginRight: 15
    },
    circularItem: {
        width: 12,
        height:12,
        borderColor: "#55bcf6",
        borderWidth: 2,
        borderRadius: 5
    }
})

export default Task;