import { createCourse } from "./api";

export const ADD_COURSE_BEGIN = "ADD_COURSE_BEGIN";
export const ADD_COURSE_SUCCESS = "ADD_COURSE_SUCCESS";
export const ADD_COURSE_ERROR = "ADD_COURSE_ERROR";

export const addCourse = (courseName) => {
  return (dispatch) => {
    dispatch({ type: ADD_COURSE_BEGIN });
    createCourse(courseName)
      .then((course) => {
        console.log(courseName)
        dispatch({ type: ADD_COURSE_SUCCESS, payload: course });
      })
      .catch((error) => {
        dispatch({ type: ADD_COURSE_ERROR, error });
      });
  };
};
