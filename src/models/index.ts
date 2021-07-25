import { Models } from '@rematch/core'
import {dolphins} from './dolphins'
import {sharks} from './sharks'

export interface RootModel extends Models<RootModel>{
    dolphins: typeof dolphins;
    sharks: typeof sharks;
}
export const models:RootModel = {
    dolphins,
    sharks
}