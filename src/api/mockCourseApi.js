import delay from './delay';
import $ from 'jquery';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const categories = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/categories/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/categories/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/categories/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/categories/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/categories/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

class CourseApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

  // static saveCourse(course) {
  //   course = Object.assign({}, course); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }
  //
  //       if (course.id) {
  //         const existingCourseIndex = categories.findIndex(a => a.id == course.id);
  //         categories.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new categories in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         categories.push(course);
  //       }
  //
  //       resolve(course);
  //     }, delay);
  //   });
  // }
  //
  // static deleteCourse(courseId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = categories.findIndex(course => {
  //         course.courseId == courseId;
  //       });
  //       categories.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default CourseApi;
