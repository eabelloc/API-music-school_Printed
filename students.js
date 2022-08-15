const studentsURL = "http://localhost:8080/api/student/";

window.onload = () => {
  initStudents();
};

const initStudents = async () => {
  const students = await getStudents();
  mappedStudents(students);
};

const getStudents = async () => {
  const rawData = await fetch(studentsURL);
  const jsonData = await rawData.json();
  return jsonData;
};

const mappedStudents = (list) => {
    list.data.student.map((student) => {
        return printStudents ({name: student.name,
                            courses: getCourses(student.courses),
        })
})};
const getCourses = (courses) => {
    const courseList = []
    courses.forEach(course => {
        courseList.push(`${course.name}`)        
    });
    return courseList;
};

const printStudents = (student) => {
    const coursesContainer = document.querySelector('#students_container')
    coursesContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_container">
            <h3>${student.name}</h3>
            <h4>Course</h4>
            <p>${student.courses}</p>
        </div>
    </figure>
  `;
};