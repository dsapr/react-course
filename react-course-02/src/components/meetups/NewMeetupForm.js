import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <lable htmlFor="title">Meetup Title</lable>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <lable htmlFor="image">Meetup Image</lable>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <lable htmlFor="address">Address</lable>
          <input type="text" required id="address" />
        </div>
      </form>
      <div className={classes.control}>
        <lable htmlFor="description">Description</lable>
        <textarea id="description" required rows="5"></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </Card>
  )
}

export default NewMeetupForm
