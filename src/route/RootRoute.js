import React,{Component} from 'react'
import { Router, Route, Link,IndexRoute,Redirect} from 'react-router'

import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'
import CategoryContainer from '../containers/CategoryContainer'
import Message from '../components/Message'

export default class RootRoute extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
    }

    render() {
        return (
            <Router>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="home" component={HomeContainer} />
                    <Route path="category" component={CategoryContainer} onLeave={()=>console.log('离开了category页面')} onEnter={()=>console.log('进入了category页面')}>
                        {/*这是绝对路由的写法，直接拼接/*/}
                        <Route path="/messages/:id" component={Message} />
                        {/*<Route path="messages/:id" component={Message} />*/}
                        {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
                        <Redirect from="messages/:id" to="/messages/:id" />
                    </Route>
                </Route>
            </Router>
        )
    }
}
