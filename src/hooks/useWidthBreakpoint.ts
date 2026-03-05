import { PHONE_BREAKPOINT, TABLET_BREAKPOINT } from "../constants";
import useWindowWidth from "./useWindowWidth";

export const useMaxWidthBreakpoint = (breakpoint: number): boolean => {
    const windowWidth = useWindowWidth();
    return windowWidth < breakpoint;
};

export const useMobileBreakpoint = () =>
    useMaxWidthBreakpoint(PHONE_BREAKPOINT);
export const useTabletBreakpoint = () =>
    useMaxWidthBreakpoint(TABLET_BREAKPOINT);

export default useMaxWidthBreakpoint;
