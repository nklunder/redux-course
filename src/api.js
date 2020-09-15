export const createCourse = (courseName) => {
  return postData("http://localhost:8080/courses", { courseName });
};

function postData(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}