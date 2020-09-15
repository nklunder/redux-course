import produce from "immer";
import { ADD_COURSE_SUCCESS } from "./actions";

const initialState = {
  courses: [],
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE_SUCCESS:
      draft.courses.push(action.payload);
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
