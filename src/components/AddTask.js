import { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day and time.."
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="sumbit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
