import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Button, TouchableHighlight} from 'react-native';
import {ListItem, Icon, SearchBar} from 'react-native-elements';

type Props = {};
const URL = "http://10.0.2.2:2000/api/veggierestaurants/";

export default class viewRestaurants extends Component<Props> {

    static navigationOptions = {
        title: 'View Restaurants',
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
        super(props);

        this.state={
            isLoading: true,
            data:[],
            search: "",
            fullData:[],
            value: '',
            noData: false
        };

        this.arrayholder = [];
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        return fetch(URL)
            .then(response => response.json())
            .then((responseJSON) => {
                this.setState({
                    isLoading:false,
                    data:responseJSON,
                    fullData: responseJSON,
                }, function(){
                });
                this.arrayholder = responseJSON;

            })
            .catch((error) => {
                console.error(error);
            });
    };


    searchFilterFunction = text => {

        this.setState({
            value: text,
        });

        let newText = text.toLowerCase();
        let fullList = this.state.fullData;
        let filteredList = fullList.filter((item) => {
            return item.name.toString().toLowerCase().match(newText)
        });

        this.setState({
        data: filteredList
        });

    };

    renderSeparator = () => {
        return (
            <View style = {{height: 1, width: '100%', backgroundColor: '#14812d' }}/>
        );
    };

    renderHeader = () => {
        return (
            <SearchBar
                placeholder = "Search Here..."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                value={this.state.value}/>);
    };


    render() {
        return (
            <FlatList data={this.state.data}
                renderItem={({ item }) => (
                    <ListItem  titleStyle={{fontWeight: 'bold', fontSize:20}}
                        title={`${item.name} - ${item.veg_level_description}`}
                        subtitle={item.address}
                        containerStyle={{borderBottomWidth: 0 }}
                />
                    )}
                          keyExtractor={item => item.id}
                      ItemSeparatorComponent={this.renderSeparator}
                      ListHeaderComponent={this.renderHeader}
            />

        );
    }
}


