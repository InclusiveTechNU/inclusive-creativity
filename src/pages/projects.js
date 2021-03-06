import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";

const WorkTitle = styled("h1")`
    margin-bottom: 1em;
`

const Work = ({ projects, meta }) => (
    <>
        <Helmet
            title={`Projects | Inclusive Creativity`}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Projects | Inclusive Creativity`,
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
                Projects
            </WorkTitle>
            <>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        category={project.node.project_category}
                        title={project.node.project_title}
                        description={project.node.project_preview_description}
                        resources={project.node.project_description}
                        thumbnail={project.node.project_preview_thumbnail}
                        uid={project.node._meta.uid}
                        color={project.node.primary_color}
                        secondaryColor={project.node.secondary_color}
                    />
                ))}
            </>
        </Layout>
    </>
);

export default ({ data }) => {
    let projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;
    if (!projects) return null;

    // Sort projects
    projects.sort((a, b) => {
        return a.node.project_category[0].text.localeCompare(b.node.project_category[0].text);
    })

    return (
        <Work projects={projects} meta={meta}/>
    )
}

Work.propTypes = {
    projects: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        project_description
                        secondary_color
                        primary_color
                        _meta {
                            uid
                        }
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
