import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          name={course.name}
          instructor={course.instructor}
          status={course.status}
        />
      ))}
    </div>
  );
}

export default CourseList;