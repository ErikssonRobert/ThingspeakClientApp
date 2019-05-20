import React, { Component } from 'react';
import { 
    View,
    TextInput,
    Button,
    Text,
    TouchableOpacity 
 } from 'react-native';
import { connect } from 'react-redux';
import viewStyles from '../../styles/viewStyles/styles';
import styles from '../../styles/componentStyles/styles';
import SingleValue from '../../components/cards/SingleValue';

class Content extends Component {

    handleUserData(data) {
        var widgets = [];
        data.forEach((item, index) => {
            if (item.type === 'SINGLE_VALUE') {
                widgets.push(<SingleValue key={index} field={item.fieldNumber} />);
            }
        });
        return widgets;
    }

    handlePress = () => {
        console.log('pressed!!')
    }

    render() {
        return(
            <View style={viewStyles.container}>
                <Text style={styles.headerText}>{this.props.name}</Text>
                {
                    this.handleUserData(this.props.user.data)
                }
                <TouchableOpacity
                    onPress={this.handlePress}
                    style={{
                        width: 60,  
                        height: 60,   
                        borderRadius: 30,            
                        backgroundColor: '#ee6e73',                                    
                        position: 'absolute',    
                        alignItems: 'center',
                        justifyContent: 'center',                                      
                        bottom: 10,                                                    
                        right: 10,
                    }}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(Content);