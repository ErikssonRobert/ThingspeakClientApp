import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content';

class AddView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldNumber: 1,
            type: 'SINGLE_VALUE',
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

    addComponentPressed = async () => {
        const component = this.state;
        await this.props.addComp(component);
        this.props.add();
    };

    render() {
        return (
            <Content 
                currentField={this.state.fieldNumber} 
                getField={this.getFieldNumber} 
                currentType={this.state.type} 
                getType={this.getType} 
                addComponent={this.addComponentPressed} 
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

export default connect(mapStateToProps)(AddView);