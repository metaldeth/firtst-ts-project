import { type } from 'os'
import { INCREMENT, DECREMENT, CLEAR } from '../constants/counter'

export type IncrementAction = {
    type: typeof INCREMENT,
    count: number
}
export type DecrementAction = {
    type: typeof DECREMENT,
    count: number
}
export type ClearAction = {
    type: typeof CLEAR
}

export type CountActions = IncrementAction | DecrementAction | ClearAction;

export const increment = (count: number): IncrementAction => ({
    type: INCREMENT,
    count
})

export const decrement = (count: number): DecrementAction => ({
    type: DECREMENT,
    count
})

export const clear = (): ClearAction => ({
    type: CLEAR,
})