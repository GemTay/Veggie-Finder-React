import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button, ScrollView, Alert} from 'react-native';

export default class AddRestaurant extends Component {
    static navigationOptions = {
        title: 'Add Restaurants',
        headerStyle:{
            backgroundColor: '#008000',
        },
        headerTitleStyle:{
            color: 'white',
            fontSize: 25,
        },
        headerTintColor: 'white',

    };

    constructor(props){
        super(props)

        this.state = {
            name: '',
            address:'',
            city:'',
            region:'',
            country:'',
            postal_code:'',
            phone:'',
            veg_level: '',
            short_description:''
        }
    }

    sendData(){
        fetch('http://10.0.2.2:2000/api/veggierestaurants/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({

                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                region: this.state.region,
                country: this.state.country,
                postal_code: this.state.postal_code,
                phone: this.state.phone,
                veg_level_description: this.state.veg_level,
                short_description: this.state.short_description
            }),
        });
        Alert.alert(
            'Restaurant Added',
            (this.state.name+' was successfully added to the database!'),
            [
                {text: 'OK'},
            ],
            {cancelable: false},
        );
    }


    render() {
        return (
            <ScrollView style = {{backgroundColor: '#ffffff'}}>
                <Text style={styles.heading}>Name</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <Text style={styles.heading}>Address</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(address) => this.setState({address})}
                    value={this.state.address}
                />
                <Text style={styles.heading}>City</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(city) => this.setState({city})}
                    value={this.state.city}
                />
                <Text style={styles.heading}>Region</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(region) => this.setState({region})}
                    value={this.state.region}
                />
                <Text style={styles.heading}>Country</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(country) => this.setState({country})}
                    value={this.state.country}
                />
                <Text style={styles.heading}>Postcode</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(postal_code) => this.setState({postal_code})}
                    value={this.state.postal_code}
                />
                <Text style={styles.heading}>Phone Number</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(phone) => this.setState({phone})}
                    value={this.state.phone}
                />
                <Text style={styles.heading}>Veg Level</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Vegetarian/Vegan/Vegetarian-Friendly/Vegan-Friendly"
                    onChangeText={(veg_level) => this.setState({veg_level})}
                    value={this.state.veg_level}
                />
                <Text style={styles.heading}>Short Description</Text>
                <TextInput
                    style={styles.box}
                    onChangeText={(short_description) => this.setState({short_description})}
                    value={this.state.short_description}
                />
                <View style = {styles.button}>
                <Button color="#228b22" variant="raised" title="Submit" onPress={() => this.sendData()}
                />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9FA8DA"
    },
    heading: {
        fontSize: 23,
        color:'#006400',
        paddingLeft: 25,
        paddingTop: 10
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
        paddingBottom: 15
    },
    button:{
        paddingTop:40,
        paddingBottom:20,
        width: '85%',
        alignSelf: 'center'
    }
});