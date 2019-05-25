import React, { Component } from 'react';
import {
    Text,
    AsyncStorage
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllLatest } from '../../services/FetchAllLatest';
import componentStyles from '../../styles/componentStyles/styles';
import { saveStoredData, getStoredUserData, editNewData } from '../../actions/index';

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
            await AsyncStorage.setItem('data', JSON.stringify(this.props.user.data));
            console.log('Data stored!: ' + this.props.user.data);
            this.props.editNewData(false);
        } catch (error) {
            //Error!
            console.log('Store data failed!');
        }
    };

    saveUserData = () => {
        console.log('Saving data: ' + this.state.data);
        this.props.saveStoredData(this.state.data);
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
                this.saveUserData();
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

    renderView(channelName, isLoading, error, errorMessage) {
        if (this.props.user.newData) {
            this.storeComponentsData();
        }
        return isLoading ? <Text style={componentStyles.headerText}>Loading</Text> : 
            error ? <Text style={componentStyles.headerText}>{errorMessage}</Text> : 
            <Content name={channelName} />
    }

    render() {
        const { channelName, isLoading, error, errorMessage } = this.state;
        return(
            this.renderView(channelName, isLoading, error, errorMessage)
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getStoredUserData,
        saveStoredData,
        editNewData,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);