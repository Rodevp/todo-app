import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

    const {text} = props;

    return (
        <View style={styles.taskItem}>
            <View style={styles.itemLeft}>
            <TouchableOpacity 
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
        
    },
    itemLeft: {

    },
    taskText: {

    },
    square: {

    },
    circularItem: {

    }
})

export default Task;