
import { usersManager } from "../daos/usersManager.js";

export const createOne=(obj)=>{
    return usersManager.createOne(obj)
}

export const findByEmail=(email)=>{
    return cManager.findByEmail(email)
}

export const findById=(id)=>{
    return usersManager.findById(id)
}

