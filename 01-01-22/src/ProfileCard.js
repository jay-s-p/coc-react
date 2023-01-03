import Table from 'react-bootstrap/Table';
import Student from './Student'

export function ProfileCard(props) {
  const student = props.student;
  const percentage = student.getResultPercentage();
  return (
    <div className="card mb-4 rounded-4 ">
      <div className="card-body text-center">
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} /> */}
        <h5 className="mt-2 mb-4 fs-2">{student.getName()}</h5>
        <div class="table-responsive-sm">
          <Table borderless className='text-start'>
            <tbody>
              <tr>
                <td>Birthdate</td><td className='d-none d-sm-block'>:</td>
                <td>{student.getBirthdate()}</td>
              </tr>
              <tr>
                <td>Gender</td><td className='d-none d-sm-block'>:</td>
                <td>{student.getGender()}</td>
              </tr>
              <tr>
                <td>Age</td><td className='d-none d-sm-block'>:</td>
                <td>{student.getAge()}</td>
              </tr>
              <tr>
                <td>Enrollment</td><td className='d-none d-sm-block'>:</td>
                <td>{student.getEnrollment()}</td>
              </tr>
              <tr>
                <td>Program</td><td className='d-none d-sm-block'>:</td>
                <td>{student.getProgram()}</td>
              </tr>
              <tr>
                <td>Semester</td><td className='d-none d-sm-block'>:</td>
                <td>{student.getSemester()}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className='rounded-3 overflow-hidden' style={{border:"1px solid"}}>
          <div className='table-responsive-sm border-0' >
            <Table bordered hover className='m-0 '>
              <thead>
                <tr className='mt-1 table-dark'>
                  <th colSpan={2}>Result</th>
                </tr>
                <tr className='table-secondary'>
                  <th>Subjects</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {student.getSubjects().map((subject, index) => {
                  return <tr><td>{subject}</td><td>{student.getMarks()[index]}</td></tr>
                })}
              </tbody>
              <tfoot>
                <tr className={percentage < 30 ? "table-danger" : "table-success"}><td>Percentage</td><td>{percentage}%</td></tr>
              </tfoot>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
