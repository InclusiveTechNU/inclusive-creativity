import React from "react";
import Moment from 'react-moment';
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import PropTypes from "prop-types";
import acmLogo from "images/acm_logo.jpg";

const PostCardContainer = styled('div')`
    border: 1px solid ${colors.grey200};
    padding: 3em 2.5em 2.25em 2.5em;
    border-radius: 3px;
    position: relative;
    text-decoration: none;
    background: white;
    height: fit-content;
    color: currentColor;
    display: flex;
    flex-direction: column;
    transition: all 150ms ease-in-out;

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;
    }
`

const PostCategory = styled("h6")`
    font-weight: 400;
    color: #4c4c4c;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
`

const PostTitle = styled("h3")`
    margin: 0;
    margin-top: 0.5em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1.2em;
`

const PostMetas = styled("div")`
    display: flex;
    align-items: center;
    margin-top: .7em;
    justify-content: space-between;
    font-size: 0.85em;
    color: #585858;
    font-weight: 300;
`

const PostAuthor = styled("div")`
    margin: 0;
`

const PostDate = styled("div")`
    margin: 0;
`

const PostDescription = styled("div")`
    margin-top: 1.2em;
    margin-bottom: 3.2em;
    
    p {
      font-size: .9em;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p:last-of-type {
        margin: 0;
    }
`

const PostCardAction = styled("a")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
    &:hover {
        color: ${colors.primary_link};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
    }
`

const ACMLink = styled("a")`
    position: absolute;
    right: 20px;
    top: 20px;
    filter: grayscale(1);
    transition: filter .4s;

    &:hover {
        filter: grayscale(0);
    }
    img {
        height: 40px;
        width: 40px;
    }
`

const PostCard = ({ url, author, category, date, title, description, uid, link, acmLink}) => (
    <PostCardContainer aria-label={`Publication: ${title[0].text}`} className="BlogPostCard">
        <PostCategory>
            {category[0].text}
        </PostCategory>
        <PostTitle>
            {title[0].text}
        </PostTitle>
        <PostDescription>
            {RichText.render(description)}
        </PostDescription>
        {(() => {if (url === "publications") {
                return <ACMLink href={acmLink}>
                    <img alt="View Publication on ACM Digital Library" src={acmLogo} />
                </ACMLink>
            }})()}
        <div style={{position: "absolute", 
                     bottom: "20px",
                     width: "calc(100% - 5em)"}}>
          <PostCardAction  target="_blank" href={link} className="PostCardAction">
              Read more <span aria-hidden="true">&#8594;</span>
          </PostCardAction>
          <PostMetas>
              <PostAuthor>
                  {author}
              </PostAuthor>
              <PostDate>
                  <Moment format="MMMM D, YYYY">{date}</Moment>
              </PostDate>
          </PostMetas>
        </div>
    </PostCardContainer>
)

export default PostCard;

PostCard.propTypes = {
    url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    acmLink: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}
