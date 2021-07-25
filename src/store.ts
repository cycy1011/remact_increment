import {init, RematchRootState, RematchDispatch} from '@rematch/core';
import {models, RootModel} from './models/index';

export const store = init({models})

export type MyState = RematchRootState<RootModel>;
export type MyDispatch = RematchDispatch<RootModel>;
