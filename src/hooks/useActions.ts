import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function useActions<AS>(actions: AS, deps = []): AS {
  const dispatch = useDispatch();
  return useMemo(
    // @ts-ignore
    () => bindActionCreators(actions, dispatch),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actions, dispatch, ...deps]
  );
}
