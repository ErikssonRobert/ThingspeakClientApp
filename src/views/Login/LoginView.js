import React, { Component } from 'react';
import { 
    KeyboardAvoidingView,
    AsyncStorage
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';
import { editId, editKey } from '../../actions/index';
import { bindActionCreators } from 'redux';

class LoginView extends Component {

    // Check for stored values when mounting
    componentDidMount() {
        this._loadInitialStateId().done();
        this._loadInitialStateKey().done();
    }

    _storeIdData = async (id) => {
        try {
            await AsyncStorage.setItem('id', id);
        } catch (error) {
            //Error!
            console.log('OH nOOO Store fail!');
        }
    };

    _storeKeyData = async (key) => {
        try {
            await AsyncStorage.setItem('key', key);
        } catch (error) {
            //Error!
            console.log('OH nOOO Store fail!');
        }
    };

    _loadInitialStateId = async () => {
        try {
            var id = await AsyncStorage.getItem('id');
            if (id !== null) {
                console.log('Id found!' + id);
                this.changeStateChannelId(id);
            } else {
                console.log('Id not found!');
            }
        } catch (error) {
            //Error!
            console.log('OH nOOO load fail!');
        }
    };

    _loadInitialStateKey = async () => {
        try {
            var key = await AsyncStorage.getItem('key');
            if (key !== null) {
                console.log('Key found!' + key);
                this.changeStateApiKey(key);
            } else {
                console.log('Key not found!');
            }
        } catch (error) {
            //Error!
            console.log('OH nOOO load fail!');
        }
    };

    changeStateChannelId = (id) => {
        console.log('id from input: ' + id);
        this.props.editId(id);
        this._storeIdData(id);
    }

    changeStateApiKey = (key) => {
        console.log('key from input: ' + key);
        this.props.editKey(key);
        this._storeKeyData(key);
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <KeyboardAvoidingView behavior='padding'>
                <Content id={this.props.user.id} apiKey={this.props.user.apiKey} getId={this.changeStateChannelId} getKey={this.changeStateApiKey} navigate={navigate}/>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        editId,
        editKey,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);