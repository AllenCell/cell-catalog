import { ReactNode } from "react";

export interface CellLineInfoCardRequiredProps {
    href: string;
    certificateOfAnalysis: string;
    healthCertificate: string;
    orderLink: string;
    cellLineId: number;
    geneName: string;
    geneSymbol: string;
}
export interface InfoTableRow {
    key: React.Key;
    label: string;
    children: ReactNode;
}
