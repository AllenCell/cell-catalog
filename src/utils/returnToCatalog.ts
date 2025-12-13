import { navigate } from "gatsby";

import { CatalogRoutes } from "../types";

export type CatalogLocationState = {
    fromCellCatalog?: boolean;
};

export const returnToCatalog = (
    location: Location & { state?: CatalogLocationState },
    catalogPath: CatalogRoutes,
) => {
    if (location.state?.fromCellCatalog) {
        navigate(-1);
    } else {
        navigate(catalogPath);
    }
};
