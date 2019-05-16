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
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={viewStyles.container}>
            <Text style={styles.headerText}>Home</Text>
            <Text style={styles.headerText}>{this.props.id}</Text>
            </View>
        );
    }
}

export default Content;