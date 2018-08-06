import React 		from "react";
import ContactInfo 	from "./ContactInfo"
import Summary 		from "./Summary"
import Header		from "./Header"

class PortfolioContent extends React.Component{
	render(){
		return(
				<div class="portfolio-content">
				<Header />
				<Summary />
				<ContactInfo />
          		</div>

		);
	}
}

export default PortfolioContent