import React, {Component} from "react";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


class Dropdown extends Component {
    //class 방식 초기값 설정

    constructor(props) {
        super(props);
        // const [상태값, 상태값 설정 함수] = '';
        this.state = {dropDownOpen: false} //위와 같은형태라 생각하면 된다.
    }

    // event가 일어났을 때 
    toggle = (e) => {
      this.setState({dropDownOpen:!this.state.dropDownOpen})
    }

    render() {
        return(
            <div>
                <ButtonDropdown isOpen={this.state.dropDownOpen}>
                    <DropdownToggle>버튼 Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>헤더</DropdownItem>
                        <DropdownItem>메인</DropdownItem>
                        <DropdownItem>내용</DropdownItem>
                        <a href="#">
                            <DropdownItem>페이지 이동</DropdownItem>
                        </a>
                        <DropdownItem onClick={e => alert("이동할 수 없는 페이지입니다.")}>경고창</DropdownItem>
                    </DropdownMenu>

                </ButtonDropdown>
            </div>
        );
    }
}

export default Dropdown;