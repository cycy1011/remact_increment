import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const sharks =  createModel<RootModel>()({
   state:0,
   reducers:{
       increment:(state, payload:number = 1) => state + payload
   }
})