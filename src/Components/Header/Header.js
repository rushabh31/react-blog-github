import React from 'react'
import "../../index.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import bkgimg from '../../assets/notebook.svg'


import {
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderSubtitle,
    GithubLogin
} from './'
import { config } from "../../config"
const ButtonContainer = styled.div`
  display: 'block';
  position: 'absolute';
  top: 10px;
  right: 10px;
`
const Button = styled.button`
  -webkit-appearance: none;
  background: #e4405f;
  color: #FFF;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;

  :hover {
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);
  }
`
export const Header = () => {
    return (
        <HeaderContainer>


            <HeaderWrapper>
            <ButtonContainer>

                  <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://rushabh.info';
                      }} >
                    <FontAwesomeIcon icon={faHome} /> Home
                  </Button>



            </ButtonContainer>
                <HeaderTitle>{config.title}</HeaderTitle>
                <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
                {/*<div className="headerimg">
                 <img class="headerimgcls" width="200px"
                   alt="Rushabh sitting on table"
                   src={require("../../assets/notebook.svg")}
                 ></img>
               </div>*/}
            </HeaderWrapper>

        </HeaderContainer>

    )
}
