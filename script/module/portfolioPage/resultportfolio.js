
import React from "react";

import { Stroitelstvo } from "./stoitelstvo";
import { Strahovka } from "./strahovka";
import { Buty } from "./buty";
import { Zdorovie } from "./zdorovie";
import {Crm} from "./managment"

export const ResultPortfolio = (props) =>  {

  const {stateStroitelstvo,stateStrahovanie,stateButy,stateZdorovie, crm} = props.props.props.props;

  if(stateStroitelstvo) {
    return <Stroitelstvo/> ;

  } else if(stateStrahovanie) {
    return <Strahovka/>;
  }

  else if(stateButy) {
    return <Buty/>;
  }

  else if(stateZdorovie) {
    return <Zdorovie/>;

  } else if(crm) {
    return <Crm/>;

  }else {
    return <div></div>
  }
}
