import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class RestaurantDetails extends Component {
    static navigationOptions = {
        title: 'Restaurant Details',
    };

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.heading}>DETAILS!!!</Text>
            </View>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    heading: {
        fontSize: 20,
        textAlign: "left",
        margin: 5
    }
});