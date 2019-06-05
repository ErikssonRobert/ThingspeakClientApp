import React, { Component } from 'react';
import { 
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator
 } from 'react-native';
 import {
     LineChart,
 } from 'react-native-chart-kit';
 import { fetchOneLatest } from '../../services/FetchOneLatest';
 import { fetchOne } from '../../services/FetchOne';
 import { connect } from 'react-redux';
 import styles from '../../styles/cardStyles/styles';
 import COLORS from '../../constants/colors';

class SingleValue extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            value: '',
            date: '',
            values: [],
            dates: [],
            isLoading: true,
            isPressed: false,
        }
    }

    componentDidMount() {
        this._isMounted = true;
        switch(this.props.type) {
            case 'SINGLE_VALUE':
                this.fetchOneLatestData();
            case 'GRAPH_VALUES':
                this.fetchOneData();
            default:
                return;
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchOneLatestData = async () => {
        await fetchOneLatest(this.props.user.id, this.props.user.apiKey, this.props.field)
            .then((result) => {
                if (result.error === 'Not Found') {
                    //ERROR fetch failed!
                    console.log('Error!: ' + result.error);
                } else {
                    console.log('Fetch succeded! SingleValue.js');
                    if (this._isMounted)
                        this.handleFetchSuccess(result, this.props.field);
                }
            });
    }

    fetchOneData = async () => {
        await fetchOne(this.props.user.id, this.props.user.apiKey, this.props.field)
            .then((result) => {
                if (result.error === 'Not Found') {
                    //ERROR fetch failed!
                    console.log('Error!: ' + result.error);
                } else {
                    console.log('Fetch succeded! SingleValue.js');
                    if (this._isMounted)
                        this.handleFetchSuccessMany(result, this.props.field);
                }
            });
    }

    handleFetchSuccess(res, field) {
        var title = '';
        var value = '';
        var date = new Date(res.feeds[0].created_at);
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
            date: '' + date.toDateString()  + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            isLoading: false
        });
    }

    handleFetchSuccessMany(res, field) {
        var title = '';
        var values = [];
        var dates = [];
        if (field === 1) {
            title = res.channel.field1;
            res.feeds.forEach(data => {
                if (data.field1 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field1);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 2) {
            title = res.channel.field2;
            res.feeds.forEach(data => {
                if (data.field2 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field2);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 3) {
            title = res.channel.field3;
            res.feeds.forEach(data => {
                if (data.field3 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field3);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 4) {
            title = res.channel.field4;
            res.feeds.forEach(data => {
                if (data.field4 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field4);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 5) {
            title = res.channel.field5;
            res.feeds.forEach(data => {
                if (data.field5 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field5);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 6) {
            title = res.channel.field6;
            res.feeds.forEach(data => {
                if (data.field6 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field6);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 7) {
            title = res.channel.field7;
            res.feeds.forEach(data => {
                if (data.field7 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field7);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        if (field === 8) {
            title = res.channel.field8;
            res.feeds.forEach(data => {
                if (data.field8 == null) {
                    console.log('ERROR: No data!');
                } else {
                    values.push(data.field8);
                    var date = new Date(data.created_at);
                    dates.push('' + date.getHours() + ':' + date.getMinutes());
                }
            });
        }
        this.setState({ 
            title: title,
            values: values,
            dates: dates,
            isLoading: false
        });
    }

    componentPressed = () => {
        this.setState({
            isPressed: !this.state.isPressed
        });
    };

    remove = () => {
        this.props.delete(this.props.index);
    }

    value = (title, value, date) => {
        return (
            <View style={styles.containerSingle}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        );
    }

    values = (title, values, dates) => {
        console.log('rendering values...: ' + values);
        return (
            <View style={styles.containerGraph}>
                <Text style={styles.title} >{title}</Text>
                <LineChart 
                    data={{
                        labels: dates,
                        datasets: [{
                            data: values
                        }]
                    }}
                    width={Dimensions.get('window').width - (Dimensions.get('window').width * 0.08)}
                    height={160}
                    chartConfig={{
                        backgroundGradientFrom: COLORS.BROWN,
                        backgroundGradientTo: COLORS.BROWN,
                        color: (opacity = 1) => `rgba(157, 132, 32, ${opacity})`,
                        strokeWidth: 2
                    }}
                    bezier
                    style={{
                        alignSelf: 'center',
                    }}
                />
            </View>
        );
    }

    render() {
        const {isLoading, title, value, date, values, dates, isPressed} = this.state;
        return(
            <View>
                { isLoading ? 
                <View style={styles.containerSingle}>
                    <ActivityIndicator style={styles.loadingSmall} size='large' /> 
                </View> :
                <View>
                    <TouchableOpacity onPress={() => this.componentPressed()}>
                        {
                            this.props.type == 'SINGLE_VALUE' ? this.value(title, value, date) : this.values(title, values, dates)
                        }
                        {
                            isPressed ? 
                            <TouchableOpacity style={styles.button} onPress={this.remove}>
                                <View>
                                    <Text style={styles.deleteBtnTxt}>DELETE</Text>
                                </View>
                            </TouchableOpacity> : null
                        }
                    </TouchableOpacity>
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