import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 79px;
    padding-bottom: 3em;
    @media(max-width: 776px) {
        padding-top: 50px;
    }
`

const HeaderContent = styled("div")`
    display: flex;
    margin-top: -17px;
    justify-content: space-between;
    @media(max-width: 776px) {
        display: block
    }
`

const HeaderLinks = styled("div")`
    display: grid;
    margin-top: 18px;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2.3em;
    justify-content: flex-end;
    width: 100%;
    max-width: 341px;
    height: 38px;

    @media(max-width: 776px) {
        width: 100%;
        margin: 5px auto;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        padding-bottom: 0.1em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        @media(max-width: 600px) {
            font-size: 16px !important;
        }
    

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.primary_link};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.primary_link};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link className="logo-link" to="/" style={{
                marginTop: "-15px"
            }}>
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/team">
                    Team
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/projects">
                    Projects
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/publications">
                    Publications
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/tools">
                    Tools
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;
