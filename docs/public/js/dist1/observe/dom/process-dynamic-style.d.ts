export interface ModifiedSheet {
    index: number;
    sheet: CSSStyleSheet;
}
export declare function processAdoptedStyleSheets(sheets: number[], node: Node, updatedSheets: ModifiedSheet[]): void;
