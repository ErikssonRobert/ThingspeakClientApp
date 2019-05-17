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
                <Text style={styles.headerText}>Login</Text>
                <TextInput onChangeText={(text) => 
                        this.props.getId(text)
                    } style={styles.textInput}>
                    {this.props.id}
                </TextInput>
                <TextInput onChangeText={(text) => 
                        this.props.getKey(text)
                    } style={styles.textInput}>
                    {this.props.apiKey}
                </TextInput>
                <Button 
                    title='Login' 
                    onPress={() => this.props.navigate('Home')}
                    style={styles.headerText}/>
            </View>
        );
    }
}

export default Content;