import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import viewStyles from '../../styles/viewStyles/styles';
import compStyles from '../../styles/componentStyles/styles';

class AddView extends Component {
    render() {
        return (
            <View style={viewStyles.addBox}>
                <Text>Hello world!!</Text>
                <TextInput style={compStyles.textInput} onChangeText={(num) => 
                    this.props.getField(num)
                }></TextInput>
                <TextInput style={compStyles.textInput} onChangeText={(type) => 
                    this.props.getType(type)
                }></TextInput>
                <Button title='Add' onPress={this.props.addComponent} />
            </View>
        );
    }
}

export default AddView;