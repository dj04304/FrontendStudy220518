import React from "react";
import styles from "./brand.module.css";

function Goods ({user}) {
    return(
        <div className={styles.goods}>
            <img src={user.src} alt={user.mainTitle}/>
            <div className={styles.goods_info}>
                <button>{user.button}</button>
                <p className={styles.goods_text}>{user.title}</p>
                <p className={styles.day}>{user.day}</p>
            </div>
        </div>
    )
}

function BrandItem() {
    
    //첫번째 배열
    const goods1 = [
        {
            id: 1,
            src:'https://images-kr.amoremall.com/fileupload/brand/31/2022/03/10/%EC%99%BC%EC%AA%BD_%EB%A9%94%EC%9D%B8%20750x660.jpg?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품1',
            title: '아몰랜드에 찾아온 유미의 세포들',
            day: '2022.07.11 - 2022.07.24',
            
        },
        {
            id: 2,
            src:'https://images-kr.amoremall.com/fileupload/brand/18/2022/06/09/%EB%A9%94%EC%9D%B8-750x660.jpg?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품2',
            title: '아몰랜드에 찾아온 유미의 세포들',
            day: '2022.07.11 - 2022.07.24',
            
        },{
            id: 3,
            src:'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품3',
            title: '헤라 나의 여름 SUN택! ~37% SALE ',
            day: '2022.07.11 - 2022.07.24',
            
        }

    ]

    //두번째 배열
    const goods2 = [
        {
            id: 4,
            src:'https://images-kr.amoremall.com/fileupload/brand/25/2021/08/12/img_HANYUL.png?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품4',
            title: '아몰랜드에 찾아온 유미의 세포들',
            day: '2022.07.11 - 2022.07.24',
            
        },
        {
            id: 5,
            src:'https://images-kr.amoremall.com/fileupload/brand/17/2021/12/23/%EB%A0%88%ED%8B%B0%EB%86%80%20%EC%97%91%EC%8A%A4%ED%8D%BC%ED%8A%B8%20%EC%8B%9C%EB%A6%AC%EC%A6%88%20%EC%A1%B0%ED%95%A9%ED%95%A9%EC%84%B1%EC%BB%B7.jpg?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품5',
            title: '아몰랜드에 찾아온 유미의 세포들',
            day: '2022.07.11 - 2022.07.24',
            
        },{
            id: 6,
            src:'https://images-kr.amoremall.com/fileupload/brand/19/2021/08/12/img_illiyoon.png?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품6',
            title: '아몰랜드에 찾아온 유미의 세포들 ',
            day: '2022.07.11 - 2022.07.24',
            
        }

    ]

    //세번째 배열
    const goods3 = [
        {
            id: 7,
            src:'https://images-kr.amoremall.com/fileupload/brand/22/2021/08/12/img_AMOREPACIFIC.png?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품7',
            title: '[아모레 퍼시픽] 엔자임 클렌징 라인 (7월)',
            day: '2022.07.18 - 2022.07.24',
            
        },
        {
            id: 8,
            src:'https://images-kr.amoremall.com/fileupload/brand/11/2022/04/11/%EB%B0%94%EC%BF%A0%EC%B9%98%EC%98%AC%ED%81%AC%EB%A6%BC_main.jpg?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품8',
            title: 'NEW 마몽드 레드세럼 런칭!',
            day: '2022.07.18 - 2022.07.24',
            
        },{
            id: 9,
            src:'https://images-kr.amoremall.com/fileupload/brand/12/2022/05/09/01_0485_F(2).jpg?shrink=387:341',
            button: 'EVENT',
            mainTitle: '상품9',
            title: '[바이탈 뷰티] 슈퍼 콜라겐 에센스 비오...',
            day: '2022.07.18 - 2022.07.24',
            
        }

    ]

    return(
        <div className={styles.items}>
            <div className={styles.items_in}>
                {goods1.map((user, index) => (
                    <Goods user={user} key={index}/>
                ))}
            </div>
            <div className={styles.items_in}>
                {goods2.map((user, index) => (
                    <Goods user={user} key={index}/>
                ))}
            </div>
            <div className={styles.items_in}>
                {goods3.map((user, index) => (
                     <Goods user={user} key={index}/>
                ))}
            </div>
            
        </div>
    )
}

export default BrandItem;