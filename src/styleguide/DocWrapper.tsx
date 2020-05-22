import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { stateContainer } from '../utils';

type Props = {
  children: ReactElement<any>;
};

const Wrapper = ({ children }: Props) => (
  <Provider store={stateContainer._store}>{children}</Provider>
);

export default Wrapper;
