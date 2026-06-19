type RandomType = "int" | "float";
type EventTargetEl = string | Element | null;
type EventCallback = (ev: Event) => void;
type ElementAttributes = Record<string, string | number | boolean>;
interface MakeOptions {
    classes?: string[];
    attributes?: ElementAttributes;
    text?: string;
    child?: HTMLElement[];
}

declare function randNum(type: RandomType, min: number, max: number): number;

declare function copy(text: any): Promise<boolean>;

interface LocationCoords {
    lat: number;
    lon: number;
}
declare function getLocation(): Promise<LocationCoords>;

declare function makeEvent(element: EventTargetEl, // html target element
type: string, // event type
callback: EventCallback): void;

declare function makeTag<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: MakeOptions): HTMLElementTagNameMap[K];

declare const snap: {
    randNum: typeof randNum;
    copy: typeof copy;
    getLocation: typeof getLocation;
};
declare global {
    function query(selector: string): HTMLElement | null;
    function id(selector: string): HTMLElement | null;
    function makeTag<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: any): HTMLElementTagNameMap[K];
    function makeEvent(element: any, type: string, callback: any): void;
    const snap: {
        randNum: (type: "int" | "float", min: number, max: number) => number;
        copy: (text: any) => void;
        getLocation: () => Promise<{
            lat: number;
            lon: number;
        }>;
    };
}
declare const query: (selector: string) => HTMLElement | null;
declare const id: (selector: string) => HTMLElement | null;

export { type ElementAttributes, type EventCallback, type EventTargetEl, type MakeOptions, type RandomType, id, makeEvent, makeTag, query, snap };
