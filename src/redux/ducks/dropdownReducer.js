export const openDropdown = () => {
  return {
    type: 'SET_TRUE',
  }
}

export const closeDropdown = () => {
  return {
    type: 'SET_FALSE',
  }
}

const initialState = {
  open: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRUE':
      return {
        open: true,
      }
    case 'SET_FALSE':
      return {
        open: false,
      }
    default:
      return state
  }
}