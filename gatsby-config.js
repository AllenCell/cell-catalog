module.exports = {
    siteMetadata: {
        title: "Allen Cell Collection",
        siteURL: "https://cell-catalog.allencell.org",
        description:
            "The Allen Cell Collection is a growing compilation of cell lines with key proteins fluorescently tagged.",
    },
    headers: [
        {
            source: "*",
            headers: [
                {
                    key: "Content-Security-Policy",
                    value: "frame-ancestors *.allencell.org;",
                },
            ],
        },
    ],
    // turn on if seeing minified errors in production
    // flags: {
    //     DEV_SSR: true,
    // },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-fix-fouc",
        "gatsby-remark-line-breaks",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    indentedSyntax: true,
                },
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/img`,
                name: "uploads",
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/pdf`,
                name: "pdf",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images",
            },
        },
        `gatsby-plugin-image`,
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-svg",
        "gatsby-transformer-remark-frontmatter",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    { resolve: "gatsby-remark-external-links" },
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-decap-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.tsx`,
            },
        },
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
            },
        },
        {
            resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ["/bulma-style.sass"], // applies purging only on the bulma css file
                printRejected: true,
            },
        }, // must be after other CSS plugins
        "gatsby-plugin-netlify", // make sure to keep it last in the array
    ],
    mapping: {
        "MarkdownRemark.frontmatter.genetic_modifications.gene": `MarkdownRemark.frontmatter.symbol`,
        "MarkdownRemark.frontmatter.disease": `MarkdownRemark.frontmatter.name`,
        "MarkdownRemark.frontmatter.parental_line": `MarkdownRemark.frontmatter.cell_line_id`,
    },
};
