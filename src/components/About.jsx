import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import colors from "styles/colors";

const AboutContainer = styled("div")`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 15em 1fr;
    grid-gap: 3em;

    @media(max-width: 960px) {
        grid-template-columns: none;
        grid-gap: 0.2em;
    }
`

const AboutLinkContainer = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    text-align: left;

    @media(max-width: 960px) {
        text-align: center;
        padding-bottom: 0;
    }
`

const AboutLink = styled("a")`
    margin-bottom: 1.5em;
    font-weight: 600;
    line-height: 1.9;
    text-decoration: none;
    color: currentColor;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        opacity: 0;
        transition: all 400ms ease-in-out;
    }

    &:hover {
        color: ${colors.primary_link};
        span {
            transform: translateX(0px);
            opacity: 1;
            transition: all 150ms ease-in-out;
        }
    }
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    
    ul {
      li {
        margin-bottom: 9px;
        line-height: 27px;
      }
    }
    
    p {
      a {
        color: ${colors.primary_link};
      }
    }

    @media(max-width: 960px) {
        padding-top: 0;
    }
`


const About = ({ bio, socialLinks }) => (
    <AboutContainer>
        <AboutLinkContainer aria-label="links">
            {socialLinks.map((social, i) => (
                <AboutLink
                    key={i}
                    href={social.about_link[0].spans[0].data.url}
                    target="_blank" rel="noopener noreferrer">
                    {social.about_link[0].text}
                    <span>&#8594;</span>
                </AboutLink>
            ))}
        </AboutLinkContainer>
        <AboutBio aria-label="project info">
            <a href="https://arr.soc.northwestern.edu/" target="_blank">
                <span className="bold">NEW: </span>
                Sign up for our Accessibility Research Registry!
            </a>
            {RichText.render(bio)}
        </AboutBio>
    </AboutContainer>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};
