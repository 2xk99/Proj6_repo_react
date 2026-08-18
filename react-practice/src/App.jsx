import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import CourseList from "./components/CourseList";

const courses = [
  {
    id: 1,
    name: "Artificial Intelligence",
    instructor: "Dr. Ahmad",
    status: "Active",
  },
  {
    id: 2,
    name: "Machine Learning",
    instructor: "Dr. Sara",
    status: "Active",
  },
  {
    id: 3,
    name: "Web Development",
    instructor: "Dr. Omar",
    status: "Completed",
  },
  {
    id: 4,
    name: "Database Systems",
    instructor: "Dr. Lina",
    status: "Active",
  },
];

function App() {
  const [showCourses, setShowCourses] = useState(true);

  return (
  <div className="app">
    <Header />

    <main className="container">
  <p className="course-count">
    Total Courses: {courses.length}
  </p>

  <button
    className="toggle-button"
    onClick={() => setShowCourses(!showCourses)}
  >
    {showCourses ? "Hide Courses" : "Show Courses"}
  </button>

  {showCourses && <CourseList courses={courses} />}
</main>
  </div>
);
}

export default App;