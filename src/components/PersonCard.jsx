import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const PersonCardFlexBox = styled("div")`
    width: fit-content;
    height: fit-content;
`

const PersonCardContainer = styled("a")`
    width: 410px;
    margin-right: 30px;
    display: inline-block;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    vertical-align:top;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(min-width: 1377px) {
        &:nth-child(3n+3) {
            margin-right: 0px !important;
        }
    }

    @media(max-width: 1419px) {
        margin-right: 20px;
    }

    @media(max-width: 1409px) {
        margin-right: 10px;
    }

    @media(max-width: 1377px) {
        &:nth-child(2n+2) {
            margin-right: 0px !important;
            margin-left: 0px !important;
        }
        margin-left: calc(56% - 500px);
        margin-right: 75px;
    }

    @media(max-width: 1025px) {
        margin-right: 40px !important;
    }

    @media(max-width: 990px) {
        margin-right: 20px !important;
    }

    @media(max-width: 900px) {
        display: block;
        margin-left: 0 !important;
        margin-right: 0px !important;
    }

    @media(max-width: 600px) {
        font-size: 16px !important;
    }

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;

        .PersonCardAction {
            color: ${props => props.secondaryColor};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .PersonCardContent::before {
            opacity: 0.02;
            transition: all 150ms ease-in-out;
        }

        .PersonCardImageContainer::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
        }
    }
`

const PersonCardContent = styled("div")`
    background: white;
    padding: 4em 3em 2.25em 3em;
    position: relative;
    height: 570px;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${props => props.secondaryColor};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }
`

const PersonCardCategory = styled("h6")`
    font-weight: 600;
    color: ${colors.grey600};
`

const PersonCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`

const PersonCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;
`

const PersonCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    bottom: 45px;
    position: absolute;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const PersonCardImageContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${props => props.secondaryColor};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        height: 100%;
        width: 100%;
    }
`

const PersonCard = ({ link, name, title, image, bio}) => (
    <PersonCardContainer href={link} target="_blank">
        <PersonCardImageContainer className="PersonCardImageContainer">
            <img src={image.url} alt="" role="presentation"/>
        </PersonCardImageContainer>
        <PersonCardContent className="PersonCardContent">
            <PersonCardTitle>
                {name[0].text}
            </PersonCardTitle>
            <PersonCardCategory>
                {title[0].text}
            </PersonCardCategory>
            <PersonCardBlurb>
                {bio[0].text}
            </PersonCardBlurb>
            <PersonCardAction className="PersonCardAction">
                Details <span>&#8594;</span>
            </PersonCardAction>
        </PersonCardContent>
    </PersonCardContainer>
)

export default PersonCard;

PersonCard.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.array.isRequired,
    title: PropTypes.array.isRequired,
    image: PropTypes.object.isRequired,
    bio: PropTypes.string.isRequired
}
