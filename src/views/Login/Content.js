import React, { Component } from 'react';
import { 
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image
 } from 'react-native';
import viewStyles from '../../styles/viewStyles/styles';
import styles from '../../styles/componentStyles/styles';
import COLORS from '../../constants/colors';

const logo = require('../../assets/logo.png');

class Content extends Component {
    
    render() {
        return(
            <View style={viewStyles.container}>
                <Image source={logo} style={{width: '90%', height: '30%', resizeMode: 'contain', alignSelf: 'center'}}/>
                <TextInput onChangeText={(text) => 
                        this.props.getId(text)
                    } style={styles.textInput}
                    placeholder='Channel ID'
                    placeholderTextColor={COLORS.BROWN}>
                    {this.props.id}
                </TextInput>
                <TextInput onChangeText={(text) => 
                        this.props.getKey(text)
                    } style={styles.textInput}
                    placeholder='READ API KEY'
                    placeholderTextColor={COLORS.BROWN}>
                    {this.props.apiKey}
                </TextInput>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.navigate('Home')}>
                        <Text style={styles.buttonText}>
                            DONE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Content;