// 容器组件类似于按照功能模块去划分
import React, {Component} from 'react';

import '../css/AppCss.css';
import  Header from '../components/Header'

export default class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="appContainer">
                <div className="appHeader">
                   <Header/>
                </div>
                <div className="appContent">
                    内容区域
                    {this.props.children}
                </div>
                <div className="appFooter">
                    footer
                </div>
                {/*this.props.children?this.props.children:<div>容器页面</div>*/}
            </div>
        )
    }
}
