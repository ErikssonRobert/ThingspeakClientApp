import React, { Component } from 'react';
import { 
    View
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';

class HomeView extends Component {

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        try {
            var id = await AsyncStorage.getItem('id');
            if (id !== null) {
                console.log('Id found!');
            } else {
                console.log('Id not found!');
            }
            var key = await AsyncStorage.getItem('key');
            if (key !== null) {
                console.log('Key found!');
            } else {
                console.log('Key not found!');
            }
        } catch (error) {
            //Error!
            console.log('OH nOOO load fail!');
        }
    };

    render() {
        return(
            <View>
                <Content />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(HomeView);