// Decap CMS Media Libraries
declare module "decap-cms-media-library-uploadcare";
declare module "decap-cms-media-library-cloudinary";

declare module "*.svg" {
    import type { ReactElement, SVGProps } from "react";
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}
