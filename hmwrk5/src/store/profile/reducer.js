import * as types from './types'

const initialState = {
  visible: false,
}


export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.CHANGE_VISIBLE:
      return {
        ...state,
        visible: payload,
      }

    default:
      return state
  }
}
