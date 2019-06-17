import React, { Component } from 'react';
import { 
    View,
    Text,
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

class DataView extends Component {
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
    // _isMounted might be redundant...
    // call fetchmethod depending on type
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

    // SINGLE_VALUE fetch
    fetchOneLatestData = async () => {
        await fetchOneLatest(this.props.user.id, this.props.user.apiKey, this.props.field)
            .then((result) => {
                if (result.error === 'Not Found') {
                    //ERROR fetch failed!
                    console.log('Error!: ' + result.error);
                } else {
                    console.log('Fetch succeded! DataView.js');
                    if (this._isMounted)
                        this.handleFetchSuccess(result, this.props.field);
                }
            })
            .catch((error) => {
                console.log('ERROR fetching latest data! ' + error);
            });
    }

    // GRAPH_VALUES fetch
    fetchOneData = async () => {
        await fetchOne(this.props.user.id, this.props.user.apiKey, this.props.field)
            .then((result) => {
                if (result.error === 'Not Found') {
                    //ERROR fetch failed!
                    console.log('Error!: ' + result.error);
                } else {
                    console.log('Fetch succeded! DataView.js');
                    if (this._isMounted)
                        this.handleFetchSuccessMany(result, this.props.field);
                }
            })
            .catch((error) => {
                console.log('ERROR fetching data! ' + error);
            });
    }

    // single value handler
    handleFetchSuccess(res, field) {
        var title = '';
        var value = '';
        var date = new Date(res.feeds[0].created_at);
        title = res.channel['field' + field];
        value = res.feeds[0]['field' + field];
        this.setState({ 
            title: title,
            value: value,
            date: '' + date.toDateString()  + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            isLoading: false
        });
    }

    // graph values handler
    handleFetchSuccessMany(res, field) {
        var title = '';
        var values = [];
        var dates = [];
        title = res.channel['field' + field];
        res.feeds.forEach(data => {
            if (data['field' + field] == null) {
                console.log('ERROR: No data!');
            } else {
                values.push(parseInt(data['field' + field]));
                var date = new Date(data.created_at);
                dates.push('' + date.getHours() + ':' + date.getMinutes());
            }
        });
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

    // single value elements
    value = (title, value, date) => {
        return (
            <View style={styles.containerSingle}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        );
    }

    // graph values elements
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
                        color: (opacity = 1) => {
                            return `rgba(157, 132, 32, ${opacity})`;
                        },
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

export default connect(mapStateToProps)(DataView);