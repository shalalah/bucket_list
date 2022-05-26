import React from "react";
import Main from './Main';
import Detail from './Detail';


import { Route } from "react-router-dom";  		

  const App = () => {
    const [week, setWeek] = React.useState(['일', '월', '화', '수', '목', '금', '토']);
    return (
      <div className="App">
        
          <Route path="/" exact>
           <Main week={week}/> 
          </Route>          
          <Route path="/detail/:id" exact>
          <Detail week={week} />
        </Route>     
       
      </div>
    );
  }


export default App;