import React from 'react'
import "../../index.css";

import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderSubtitle,
    GithubLogin
} from './'
import { config } from "../../config"

export const Header = () => {
    return (
        <HeaderContainer>
        <div className="headerimg">
         <img class="headerimgcls"
           alt="Rushabh sitting on table"
           src={require("../../assets/notebook2.svg")}
         ></img>
       </div>
            <GithubLogin isAbsolute={true} />
            <HeaderWrapper>
                <HeaderTitle>{config.title}</HeaderTitle>
                <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
