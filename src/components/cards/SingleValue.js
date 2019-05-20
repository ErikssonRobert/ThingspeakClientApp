import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
 import { fetchOneLatest } from '../../services/FetchOneLatest';
 import { connect } from 'react-redux';

class SingleValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            value: '',
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchOneLatestData();
    }

    fetchOneLatestData() {
        fetchOneLatest(this.props.user.id, this.props.user.apiKey, this.props.field)
            .then((result) => {
                if (result.error === 'Not Found') {
                    //ERROR fetch failed!
                    console.log('Error!: ' + result.error);
                } else {
                    console.log('Fetch succeded! (SingleValue.js');
                    console.log('' + this.props.field);
                    this.handleFetchSuccess(result, this.props.field);
                }
            });
    }

    handleFetchSuccess(res, field) {
        var title = '';
        var value = '';
        if (field === 1) {
            title = res.channel.field1;
            value = res.feeds[0].field1;
        }
        if (field === 2) {
            title = res.channel.field2;
            value = res.feeds[0].field2;
        }
        if (field === 3) {
            title = res.channel.field3;
            value = res.feeds[0].field3;
        }
        if (field === 4) {
            title = res.channel.field4;
            value = res.feeds[0].field4;
        }
        if (field === 5) {
            title = res.channel.field5;
            value = res.feeds[0].field5;
        }
        if (field === 6) {
            title = res.channel.field6;
            value = res.feeds[0].field6;
        }
        if (field === 7) {
            title = res.channel.field7;
            value = res.feeds[0].field7;
        }
        if (field === 8) {
            title = res.channel.field8;
            value = res.feeds[0].field8;
        }
        this.setState({ 
            title: title,
            value: value,
            isLoading: false
        });
    }

    render() {
        const {isLoading, title, value} = this.state;
        return(
            <View>
                { isLoading ? <Text>Loading</Text> :
                    <View>
                        <Text >{title}</Text>
                        <Text >{value}</Text>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(SingleValue);