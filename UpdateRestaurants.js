import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button, ScrollView, Alert} from 'react-native';

export default class UpdateRestaurant extends Component {
    static navigationOptions = {
        title: 'Update Restaurants',

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
            id: null,
            name: null,
            address: null,
            city: null,
            region: null,
            country: null,
            postal_code: null,
            phone: null,
            veg_level: null,
            short_description:null
        }
    }

    makeUpdate(){

        fetch('http://10.0.2.2:2000/api/veggierestaurants/update/'+this.state.id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.checkUpdated()),
        }).then(res => {
            return res;
        }).catch(err => err);
        Alert.alert(
            'Restaurant Updated',
            (this.state.name+' was successfully updated in the database!'),
            [
                {text: 'OK'},
            ],
            {cancelable: false},
        );
    }

    checkUpdated() {

        var object = {}

        switch (!null) {
            case this.state.name:
                object[name] = this.state.name;
            case this.state.address:
                object[address] = this.state.address;
            case this.state.city:
                object[city] = this.state.city;
            case this.state.region:
                object[region] = this.state.region;
            case this.state.country:
                object[country] = this.state.country;
            case this.state.postal_code:
                object[postal_code] = this.state.postal_code;
            case this.state.phone:
                object[phone] = this.state.phone;
            case this.state.veg_level:
                object[veg_level] = this.state.veg_level;
            case this.state.short_description:
                object[short_description] = this.state.short_description;
            default:
                break;
        }

        return object;
    }

    render() {
        return (

            <ScrollView styles={styles.container}>
                <Text style={styles.heading}>ID Number</Text>
                <TextInput
                    style={{borderColor: "#228b22", borderWidth: 3, width: '90%', alignSelf: 'center'}}
                    placeholder=" Enter the ID of the restaurant to update"
                    onChangeText={(id) => this.setState({id})}
                    value={this.state.id}
                />
                <Text style={styles.heading}>Restaurant Name</Text>
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
                <Button color="#228b22" title="Update" onPress={() => this.makeUpdate()}
                />
            </ScrollView>
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
        fontSize: 25,
        color:'#006400',
        paddingLeft: 25,
        paddingTop: 10,
        margin: 5
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
    }
});