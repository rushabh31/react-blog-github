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

            <HeaderWrapper>
                <HeaderTitle>{config.title}</HeaderTitle>
                <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
                <div className="headerimg">
                 <img class="headerimgcls" width="200px"
                   alt="Rushabh sitting on table"
                   src={require("../../assets/notebook.svg")}
                 ></img>
               </div>
            </HeaderWrapper>
        </HeaderContainer>
    )
}
