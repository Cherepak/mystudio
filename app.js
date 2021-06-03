
import React from "react";
import ReactDOM from "react-dom";
import {Main} from "./script/module/main"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      statemain: true,
      statepresent:false,
      stateservice:false,
      stateportfolio: false,
      statebuy:false,
      statecontacnt:false,

      servicePageDev: false,
      servicePageService:false,
      servicePageSeo:false,

      data:"Данные об отправке",
    }

    this.componentMainPage = this.componentMainPage.bind(this);
    this.componentPresentPage = this.componentPresentPage.bind(this);
    this.componentServicePage = this.componentServicePage.bind(this);

    this.componentServicePageDev = this.componentServicePageDev.bind(this);
    this.componentServicePageService = this.componentServicePageService.bind(this);
    this.componentServicePageSeo = this.componentServicePageSeo.bind(this);

    this.componentMailBuy = this.componentMailBuy.bind(this);
    this.componentConsultacia = this.componentConsultacia.bind(this);
  }

  render(){

    return (
      <div>
        <header className="header padding">
          <div className="container flex">
            <div className="header__wrapper--logo flex">
              <img className="logo" src="image/logo/logo.png" alt="логотип"/>
              <ul className="header__wrapper--logo-text">
                <li className="title-logo">&laquo;Web-development&#187;</li>
                <li className="logo-text">Всегда с Вами в новых проектах</li>
              </ul>
            </div>
            <nav className="navigation">
              <ul className="list flex">
                <li className="list__item">
                  <button className="list__item-link link" onClick={()=>{
                    this.componentMainPage();
                  }}>ГЛАВНАЯ</button>
                </li>
                <li className="list__item">
                  <button className="list__item-link link" onClick={()=>{
                    this.componentPresentPage();
                  }}>О КОМПАНИИ</button>
                </li>
                <li className="list__item">
                  <button className="list__item-link link" onClick={()=>{
                    this.componentServicePage();
                  }}>УСЛУГИ</button>
                </li>
                <li className="list__item">
                  <button className="list__item-link link"
                  onClick={()=>{
                    this.componentPortfolioPage();
                  }}>ПОРТФОЛИО</button>
                </li>
                <li className="list__item">
                  <button className="list__item-link link"
                  onClick={()=>{
                  this.componentBuyPage();
                  }}>ЗАКАЗАТЬ</button>
                </li>
                <li className="list__item">
                  <button className="list__item-link link"
                  onClick={()=>{
                  this.componentContactPage();
                  }}>КОНТАКТЫ</button>
                </li>
              </ul>
            </nav>

            <ul className=" header__wrapper-contactheader__list">
              <li className="header__list-item">
                <a className="header__link__contact link" href="tel:89779207740"> +7 (977)-920-77-40</a>
              </li>
              <li className="header__list-item">
                <a className="header__link__contact link" href="mailto:info.webdevru@yandex.ru">info.webdevru@yandex.ru</a>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <Main props={this.state}
          componentServicePageDev={this.componentServicePageDev}
          componentServicePageService  ={this.componentServicePageService}
          componentServicePageSeo  ={this.componentServicePageSeo}
          componentMailBuy= {this.componentMailBuy}
          noSubmit = {this.noSubmit}
          componentConsultacia = {this.componentConsultacia}
          />
        </main>

        <footer className="footer">
          <div className="container flex flex--footer footer__wrapper">
            <nav className="navigation">
              <ul className="footer__list">
                <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                    this.componentMainPage();
                  }}
                  >Главная</button>
                </li>
                <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                    this.componentPresentPage();
                  }}
                  >О компании</button>
                </li>
                <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                    this.componentServicePage();
                  }}
                  >Услуги</button>
                </li>
                <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                    this.componentPortfolioPage();
                  }}
                  >Портфолио</button>
                </li>
                <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                    this.componentBuyPage();
                  }}
                  >Заказать</button>
                </li>
                <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                    this.componentContactPage();
                  }}
                  >Контакты</button>
                </li>
                {/* <li className="footer__list__item">
                  <button className="footer__list__item-link link footer__link"
                  onClick={()=> {
                  }}
                  >Вакансии</button>
                </li> */}
              </ul>
            </nav>

            <ul className=" footer__wrapper-contactfooter__list">
              <li className="footer__list-item">
                <a className="footer__link__contact link" href="tel:89779207740" target="__blank">+7 (977)-920-77-40</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link__contact link" href="mailto:info.webdevru@yandex.ru" target="__blank">info.webdevru@yandex.ru</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link__contact link" href="https://yandex.ru/maps/213/moscow/house/ulitsa_vilisa_latsisa_33k1/Z04YcgdpTEMAQFtvfXR0eHRkZg==/?ll=37.409567%2C55.859873&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=17" target="__blank">г.Москва, ул.Вилиса Лациса 33к1</a>
              </li>
              <li className="footer__list-item">
                <ul className="social__list flex">
                  <li className="social__item">
                    <a className="social__link vk" href="https://vk.com/cherepahhhhhhhhhha" target="__blank">
                      <img className="social__image" src="image/icon/vk.png" alt="Вконтакте"/>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p className="text-center paragraf">@ 2021 Web-development </p>
        </footer>
      </div>
    )
  }

  noSubmit(event) {
    event.preventDefault();
  }


  componentConsultacia(name, phone, mail) {

    const formData = new FormData();
    formData.append("name",name);
    formData.append("phone",phone);
    formData.append("mail",mail);

    fetch(`/server.php`, {
      method:"POST",
      mode: "cors",
      body: formData,
    })
    .then((result)=>{
      return result.json();
    })
    .then((data)=> {
      console.log(data["text"]);

      this.setState(state => ({
        data: data["text"]
      }))
    })
  }

  componentMailBuy(name, phone, mail,type,comunication) {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("phone",phone);
    formData.append("mail",mail);
    formData.append("type",type);
    formData.append("comunication",comunication);

    fetch(`/server.php`, {
      method:"POST",
      mode: "cors",
      body: formData,

    })
    .then((result)=> {
      return result.json();
    })
    .then((data)=>{
      this.setState(state=> ({
        data: data["text"],
      }))
    })
  }

  componentMainPage() {
    this.setState(state => ({
      statemain: true,
      statepresent:false,
      stateservice:false,
      stateportfolio:false,
      statebuy:false,
      statecontacnt:false,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  };

  componentPresentPage() {
    this.setState(state => ({
      statemain: false,
      statepresent:true,
      stateservice:false,
      stateportfolio:false,
      statebuy:false,
      statecontacnt:false,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  };

  componentServicePage() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:true,
      stateportfolio:false,
      statebuy:false,
      statecontacnt:false,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  };


  componentPortfolioPage() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:false,
      stateportfolio:true,
      statebuy:false,
      statecontacnt:false,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  }

  componentBuyPage() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:false,
      stateportfolio:false,
      statebuy:true,
      statecontacnt:false,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  }

  componentContactPage() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:false,
      stateportfolio:false,
      statebuy:false,
      statecontacnt:true,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  }

  componentServicePageDev() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:true,

      servicePageDev: true,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  }

  componentServicePageService() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:true,

      servicePageDev: false,
      servicePageService:true,
      servicePageAdvertising:false,
      servicePageSeo:false,
    }));
  }

  componentServicePageSeo() {
    this.setState(state => ({
      statemain: false,
      statepresent:false,
      stateservice:true,

      servicePageDev: false,
      servicePageService:false,
      servicePageAdvertising:false,
      servicePageSeo:true,
    }));
  }

}

ReactDOM.render(
  <App/>,document.getElementById("root")
);
