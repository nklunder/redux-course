import React, { useState } from "react";
import { connect } from "react-redux";
import { addCourse } from "../actions";

const CourseListPage = ({ courses, dispatch }) => {
  const [courseName, setCourseName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse(courseName));
  };

  return courses.length === 0 ? (
    <div>
      <h1>Add your first course</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-course-input">Course name</label>
        <input
          id="first-course-input"
          type="text"
          value={courseName}
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
        />
        <button type="submit">Add course</button>
      </form>
    </div>
  ) : (
    <div>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.courseName}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps)(CourseListPage);
