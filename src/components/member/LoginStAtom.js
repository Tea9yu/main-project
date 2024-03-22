import { atom } from "recoil";

export const LoginStAtom = atom({
    key : 'LoginStAtom' ,
    default : localStorage.getItem('token')
})