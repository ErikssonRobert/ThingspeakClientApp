import React, { Component } from 'react';
import {
    Text,
    AsyncStorage,
    ActivityIndicator,
    View,
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';
import { fetchAll } from '../../services/FetchAll';
import componentStyles from '../../styles/componentStyles/styles';
import viewStyles from '../../styles/viewStyles/styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelName: '',
            isLoading: true,
            error: false,
            errorMessage: '',
            settings: [],
            data: [],
            newData: false,
        }
    }

    componentDidMount() {
        this.getStoredUserSettings();
        this.fetchAllData();
    }

    fetchAllData() {
        fetchAll(this.props.user.id, this.props.user.apiKey)
            .then((result) => {
                if (result.error === 'Not Found' || result === -1) {
                    //ERROR fetch failed!
                    console.log('Error!: fetch failed');
                    this.setState({ 
                        error: true, 
                        errorMessage: 'Wrong channel id or api key',
                        isLoading: false 
                    });
                } else {
                    this.handleFetchSuccess(result);
                    console.log('Fetch succeded');
                }
            })
            .catch((error) => {
                console.log('ERROR fetching data! ' + error);
            });
    }

    storeComponentSettings = async () => {
        try {
            await AsyncStorage.setItem('settings', JSON.stringify(this.state.settings));
            console.log('Settings stored!: ' + this.state.settings);
            this.setState({
                newData: false
            });
        } catch (error) {
            //Error!
            console.log('Store settings failed! ' + error);
        }
    };

    getStoredUserSettings = async () => {
        try {
            var settingsString = await AsyncStorage.getItem('settings');
            console.log('settingsString!!::: ' + settingsString);
            if (settingsString !== null) {
                var settings = JSON.parse(settingsString);
                console.log('Settings found!' + settings);
                this.setState({
                    settings: settings
                });
                console.log(this.state.settings);
            } else {
                console.log('settingsString not found!');
            }
        } catch (error) {
            //Error!
            console.log('load settingsString failed! ' + error);
        }
    };

    handleFetchSuccess(res) {
        var channelName = res.channel.name;
        this.setState({ 
            channelName: channelName,
            isLoading: false
        });
    }

    addComponent = (component) => {
        var components = Object.assign([], this.state.settings);
        components.push(component);
        this.setState({
            newData: true,
            settings: components
        });
    }

    removeComponent = (index) => {
        console.log('Removing: ' + index);
        var components = Object.assign([], this.state.settings);
        components.splice(index, 1);
        this.setState({
            newData: true,
            settings: components
        });
        console.log(this.state.settings);
    }

    renderView(channelName, isLoading, error, errorMessage, settings) {
        if (this.state.newData) {
            this.storeComponentSettings();
        }
        return isLoading ? 
            <View style={viewStyles.container}>
                <ActivityIndicator style={componentStyles.loadingBig} size='large' /> 
            </View> : 
            error ? 
            <View style={viewStyles.container}>
                <Text style={componentStyles.headerText}>{errorMessage}</Text>
            </View> : 
            <Content 
                name={channelName}
                settings={settings}
                addComponent={this.addComponent}
                removeComp={this.removeComponent}
            />
    }

    render() {
        const { channelName, isLoading, error, errorMessage, settings } = this.state;
        return(
            this.renderView(channelName, isLoading, error, errorMessage, settings)
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(HomeView);