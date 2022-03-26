import { UserPorvider } from './Context/UserContext'
import Router from './router'


const App = () => {
  return (
    <UserPorvider>
      <div>
        <Router />
      </div>
    </UserPorvider>
  );
}

export default App