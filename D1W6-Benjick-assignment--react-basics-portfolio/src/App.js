import React 			from "react";
import PortfolioContent from "./Components/PortfolioContent"
import PortfolioFixed  from "./Components/PortfolioFixed"

class App extends React.Component {

  render(){
    return (
    	 <div id="app-container">
    	 	<PortfolioFixed />
    	 	<PortfolioContent />
    	 </div>
      );
  }
}

export default App;