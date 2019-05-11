import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
    render() {
        return (
            <View styles={styles.container}>
                <View style={{width: '100%', height: 200, backgroundColor: '#08561a', paddingTop:50}}>
                <Text style={styles.heading}>Vegetarian & Vegan Restaurant Finder!</Text>
                </View>
                <View style={{width: '100%', height: 100, backgroundColor: '#14812d', paddingTop:30}}>
                <TouchableOpacity color="#84d295" onPress={() => this.props.navigation.navigate('View')}>
                    <Text style={styles.touchOpacity}>Find Restaurants ➜</Text>
                </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 100, backgroundColor: '#23a842', paddingTop:30}}>
                    <TouchableOpacity color="#228b22" onPress={() => this.props.navigation.navigate('Add')}>
                        <Text style={styles.touchOpacity}>Add Restaurants ➜</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 100, backgroundColor: '#35c657', paddingTop:30}}>
                <TouchableOpacity color="#228b22" onPress={() => this.props.navigation.navigate('Update')}>
                    <Text style={styles.touchOpacity}>Update Restaurants ➜</Text>
                </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: 100, backgroundColor: '#58ec7a', paddingTop:30}}>
                <TouchableOpacity color="#228b22" onPress={() => this.props.navigation.navigate('Delete')}>
                    <Text style={styles.touchOpacity}>Delete Restaurants ➜</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    heading: {
        fontSize: 36,
        color:'#ffffff',
        justifyContent:'center',
        fontWeight: 'bold',
        textAlign: "center",
    },
    touchOpacity: {
        fontSize:24,
        color:'#ffffff',
        width: '100%',
        justifyContent:'center',
        textAlign:'center',
        alignItems: 'center'
    }
});

