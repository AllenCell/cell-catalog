import { navigate } from "gatsby";

import { CatalogRoute } from "../types";

export type CatalogLocationState = {
    fromCellCatalog?: boolean;
};

export const returnToCatalog = (
    location: Location & { state?: CatalogLocationState },
    catalogPath: CatalogRoute,
) => {
    if (location.state?.fromCellCatalog) {
        navigate(-1);
    } else {
        navigate(catalogPath);
    }
};
