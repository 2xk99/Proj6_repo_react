function CourseCard({ name, instructor, status }) {
  return (
    <div className="course-card">
      <h2>{name}</h2>
      <p>Instructor: {instructor}</p>
      <p>
        Status: <span className="status">{status}</span>
      </p>
    </div>
  );
}

export default CourseCard;