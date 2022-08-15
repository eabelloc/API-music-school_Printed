const coursesURL = "http://localhost:8080/api/course/";

window.onload = () => {
  initCourses();
};

const initCourses = async () => {
  const courses = await getCourses();
  mappedCourses(courses);
};

const getCourses = async () => {
  const rawData = await fetch(coursesURL);
  const jsonData = await rawData.json();
  return jsonData;
};

const mappedCourses = (list) => {
    list.data.courses.map((course) => {
        return printCourses ({name: course.name,
                            description: course.description,
                            instruments: getInstruments(course.instruments),
                            students: getStudents(course.students),
        })
})};
const getInstruments = (instruments) => {
    const instrumentsList = []
    instruments.forEach(instrument => {
        instrumentsList.push(`${instrument.name}: ${instrument.duration}`)        
    });
    return instrumentsList;
};
const getStudents = (students) => {
    const studentsList = []
    students.forEach(student => {
        studentsList.push(`${student.name}`)        
    });
    return studentsList;
};

const printCourses = (course) => {
    const coursesContainer = document.querySelector('#courses_container')
    coursesContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_container">
            <h3>${course.name}</h3>
            <h4>Description:</h4>
            <p>${course.description}</p>
            <h4>Instruments: ${course.instruments.join('/')}</h4>
            <h4>Students: ${course.students.join(', ')}</h4>
        </div>
    </figure>
  `;
};