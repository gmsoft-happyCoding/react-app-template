import { shallowEqual, useSelector } from 'react-redux';

export function useShallowEqualSelector<TState, TSelected>(
  selector: (state: TState) => TSelected
): TSelected {
  return useSelector(selector, shallowEqual);
}
