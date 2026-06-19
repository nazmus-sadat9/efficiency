// modules
import { randNum } from "./utilities/math";
import { copy } from "./utilities/copy"
import { makeTag } from "./make";
import { makeEvent } from "./events";
import { getLocation } from "./utilities/location"
export * from "./types";
export { makeEvent } from "./events";
export { makeTag } from "./make";


// snap object
export const snap = {
  randNum,
  copy,
  getLocation
}

// functions add in global
declare global {
  function query(selector: string): HTMLElement | null;
  function id(selector: string): HTMLElement | null;
  function makeTag<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: any): HTMLElementTagNameMap[K];
  function makeEvent(element: any, type: string, callback: any): void;
  
  // snap object
  const snap: { 
    randNum: (type: "int" | "float", min: number, max: number) => number; 
    copy: (text: any) => void;
    getLocation: () => Promise<{ lat: number; lon: number }>;
  };
}

// describe the global functions
// Query Selector
export const query = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

// Id Selector
export const id = (selector: string): HTMLElement | null => {
  return document.getElementById(selector);
};

// use for browser
if (typeof window !== "undefined"){
  (window as any).query = query;
  (window as any).id = id;
  (window as any).makeTag = makeTag;
  (window as any).makeEvent = makeEvent;
  (window as any).snap = snap;
}
