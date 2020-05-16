import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import PersonCard from "components/PersonCard";

const WorkTitle = styled("h1")`
    margin-bottom: 1em;
`

const PersonsContainer = styled("div")`
    display: flex;
    flex-wrap: wrap;
`

const Work = ({ persons, meta }) => (
    <>
        <Helmet
            title={`Team | Inclusive Creativity`}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Team | Inclusive Creativity`,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout>
            <WorkTitle>
                Team
            </WorkTitle>
            <PersonsContainer>
                {persons.map((person, i) => (
                    <PersonCard
                        link={person.node.link.url}
                        name={person.node.name}
                        title={person.node.title}
                        image={person.node.image}
                        bio={person.node.bio}
                    />
                ))}
            </PersonsContainer>
            <WorkTitle>
                Advisory Board
            </WorkTitle>
            <a href="https://smtd.umich.edu/about/faculty-profiles/sile-omodhrain/">Sile O’Modhrain (UMichigan)</a>
            <br />
            <br /><a href="http://www.eecs.qmul.ac.uk/profiles/stockmantony.html">Tony Stockman (Queen Mary University)</a>
            <br />
            <br /><a href="https://www.microsoft.com/en-us/research/people/merrie/">Meredith Morris (MSR)</a>
            <br />
            <br /><a href="https://research.adobe.com/person/gautham-mysore/">Gautham Mysore (Adobe)</a>
        </Layout>
    </>
);

export default ({ data }) => {
    const persons = data.prismic.allPersons.edges;
    const meta = data.site.siteMetadata;
    if (!persons) return null;

    persons.sort((a, b) => {
        const aTitle = a.node.title[0].text;
        const bTitle = b.node.title[0].text;
        if (aTitle.indexOf("Principal Investigator") === 0) {
            return -1;
        } else if (bTitle.indexOf("Principal Investigator") === 0) {
            return 1;
        } else if (aTitle.indexOf("Principal Investigator") !== -1 &&
                   bTitle.indexOf("Principal Investigator") === -1) {
            return -1;
        } else if (bTitle.indexOf("Principal Investigator") !== -1 &&
                   aTitle.indexOf("Principal Investigator") === -1) {
            return 1;
        } else if (aTitle.indexOf("Principal Investigator") !== -1 &&
                   bTitle.indexOf("Principal Investigator") !== -1) { 
            return a.node.name[0].text - b.node.name[0].text;
        } else if (aTitle.indexOf("Ph.D.") !== -1 && bTitle.indexOf("Ph.D.") === -1) {
            return -1;
        } else if (bTitle.indexOf("Ph.D.") !== -1 && aTitle.indexOf("Ph.D.") === -1) {
            return 1;
        } else {
            return a.node.name[0].text - b.node.name[0].text;
        }
    });
    return (
        <Work persons={persons} meta={meta}/>
    )
}

Work.propTypes = {
    persons: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allPersons {
              edges {
                node {
                  name
                  title
                  link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                  image
                  bio
                }
              }
            }
          }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
