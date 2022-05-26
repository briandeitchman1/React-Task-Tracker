import react from "react"
import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        // stops from trying to submit to a new page
        e.preventDefault();
        if (!text) {
            alert("Please add text")
            return;
        }
        onAdd({ text, day, reminder });
        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form" action="" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Day and Time</label>
                <input type="text" placeholder="Add Day and Time" value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask