import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import spooch from "images/nu-hci-logo.svg"

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};
    }
`

const FooterSpooch = styled("img")`
    max-width: 130px;
    margin-top: 1.25em;
`

const Footer = () => (
    <FooterContainer>
        <FooterAuthor href="https://hci.northwestern.edu">
            © {(new Date()).getFullYear().toString()} — Northwestern Accessible Content Production Tools Group 
            <FooterSpooch className="FooterSpooch" src={spooch} alt="Northwestern HCI Logo" />
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
