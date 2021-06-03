import React from "react";

import {MainPage} from "./mainPage.js";
import {PresentPage} from "./presentPage.js";
import {ServicePage} from "./servicePage.js";
import {PortfolioPage} from "./portfolioPage.js";
import {BuyPage} from "./buyPage.js";
import {ContactPage} from "./contactPage.js";

export const Main = (props) => {
  const {statemain,
    statepresent,
    stateservice,
    stateportfolio,
    statebuy,
    statecontacnt
  } = props.props;


if(statemain){
  return <div>
    <MainPage props={props}/>
  </div>
} else if(statepresent) {
  return <div>
    <PresentPage props={props}/>
  </div>
} else if (stateservice) {
  return <div>
    <ServicePage props={props}/>
  </div>
}  else if (stateportfolio) {
  return <PortfolioPage/>

}  else if (statebuy) {
  return <BuyPage props={props}/>

}  else if (statecontacnt) {
  return <ContactPage props={props}/>
}
}
