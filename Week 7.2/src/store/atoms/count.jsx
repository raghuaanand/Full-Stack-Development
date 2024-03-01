import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom", // key is different for each atom bascially its unique
    default: 0
});
