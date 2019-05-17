import React, { Component } from 'react';
import { 
    View
 } from 'react-native';
import Content from './Content';
import { connect } from 'react-redux';
import { fetchAllLatest } from '../../services/FetchAllLatest';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelName: '',
        }
    }

    componentDidMount() {
        this.fetchAllLatestData();
    }

    fetchAllLatestData() {
        fetchAllLatest(this.props.user.id, this.props.user.apiKey)
            .then((result) => {
                if (result.error === 'Not Found') {
                    //ERROR fetch failed!
                    console.log('Error!: ' + result.error);
                } else {
                    console.log('Channel name: ' + result.channel.name);
                    this.setState({ channelName: result.channel.name });
                }
            });
    }

    render() {
        return(
            <View>
                <Content one={this.state.channelName} two={this.props.user.apiKey} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(HomeView);