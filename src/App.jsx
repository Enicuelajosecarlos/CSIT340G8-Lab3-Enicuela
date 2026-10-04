const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => (
  <p>{part.name} <strong>{part.units} units</strong></p>
)

const Content = ({ course }) => (
  <div>
    <Part part={course.parts[0]} />
    <Part part={course.parts[1]} />
    <Part part={course.parts[2]} />
  </div>
)

const Total = ({ course }) => (
  <p>
    Total number of units:{' '}
    {course.parts[0].units + course.parts[1].units + course.parts[2].units}
  </p>
)

const Footer = ({ fullName, courseCode, section }) => (
  <footer style={{ marginTop: 32, paddingTop: 12, borderTop: '1px solid #ccc', color: '#555' }}>
    {fullName} - {courseCode} - {section}
  </footer>
)

const App = () => {
  const course = {
    name: 'Bachelor of Science in Information Technology',
    parts: [
      { name: 'Data Structures and Algorithms', units: 3 },
      { name: 'Web Systems and Technologies', units: 3 },
      { name: 'Discrete Mathematics', units: 3 },
    ],
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'left' }}>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer fullName="Jose Carlos Z. Enicuela" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App