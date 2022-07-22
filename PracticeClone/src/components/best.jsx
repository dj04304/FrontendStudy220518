import React from "react";
import styled from "styled-components";

import BestItem from "./bestItem";
import Footer from "./footer";

const Contents = styled.div`
    width: 100%;
`;

const BestBlock = styled.div`
    margin: 0px auto;
    padding: 50px 0px;

    width: 1600px;
    height: 2000px;

    background-color: #ccc;
`;

function Best() {
    return(
       <> 
            <Contents>
                <BestBlock>
                    <BestItem/>
                </BestBlock>
            </Contents>
            
            <Footer/>
        </>
    );
}

export default Best;