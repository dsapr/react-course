import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList (props) {
  return (
    <ul className={classes.list}>
      {
        // 对象转数组
        props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))
      }
    </ul>
  )
}

export default MeetupList
