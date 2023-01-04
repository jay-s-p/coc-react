import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProfileCard } from './ProfileCard';
import Student from './Student'

const students = [
  new Student("Jay Parmar", "11-11-2002", "Male", "211002028", "B.Tech", "6th", [".Net", "Python", "MCI"], [29, 29, 29]),
  new Student("Harshad Sorthiya", "01-04-2003", "Male", "211002034", "B.Tech", "6th", [".Net", "Python", "MCI"], [77, 77, 77]),
  new Student("Dhruv Chauhan", "27-02-2002", "Male", "211002002", "B.Tech", "6th", [".Net", "Python", "MCI"], [98, 98, 98]),
  new Student("Om Ratneshwar", "18-11-2002", "Male", "211002030", "B.Tech", "6th", [".Net", "Python", "MCI"], [86, 86, 86]),
  new Student("Mohit Parmar", "21-05-2002", "Male", "211002029", "B.Tech", "6th", [".Net", "Python", "MCI"], [98, 98, 98]),
  new Student("Tathya Shukla", "30-12-2000", "Male", "211002032", "B.Tech", "6th", [".Net", "Python", "MCI"], [63, 63, 63]),
  new Student("Chaitali Joshi", "12-12-2002", "Female", "211002013", "B.Tech", "6th", [".Net", "Python", "MCI"], [89, 89, 89]),
]
let i = 0;

console.log(students);

function App() {
  return (
    <div style={{ background: "#00000000", width: "100%", height: "100%", minHeight: "100vh" }}>
      <Container>
        <div style={{ height: "5em", width: "100%" }}></div>
        <Row>
          {
            students.map((student) => {
              return (
                <Col xxl="3" lg="4" md="6">
                  <ProfileCard student={student} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
