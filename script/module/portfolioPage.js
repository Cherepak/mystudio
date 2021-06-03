
import React from "react";

export const PortfolioPage = () => {
  return <div className="container padding">
    <ul className="flex">
      <li className="item__portfolio">
        <a href="http://strahovkashebekino.ru/" target="_blank">
          <img className="image__portfolio" src="image/portfolio/strahovka.png" alt="Страховка автомобилей"/>
          <p className="text__portfolio">Страховка автомобилей</p>
        </a>
      </li>
    </ul>
  </div>;
}
