// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (index, item) => {
    return {type: types.REMOVE, payload: {index,item}}
  }
}

// Initial state of the store
const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  done : [],
  
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const {todos, done} = state
  const {type, payload} = action

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos],
        done: [payload, ...done],
      
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo) => todo !== payload.index),
        done: [payload.item, ...done],
      }
    }
  }

  return state
}
