import React from "react";


export const BuyPage = (props) => {

  const componentMailBuy = props.props.componentMailBuy;
  const noSubmit = props.props.noSubmit;
  const {data} = props.props.props;


  return <div className="container padding">
    <div className="container padding">
          <form className="main__section-portfolio__form buy" onSubmit={noSubmit}>
            <h2 className="main__section-portfolio__tittle">Оставить заявку</h2>

            <ul className="main__section-portfolio__list">
              <li className="main__section-portfolio__item">
                <span className="main__section-portfolio__text">Ваше имя</span>
                <input className="main__section-portfolio__input"
                type="text" name="name" id="name"/>
              </li>

              <li className="main__section-portfolio__item">
                <span className="main__section-portfolio__text">Ваш телефон</span>
                <input className="main__section-portfolio__input"
                type="text" name="phone" id="phone"/>
              </li>

              <li className="main__section-portfolio__item">
                <span className="main__section-portfolio__text">Ваша почта</span>
                <input className="main__section-portfolio__input"
                type="text" name="mail" id="mail"/>
              </li>

              <li className="main__section-portfolio__item">
                <span className="main__section-portfolio__text">Тип сайта (корпоративный/SPA/Landing page/магазин)</span>
                <select className="main__section-portfolio__input select" id="type">
                  <option>Корпоративный</option>
                  <option>SPA</option>
                  <option>Landing page</option>
                  <option>Интернет магазин</option>
                </select>
              </li>
              <li className="main__section-portfolio__item">
              <span className="main__section-portfolio__text">Предпочитаемый вид связи</span>
                <select className="main__section-portfolio__input select" id="comunication">
                  <option>Почта</option>
                  <option>Телефон</option>
                  <option>Telegram</option>
                  <option>WhatsApp</option>
                </select>
              </li>

              <li className="main__section-portfolio__item">
                <input type="submit" className="input__buy" value="Отправить"
                onClick={()=>{
                  componentMailBuy($("#name").val(), $("#phone").val(), $("#mail").val(), $("#type").val(), $("#comunication").val());
                }}/>
              </li>
            </ul>
          </form>
          <p className="center black__color">
            {data}
          </p>
        </div>
  </div>;
}

