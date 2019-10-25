import { ADDNAME, ADDAGE } from './actionType';

export const addNameCreater = name => ({type: ADDNAME, name: name})
export const addAgeCreater = age => ({type: ADDAGE, age: age})