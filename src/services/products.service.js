import { manager } from "../daos/productManagerMongo.js";

 export const findAll=(obj) =>{
    return manager.findAll (obj)
}

export const createOne=(obj)=>{
    return manager.createOne(obj)
}

export const findById=(id)=>{
    return manager.findById(id)
}

export const deleteOne=(id)=>{
    return manager.deleteOne(id)
}

export const updateOne=(id,obj)=>{
    return manager.updateOne(id,obj)
}