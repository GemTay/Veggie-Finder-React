import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

type Props = {};
export default class SearchRestaurants extends Component<Props> {
    static navigationOptions = {
        title: 'Search Restaurants',
    };

    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.heading}>Name</Text>
                <TextInput
                    style={{height: 40, borderColor: 'blue', borderWidth: 1}}
                    placeholder="Enter Name"
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <Button title="Search" onPress={() => this.props.navigation.navigate('RestaurantDetails')}
                />
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