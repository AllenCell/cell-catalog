import { useCallback, useState } from "react";

import { CatalogRoute } from "../types";
import { returnToCatalog } from "../utils/returnToCatalog";
import useBackButton from "./useBackButton";

const useReturnHandler = (catalog: CatalogRoute, location: Location) => {
    const [hasClickedReturn, setHasClickedReturn] = useState(false);

    useBackButton(() => setHasClickedReturn(true));

    const handleReturnClick = useCallback(() => {
        returnToCatalog(location, catalog);
        setHasClickedReturn(true);
    }, [location, catalog]);

    return { hasClickedReturn, handleReturnClick };
};

export default useReturnHandler;
