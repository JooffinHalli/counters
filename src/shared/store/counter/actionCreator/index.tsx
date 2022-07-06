export const addCounter = () => ({
  type: 'ADD_COUNTER'
}) as const;

export const deleteCounter = (id: number) => ({
  type: 'DELETE_COUNTER',
  payload: { id }
}) as const;

export const incrementCounter = (id: number) => ({
  type: 'INCREMENT_COUNTER',
  payload: { id }
}) as const;

export const decrementCounter = (id: number) => ({
  type: 'DECREMENT_COUNTER',
  payload: { id }
}) as const;

export const deleteFirst = () => ({
  type: 'DELETE_FIRST'
}) as const;

export const deleteLast = () => ({
  type: 'DELETE_LAST'
}) as const;

export const deleteAll = () => ({
  type: 'DELETE_ALL'
}) as const;