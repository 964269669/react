import React, {Component} from 'react';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                这是message
                <h3>Message {this.props.params.id}</h3>
            </div>
        )
    }
}
