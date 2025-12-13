import { navigate } from "gatsby-link";
import { useCallback, useState } from "react";

import { CatalogRoute } from "../types";
import useBackButton from "./useBackButton";

const useReturnHandler = (
    catalog: CatalogRoute,
    location: Location & { state?: { fromCellCatalog?: boolean } },
) => {
    const [hasClickedReturn, setHasClickedReturn] = useState(false);

    useBackButton(() => setHasClickedReturn(true));

    const handleReturnClick = useCallback(() => {
        if (location.state?.fromCellCatalog) {
            navigate(-1);
        } else {
            navigate(catalog);
        }
        setHasClickedReturn(true);
    }, [location, catalog]);

    return { hasClickedReturn, handleReturnClick };
};

export default useReturnHandler;
