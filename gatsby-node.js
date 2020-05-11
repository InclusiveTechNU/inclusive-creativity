const path = require('path');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
    promise.then(result => {
        if (result.errors) {
            throw result.errors
        }
        return result
    });

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await wrapper(
        graphql(`
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
                            secondary_color
                            primary_color
                            _meta {
                                uid
                            }
                        }
                    }
                }
            }
        }
    `)
    )

    const projectsList = result.data.prismic.allProjects.edges;
    const projectTemplate = require.resolve('./src/templates/project.jsx');

    projectsList.forEach(edge => {
        // The uid you assigned in Prismic is the slug!
        createPage({
            type: 'Project',
            match: '/work/:uid',
            path: `/work/${edge.node._meta.uid}`,
            component: projectTemplate,
            context: {
                // Pass the unique ID (uid) through context so the template can filter by it
                uid: edge.node._meta.uid,
            },
        })
    })
}
