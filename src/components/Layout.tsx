import * as React from "react";
import { Layout as AntLayout, ConfigProvider } from "antd";
import { Script, withPrefix } from "gatsby";
import { Helmet as RawHelmet } from "react-helmet";

import NavBar from "../component-queries/NavBar";
import "../style/index.sass";
import theme from "../style/theme";
import useSiteMetadata from "./SiteMetadata";

const { Content } = AntLayout;

const { container, content } = require("../style/layout.module.css");

const Helmet =
    RawHelmet as unknown as React.ComponentType<React.PropsWithChildren>;

interface TemplateWrapperProps extends React.PropsWithChildren {
    header?: React.ReactNode;
}

const TemplateWrapper = ({ children, header }: TemplateWrapperProps) => {
    const { description, title } = useSiteMetadata();
    return (
        <ConfigProvider theme={theme}>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="icon"
                    type="image/x-icon"
                    href={`${withPrefix("/")}img/favicon.ico`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/AICS-icon_32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix("/")}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix("/")}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                ></link>
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix("/")}img/og-image.jpg`}
                />
            </Helmet>
            <AntLayout className={container}>
                <NavBar />
                {header}
                <Content className={content}>{children}</Content>
            </AntLayout>
            <Script type="text/javascript" src="/iframeResizer.js" />
        </ConfigProvider>
    );
};

export default TemplateWrapper;
