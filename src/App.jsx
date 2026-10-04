const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <p>
    Number of units{' '}
    {props.parts[0].units + props.parts[1].units + props.parts[2].units}
  </p>
)

const Footer = ({ fullName, courseCode, section }) => (
  <footer style={{ marginTop: 32, paddingTop: 12, borderTop: '1px solid #ccc', color: '#555' }}>
    {fullName} - {courseCode} - {section}
  </footer>
)

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const parts = [
    { name: 'Data Structures and Algorithms', units: 3 },
    { name: 'Web Systems and Technologies', units: 3 },
    { name: 'Discrete Mathematics', units: 3 },
  ]

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'left' }}>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName="Jose Carlos Z. Enicuela" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App