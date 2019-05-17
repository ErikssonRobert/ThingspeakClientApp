import React, { Component } from 'react';
import { 
    View,
    TextInput,
    Button,
    Text
 } from 'react-native';
import viewStyles from '../../styles/viewStyles/styles';
import styles from '../../styles/componentStyles/styles';

class Content extends Component {
    render() {
        return(
            <View style={viewStyles.container}>
            <Text style={styles.headerText}>Home</Text>
            <Text style={styles.headerText}>{this.props.one}</Text>
            <Text style={styles.headerText}>{this.props.two}</Text>
            </View>
        );
    }
}

export default Content;