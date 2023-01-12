import dataAttendance from "./dataAttendance.json"
import TimeTableDetailsBox from "./TimeTableDetailsBox"

export default function TimeTableBox(props) {
    return (
        <div className="TimeTableBox">
            <h2>{props.data.day}</h2>
            {props.data.schedule.map((subjectDetails, i) => {
                return <TimeTableDetailsBox attendance={dataAttendance[i].schedule[i]} subjectDetails={subjectDetails} />
            })}
        </div>
    )
}