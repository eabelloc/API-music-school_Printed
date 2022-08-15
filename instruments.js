const instrumentsURL = "http://localhost:8080/api/instrument/";

window.onload = () => {
    initInstruments();
};

const initInstruments = async () => {
  const students = await getInstruments();
  mappedInstruments(students);
};

const getInstruments = async () => {
  const rawData = await fetch(instrumentsURL);
  const jsonData = await rawData.json();
  return jsonData;
};

const mappedInstruments = (list) => {
    list.data.instrument.map((instrument) => {
        return printInstruments ({name: instrument.name,
                                duration: instrument.duration,
                                courses: getCourses(instrument.courses),
        })
})};
const getCourses = (courses) => {
    const courseList = []
    courses.forEach(course => {
        courseList.push(`${course.name}: ${course.description}`)        
    });
    return courseList;
};

const printInstruments = (instrument) => {
    const instrumentsContainer = document.querySelector('#instruments_container')
    instrumentsContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_container">
            <h3>${instrument.name}</h3>
            <p>${instrument.duration}</p>
            <h4>Course</h4>
            <p>${instrument.courses}</p>
        </div>
    </figure>
  `;
};