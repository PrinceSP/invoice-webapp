import {TopBar,SideBar} from './components'
import './index.css'

const App = ()=> {
  return (
    <div>
      <TopBar profile={true}/>
      <div className="container">
        <SideBar/>
        <div className="others">
          others
        </div>
      </div>
    </div>
  );
}

export default App;
