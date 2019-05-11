import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./HomePage";
import Add from "./AddRestaurant";
import View from "./ViewRestaurants";
import Update from "./UpdateRestaurants"
import Delete from "./DeleteRestaurants"

const AppNavigator = createStackNavigator({
    Home: Home,
    Add: Add,
    View: View,
    Update: Update,
    Delete: Delete,
},{
    initialRouteName: "Home"
}
);

export default createAppContainer(AppNavigator);