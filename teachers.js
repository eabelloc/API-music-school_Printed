const teachersURL = "http://localhost:8080/api/teacher/";

window.onload = () => {
    initTeachers();
};

const initTeachers = async () => {
  const teachers = await getTeachers();
  mappedTeachers(teachers);
};

const getTeachers = async () => {
  const rawData = await fetch(teachersURL);
  const jsonData = await rawData.json();
  return jsonData;
};

const mappedTeachers = (list) => {
    list.data.teacher.map((teacher) => {
        return printTeachers ({name: teacher.name,
                                instruments: getInstruments(teacher.instruments),
        })
})};
const getInstruments = (instruments) => {
    const instrumentsList = []
    instruments.forEach(instrument => {
        instrumentsList.push(`${instrument.name}: ${instrument.duration}`)        
    });
    return instrumentsList;
};

const printTeachers = (teacher) => {
    const teachersContainer = document.querySelector('#teachers_container')
    teachersContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_container">
            <h3>${teacher.name}</h3>
            <h4>Instruments</h4>
            <p>${teacher.instruments.join(', ')}</p>
        </div>
    </figure>
  `;
};