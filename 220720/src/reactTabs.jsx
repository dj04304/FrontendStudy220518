import React, {Component} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

class ReactTabs extends Component {
    //class 방식 초기값 설정

    constructor(props) {
        super(props);
        // const [상태값, 상태값 설정 함수] = '';
        this.state = {TabState: 'first'} //위와 같은형태라 생각하면 된다.
    }

    //first 와 last가 누를 때 마다 값을 찾아가게끔 해주는 역할
    toggle = (tabNum) => {
        if(this.state.TabState !== tabNum){
            this.setState({TabState:tabNum})
        }
    }

    render() {
        return(
            <div>
                {/* 탭 메뉴 */}
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => {this.toggle('first')}}>First TAB</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {this.toggle('last')}}>Last TAB</NavLink>
                    </NavItem>
                </Nav>
                {/* 탭 버튼 클릭시, 보여지는 부분 */}
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId='first'><h1>First TAB</h1></TabPane>
                    <TabPane tabId='last'><h1>Last TAB</h1></TabPane>
                </TabContent>
            </div>
        );
    }
}

export default ReactTabs;