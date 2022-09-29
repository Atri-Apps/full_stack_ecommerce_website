import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "about-us": {},
  "contact-us": {},
  "product": {},
  "shop": {},
  "extra": {}
}});

export default useIoStore;
