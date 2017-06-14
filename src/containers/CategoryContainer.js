import React, {Component} from 'react';

export default class CategoryContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                这是分类页面
                {this.props.children}
            </div>
        )
    }
}
