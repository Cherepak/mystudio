
import React from "react";
import { ResultPortfolio } from "./portfolioPage/resultportfolio";

export const PortfolioPage = (props) => {

  const ComponentShowInPortfolioStroitelstvo = props.props.ComponentShowInPortfolioStroitelstvo;
  const ComponentShowInPortfolioStrahovanie =  props.props.ComponentShowInPortfolioStrahovanie;
  const ComponentShowInPortfolioButy = props.props.ComponentShowInPortfolioButy;
  const ComponentShowInPortfolioZdorovie = props.props.ComponentShowInPortfolioZdorovie;
  const ComponentShowInPortfolioManagment = props.props.omponentShowInPortfolioManagment;

  return <div className="container padding flex">
    <ul className="list-portfolio">
      <li className="list-portfolio__item">
        <button  className="list-portfolio__button botton-portfolio" onClick={()=> {
          ComponentShowInPortfolioStroitelstvo();
        }} >Строительство
        </button>
      </li>
      <li className="list-portfolio__item">
        <button  className="list-portfolio__button botton-portfolio" onClick={()=> {
          ComponentShowInPortfolioStrahovanie();
        }}>Страхование
        </button>
      </li>
      <li className="list-portfolio__item">
        <button  className="list-portfolio__button botton-portfolio" onClick={()=> {
          ComponentShowInPortfolioButy();
        }}>Красота
        </button>
      </li>
      <li className="list-portfolio__item">
        <button  className="list-portfolio__button botton-portfolio" onClick={()=> {
          ComponentShowInPortfolioZdorovie();
        }}>Здоровье
        </button>
      </li>
      {/* <li className="list-portfolio__item">
        <button  className="list-portfolio__button botton-portfolio" onClick={()=> {
          ComponentShowInPortfolioManagment();
        }}>Система управления фирмой
        </button>
      </li> */}
    </ul>

    <div>
      <ResultPortfolio props={props}/>
    </div>
  </div>;
}
