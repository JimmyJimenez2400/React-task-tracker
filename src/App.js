import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const[tasks, setTasks] = useState([ 
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Appointment',
        day: 'Feb 6th at 1:30PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Doc Appointment',
        day: 'Feb 5th at 2:30PM',
        reminder: false,
    
    },
    ])
    
  return(
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

Header.defaultProps ={
  title: 'Task Tracker',
}
export default App;
