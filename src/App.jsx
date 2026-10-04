const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.units}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => <p>Number of units {props.total}</p>

const Footer = ({ fullName, courseCode, section }) => (
  <footer style={{ marginTop: 32, paddingTop: 12, borderTop: '1px solid #ccc', color: '#555' }}>
    {fullName} - {courseCode} - {section}
  </footer>
)

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = { name: 'Data Structures and Algorithms', units: 3 }
  const part2 = { name: 'Web Systems and Technologies', units: 3 }
  const part3 = { name: 'Discrete Mathematics', units: 3 }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'left' }}>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer fullName="Jose Carlos Z. Enicuela" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App