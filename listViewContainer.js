import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, FlatList, ScrollView, Button, Text, View, TouchableHighlight} from 'react-native';

class MyListItem extends Component {
    handleTextPress = () => {
        if (this.props.onTextPress) this.props.onTextPress(this.props.item.id);
    };

    handleIconPress =() => {
        if (this.props.onCaretPress) this.props.onCaretPress(this.props.item.id)
    }

    render = () => {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text onPress={this.handleTextPress}>{this.props.item.title}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Button onPress={this.handleIconPress}>
                        <Icon name="ios-arrow-forward"/>
                    </Button>
                </View>
            </View>
        );
    };
}

export default MyListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        marginBottom: 1,
        height: 30
    },
    textContainer: {
        backgroundColor: colors.light,
        paddingLeft: 5,
        fontSize: 26
    },
    iconContainer: {
        alignSelf: "flex-end",
        backgroundColor: colors.primary,
        paddingRight: 5,
        fontSize: 26
    }
});