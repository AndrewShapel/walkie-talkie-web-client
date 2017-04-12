import Users from 'users';

const initialState = new Users();

export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}