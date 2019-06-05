import React, { Component } from 'react';
import {
    Text,
    AsyncStorage,
    ActivityIndicator,
    View,
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';
import { fetchAllLatest } from '../../services/FetchAllLatest';
import componentStyles from '../../styles/componentStyles/styles';
import viewStyles from '../../styles/viewStyles/styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelName: '',
            numberOfFields: 0,
            isLoading: true,
            error: false,
            errorMessage: '',
            data: [],
            newData: false,
        }
    }

    componentDidMount() {
        this.getStoredUserData();
        this.fetchAllLatestData();
    }

    fetchAllLatestData() {
        fetchAllLatest(this.props.user.id, this.props.user.apiKey)
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
            });
    }

    storeComponentsData = async () => {
        try {
            await AsyncStorage.setItem('data', JSON.stringify(this.state.data));
            console.log('Data stored!: ' + this.state.data);
            this.setState({
                newData: false
            });
        } catch (error) {
            //Error!
            console.log('Store data failed!');
        }
    };

    getStoredUserData = async () => {
        try {
            var dataString = await AsyncStorage.getItem('data');
            console.log('DataString!!::: ' + dataString);
            if (dataString !== null) {
                var data = JSON.parse(dataString);
                console.log('Data found!' + data);
                this.setState({
                    data: data
                });
                console.log(this.state.data);
            } else {
                console.log('DataString not found!');
            }
        } catch (error) {
            //Error!
            console.log('load dataString failed! ' + error);
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
        var components = Object.assign([], this.state.data);
        components.push(component);
        this.setState({
            newData: true,
            data: components
        });
    }

    removeComponent = (index) => {
        console.log('Removing: ' + index);
        var components = Object.assign([], this.state.data);
        components.splice(index, 1);
        this.setState({
            newData: true,
            data: components
        });
        console.log(this.state.data);
    }

    renderView(channelName, isLoading, error, errorMessage, data) {
        if (this.state.newData) {
            this.storeComponentsData();
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
                data={data}
                addComponent={this.addComponent}
                removeComp={this.removeComponent}
            />
    }

    render() {
        const { channelName, isLoading, error, errorMessage, data } = this.state;
        return(
            this.renderView(channelName, isLoading, error, errorMessage, data)
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(HomeView);