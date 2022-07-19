import React from "react";
import Footer from "./footer";
import styled from "styled-components";

const MainImg = styled.div`  
   width: 100%;
   height: 200px;

   background-color: red;
`

const Contents = styled.div`
    width: 100%;
    height: 2000px;
    background-attachment: #ccc;
`

const ContentIn = styled.div`
    display: flex;
    justify-content: space-around;

    margin: 0px auto;

    width: 1500px;
    height: 2000px;
    background-color: aqua;
`

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-top: 100px;

    height: 500px;
    
`

const Box = styled.div`
    width: 600px;
    height: 200px;

    background-color: brown;
`

function Coupon() {
    return(
        <div> 
            <MainImg/>
            <Contents>
                <ContentIn>
                    <FlexBox>
                        <Box/>
                        <Box/>
                    </FlexBox>
                    <FlexBox>
                        <Box/>
                        <Box/>
                    </FlexBox>
                </ContentIn>
            </Contents>
            <Footer/>
        </div>
    );
}

export default Coupon;