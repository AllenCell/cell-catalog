import { navigate } from "gatsby";

export type CatalogLocationState = {
    fromCellCatalog?: boolean;
};

export const returnToCatalog = (
    location: Location & { state?: CatalogLocationState },
    catalogPath: string = "/",
) => {
    if (location.state?.fromCellCatalog) {
        navigate(-1);
    } else {
        navigate(catalogPath);
    }
};
