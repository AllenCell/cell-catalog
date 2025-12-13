import { navigate } from "gatsby";
import React, { useEffect } from "react";

import Layout from "../components/Layout";

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(CatalogRoutes.CellCatalog);
        }, 2000);
        return () => clearTimeout(timer);
    }, [browser]);

    return (
        browser && (
            <Layout>
                <div>
                    <h1>NOT FOUND</h1>
                    <p>
                        You just hit a route that doesn&#39;t exist...
                        Redirecting to Cell Catalog home page...
                    </p>
                </div>
            </Layout>
        )
    );
};

export default NotFoundPage;
