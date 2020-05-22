import { DvaModelBuilder } from 'dva-model-creator';
import { Food } from '@/types/Food.d';
import { WHAT_TO_EAT } from '@/constant/namespace';
import { reset } from './whatToEat.actions';
import drawHandler from './handler/draw.handler';
import { searchFoodHandler } from './handler';

export type State = Food;
export interface WhatToEatState {
  [WHAT_TO_EAT]: Food;
}

const defaultState = () => ({ name: '', img: undefined });

const modelBuilder = new DvaModelBuilder<State>(defaultState(), WHAT_TO_EAT);

modelBuilder.case(reset, defaultState);

drawHandler(modelBuilder);
searchFoodHandler(modelBuilder);

export default modelBuilder.build();
