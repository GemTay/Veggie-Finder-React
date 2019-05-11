import React, { Component } from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export default class UpdateRestaurant extends Component {
    static navigationOptions = {
        title: 'Delete Restaurants',
    };

    constructor(props){
        super(props)

        this.state = {
            name: '',
        }
    }

    makeDelete(){
        fetch('http://10.0.2.2:2000/api/veggierestaurants/delete', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
            }),
        }).then(res => {
            return res;
        }).catch(err => err);
        Alert.alert(
            'Restaurant Deleted',
            (this.state.name+' was successfully deleted from the database!'),
            [
                {text: 'OK'},
            ],
            {cancelable: false},
        );
    }


    render() {
        return (
            <View styles={styles.container}>
                <TextInput
                    style={styles.box}
                    placeholder=" Enter the Name of the Restaurant to delete"
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <View style = {styles.button}>
                    <Button color="#228b22" variant="raised" title="Delete" onPress={() => this.makeDelete()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    box: {
        height: 40,
        width: '85%',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderTopColor: '#ffffff',
        borderBottomColor: '#39fe66',
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderWidth: 2,
        marginTop: 20,
        marginBottom: 20,
    },
    button:{
        paddingTop:15,
        paddingBottom: 15,
        width: '60%',
        alignSelf: 'center'
    }
});