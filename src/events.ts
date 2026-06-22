import { EventTargetEl, EventCallback } from "./types";

// event function 
export function makeEvent(
  element: EventTargetEl, // html target element
  type: string, // event type
  callback: EventCallback // callback function
): void{

  // find the given element
  const target = typeof element === 'string' ? document.querySelector(element) : element;

  if (target){
    // run the event listener 
    target.addEventListener(type, callback);
  }
  else{
    // if the element not found
    console.error(`light-snap: Element not found for event ${type}`);
  }

}
