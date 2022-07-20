import React, {Component} from "react";
import { UncontrolledCarousel } from "reactstrap";
import './carousel.css';



const items = [
    
    {
        src: 'https://cdn.pixabay.com/photo/2021/10/30/08/07/desert-6753729_960_720.jpg',
        altText: '이미지1의 대체글',
        caption: '슬라이드1 설명',
        header: '슬라이드1 제목'
    },
    {
        src: '/img/jellyfish-gb2440d06d_1920.jpg',
        altText: '이미지2의 대체글',
        caption: '슬라이드2 설명',
        header: '슬라이드2 제목'
    }, 
    {
        src: '/img/lofoten-g547912a9f_1920.jpg',
        altText: '이미지3의 대체글',
        caption: '슬라이드3 설명',
        header: '슬라이드3 제목'
    }

]

class ReactCarousel extends Component {

    render(){
        return(
            <div>
                <UncontrolledCarousel items = {items}/>
            </div>
        );
    }
}

export default ReactCarousel;