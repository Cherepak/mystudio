import React from "react";

export const MainPage = (props) => {
  const componentServicePageDev = props.props.componentServicePageDev;
  const componentServicePageService = props.props.componentServicePageService;
  const componentServicePageSeo = props.props.componentServicePageSeo;
  const componentConsultacia = props.props.componentConsultacia;
  const noSubmit = props.props.noSubmit;

  const {data} = props.props.props;
  return <div>
    <section className="main__section-service padding">
      <h1 className="text-center title">Студия <span className="title__span txt anim-text-flow">
          Web-development
        </span>
      </h1>
      <div className="container padding flex">
        <div className="main__section-service__wrap">
          <ul className="main__section-service__wrap-list">
            <li className="main__section-service__item">
              <button className="main__section-service__wrap-link link"
              onClick={()=>{
                componentServicePageDev();
              }}>Разработка сайтов
              </button>
            </li>
            <li className="main__section-service__item">
              <button className="main__section-service__wrap-link link"
              onClick={()=>{
                componentServicePageService();
              }}>Обслуживание и развитие сайтов
              </button>
            </li>
            <li className="main__section-service__item">
              <button className="main__section-service__wrap-link link"
              onClick={()=>{
                componentServicePageSeo();
              }}>Разработка одностраничных приложений (SPA)
              </button>
            </li>
          </ul>
        </div>
        <div className="emblem">
          <div className="emblem__wrapper">
            <span className="block1 block grey"></span>
            <span className="block2 block white"></span>
            <span className="block3 block blue"></span>
            <span className="block4 block purple"></span>
          </div>
          <div className="emblem__wrapper">
            <span className="block5 block purple"></span>
            <span className="block6 block blue"></span>
            <span className="block7 block white"></span>
            <span className="block8 block grey"></span>
          </div>
        </div>
      </div>
    </section>

    <section className="main__section-portfolio padding">
        <h2 className="sr-only">Оставить заявку</h2>
        <div className="container">
          <form className="main__section-portfolio__form" onSubmit={noSubmit}>
            <h2 className="zaiavka__title">Оставить заявку</h2>

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
                <input className="effect_button main__section-portfolio__input"
                type="submit" value="Отправить" onClick={()=>{
                  componentConsultacia($("#name").val(), $("#phone").val(), $("#mail").val());
                }}/>
              </li>
            </ul>
          </form>

          <p className="center black__color">{data}</p>
        </div>
    </section>

    <section className="main__section-general">
      <h2 className="sr-only">Чем занимаемся</h2>

      <div className="container padding">
        <h2 className="card__text">Чем мы занимаемся</h2>

        <p>
          Компания <span className="name__firm-text">
            &laquo;Web-development &#187;
          </span> была создана в 2021 году.
          Наша компания делает основной упор не только на создание
          сайтов, но и на оказание максимальной поддержки клиентам.
          <br/>
          Некторое время мы занимались только созданием и поддержкой сайтов,
          но на сегодняшний день мы можем похвастаться такими проектами, как
          создание систем управления компанией, более известными под аббревиатурой "CRM" системы.
        </p>

        <ul className="main__section-general__wrap-list flex">
          <li className="card">
            <button className="card__wrapper-link"
            onClick={()=>{
              componentServicePageDev();
            }}>
              <div className="card__front card__wrapper">
                <h2 className="card__text">Разработка сайтов c 0</h2>
                <p>
                  Все этапы разработки:
                  <br/>
                  дизайн
                  <br/>-&gt; верстка и разработка функционала
                  <br/>-&gt;
                  размещение (подбор и приобретение домена и хостинга)
                  <br/>-&gt;
                  реклама
                </p>
              </div>
              <div className="card__back card__wrapper">
                <h2 className="card__text back__text">Разработка сайтов c 0</h2>
                <img src="image/icon/sait.png" alt="Разработка сайтов c 0"/>
              </div>
            </button>
          </li>

          <li className="card">
            <button className="card__wrapper-link"
            onClick={()=>{
              componentServicePageService();
            }}>
              <div className="card__front card__wrapper">
                <h2 className="card__text">Обслуживание и развитие сайтов</h2>
                <ul className="main__section-general__item__list">
                  <li>обновление контента</li>
                  <li>добавление блоков</li>
                  <li>создание дополнительных страниц</li>
                  <li>добавление виджетов (карты, средства связи и т.д.)</li>
                </ul>
              </div>
              <div className="card__back card__wrapper">
                <h2 className="card__text back__text">Обслуживание и развитие сайтов</h2>
                <img src="image/icon/dorabotka.png"
                alt="Обслуживание и развитие сайтов"/>
              </div>
            </button>
          </li>

          <li className="card">
            <button className="card__wrapper-link"
            onClick={()=>{
              componentServicePageSeo();
            }}>
              <div className="card__front card__wrapper">
                <h2 className="card__text">Разработка SPA</h2>
                <p>
                  Разработка, настройка и доработка одностраничных веб приложений.
                </p>
              </div>
              <div className="card__back card__wrapper">
                <h2 className="card__text back__text">
                  Разработка одностраничных приложений
                </h2>
                <img src="image/icon/seo.png"
                alt="Продвижение и реклама сайтов"/>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </section>
  </div>
}
