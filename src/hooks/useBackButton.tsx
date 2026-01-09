import { useEffect } from "react";

const useBackButton = (onBack: () => void) => {
    useEffect(() => {
        const handleBackButtonClick = () => {
            onBack();
        };
        if (typeof window !== "undefined") {
            window.addEventListener("popstate", handleBackButtonClick);

            return () => {
                window.removeEventListener("popstate", handleBackButtonClick);
            };
        }
    }, [onBack]);
};

export default useBackButton;
