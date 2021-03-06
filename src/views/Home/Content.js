import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    RefreshControl
 } from 'react-native';
import viewStyles from '../../styles/viewStyles/styles';
import styles from '../../styles/componentStyles/styles';
import DataView from '../../components/cards/DataView';
import AddView from '../add/AddView';
import shortid from 'shortid';

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
            refreshing: false,
        }
    }

    handlePress = async () => {
        this.setState({
            showAdd: !this.state.showAdd,
            addSymbol: this.state.addSymbol === addSymbols.add ? addSymbols.clear : addSymbols.add,
        });
    }

    _onRefresh = () => { 
        this.setState({refreshing: true});
        this.setState({refreshing: false});
    }

    render() {
        const { showAdd, addSymbol } = this.state;
        return(
            <View style={viewStyles.container}>
                <Text style={styles.headerText}>{this.props.name}</Text>
                <ScrollView
                    refreshControl={
                        <RefreshControl 
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }>
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