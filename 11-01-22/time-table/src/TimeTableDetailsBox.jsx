export default function TimeTableBox(props) {
    const attendance = props.attendance.attendance;
    console.log(attendance)
    props = props.subjectDetails;
    return (
        <div
            className="TimeTableDetails"
            style={{
                background: props.backgroundColor, color: props.subjectColor
                // background:"#444", color: "#eee"
            }}>
            <div className="TimeTableDetailsAttendance" style={{ background: attendance == 'p' ? "#33b433" : "#ff286f" }}>
                {attendance}
            </div>

            <div className="TimeTableDetailsSubject">{props.subject}</div>

            <div className="TimeTableDetailsOtherData">
                <div>{props.resource}</div>
                <div>{props.faculty}</div>
            </div>
        </div>
    )
}