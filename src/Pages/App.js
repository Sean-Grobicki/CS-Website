import Home from './Home';
import Pickems from './Pickems';
import Rankings from './Rankings';
import Teams from './Teams';
import {Routes, Route} from 'react-router-dom';
import global from '../Stylesheets/global.module.css';



function App() {
  return (
    <div className={global.container}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Pickems" element={<Pickems/>}/>
            <Route path="Rankings" element={<Rankings/>}/>
            <Route path="Teams" element={<Teams/>}/>
         </Routes>
    </div>
  );
}

export default App;