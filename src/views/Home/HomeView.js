import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';
import { fetchAllLatest } from '../../services/FetchAllLatest';
import viewStyles from '../../styles/viewStyles/styles';
import componentStyles from '../../styles/componentStyles/styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelName: '',
            numberOfFields: 0,
            isLoading: true,
            error: false,
            errorMessage: '',
        }
    }

    componentDidMount() {
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

    handleFetchSuccess(res) {
        var channelName = '';
        var numberOfFields = 0;
        var error = false;
        if (res.channel.field1) {
            channelName = res.channel.name;
            numberOfFields++;
        } else {
            error = true;
        }
        if (res.channel.field2) {
            numberOfFields++;
        }
        if (res.channel.field3) {
            numberOfFields++;
        }
        if (res.channel.field4) {
            numberOfFields++;
        }
        if (res.channel.field5) {
            numberOfFields++;
        }
        if (res.channel.field6) {
            numberOfFields++;
        }
        if (res.channel.field7) {
            numberOfFields++;
        }
        if (res.channel.field8) {
            numberOfFields++;
        }
        if (!error) {
            this.setState({ 
                channelName: channelName,
                numberOfFields: numberOfFields,
                isLoading: false
            });
        } else {
            this.setState({ 
                channelName: channelName,
                isLoading: false,
                error: true,
                errorMessage: 'No fields found on channel'
            });
        }
    }

    test(channelName, isLoading, error, errorMessage) {
        return isLoading ? <Text style={componentStyles.headerText}>Loading</Text> : 
            error ? <Text style={componentStyles.headerText}>{errorMessage}</Text> : 
            <Content name={channelName} />
    }

    render() {
        const { channelName, isLoading, error, errorMessage } = this.state;
        return(
            this.test(channelName, isLoading, error, errorMessage)
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(HomeView);