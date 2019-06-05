import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Picker,
} from 'react-native';
import viewStyles from '../../styles/viewStyles/styles';
import compStyles from '../../styles/componentStyles/styles';
import { SINGLE_VALUE, GRAPH_VALUES } from '../../constants/componentTypes';

const fields = [
    'Field 1', 
    'Field 2', 
    'Field 3', 
    'Field 4', 
    'Field 5', 
    'Field 6', 
    'Field 7', 
    'Field 8'
];

class AddView extends Component {
    render() {
        return (
            <View style={viewStyles.addBox}>
                <Picker
                    selectedValue={this.props.currentField}
                    style={compStyles.picker}
                    onValueChange={(itemValue) =>
                        this.props.getField(itemValue)
                    }>
                    {fields.map((item, index) => {
                        return (<Picker.Item label={item} value={index + 1} key={index} />)
                    })}
                </Picker>
                <Picker
                    selectedValue={this.props.currentType}
                    style={compStyles.picker}
                    onValueChange={(itemValue) =>
                        this.props.getType(itemValue)
                    }>
                    <Picker.Item label="Latest data" value={SINGLE_VALUE} />
                    <Picker.Item label="Graph data" value={GRAPH_VALUES} />
                </Picker>
                <View style={compStyles.button}>
                    <TouchableOpacity onPress={this.props.addComponent}>
                        <Text style={compStyles.buttonText}>
                            DONE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddView;