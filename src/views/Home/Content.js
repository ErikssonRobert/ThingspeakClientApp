import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';
import { connect } from 'react-redux';
import viewStyles from '../../styles/viewStyles/styles';
import styles from '../../styles/componentStyles/styles';
import SingleValue from '../../components/cards/SingleValue';
import AddView from '../add/AddView';

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
                {
                    this.handleUserData(this.props.user.data)
                }
                <TouchableOpacity
                    onPress={this.handlePress}
                    style={styles.addButton}>
                    <Image source={addSymbol} />
                </TouchableOpacity>
                {showAdd ? <AddView add={this.handlePress} /> : null}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(Content);