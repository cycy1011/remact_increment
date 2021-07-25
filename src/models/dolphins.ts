import { createModel } from '@rematch/core'
import { RootModel } from '.'
// import { delay } from './utils'

export const dolphins = createModel<RootModel>()({
    state:0,
    reducers:{
     increment: (state,payload:number) => state + payload
    },
    effects: (dispatch) => ({
        async incrementAsync(payload:number=1) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.dolphins.increment(payload)
        }
    })
})
