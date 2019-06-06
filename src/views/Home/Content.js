import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
 } from 'react-native';
import viewStyles from '../../styles/viewStyles/styles';
import styles from '../../styles/componentStyles/styles';
import DataView from '../../components/cards/DataView';
import AddView from '../add/AddView';
import shortid from 'shortid';

/*
TODO:
import RefreshControl for easy refresh of components
_onRefresh = () => { 
    this.setState({refreshing: true});
    :maybe add a timer here for 300 milliseconds:
    this.setState({refreshing: false});
}
*/

const addSymbols = {
    add: require('../../assets/add.png'),
    clear: require('../../assets/clear.png')
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdd: false,
            addSymbol: addSymbols.add,
        }
    }

    handlePress = async () => {
        this.setState({
            showAdd: !this.state.showAdd,
            addSymbol: this.state.addSymbol === addSymbols.add ? addSymbols.clear : addSymbols.add,
        });
    }

    render() {
        const { showAdd, addSymbol } = this.state;
        return(
            <View style={viewStyles.container}>
                <Text style={styles.headerText}>{this.props.name}</Text>
                <ScrollView>
                {
                    this.props.settings.map((settings, i) => 
                    <DataView 
                        key={shortid.generate()} 
                        index={i} 
                        delete={this.props.removeComp} 
                        field={settings.fieldNumber}
                        type={settings.type}
                    />)
                }
                </ScrollView>
                <TouchableOpacity
                    onPress={this.handlePress}
                    style={styles.addButton}>
                    <Image source={addSymbol} />
                </TouchableOpacity>
                {showAdd ? <AddView add={this.handlePress} addComp={this.props.addComponent} /> : null}
            </View>
        );
    }
}

export default Content;