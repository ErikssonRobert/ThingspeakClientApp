import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { addComponent, editNewData } from '../../actions/index';
import { bindActionCreators } from 'redux';

class AddView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldNumber: 0,
            type: '',
        }
    }

    getFieldNumber = (num) => {
        this.setState({
            fieldNumber: parseInt(num)
        });
    };

    getType = (type) => {
        this.setState({
            type: type
        });
    };

    addComponentPressed = () => {
        const component = this.state;
        this.props.addComponent(component);
        this.props.editNewData(true);
        this.props.add();
    };

    render() {
        return (
            <Content getField={this.getFieldNumber} getType={this.getType} addComponent={this.addComponentPressed} />
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addComponent,
        editNewData,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddView);