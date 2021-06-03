import React from "react";

export const ServicePage = (props) => {

  const contentservicePageDev =
  <div className="servicePageDev">
      <h1 className="servicePageDev__title">Какие сайты мы делаем?</h1>
      <ul className="servicePageDev__list">
        <li className="servicePageDev__item">
          <article className="servicePageDev__article flex">
            <h2 className="sr-only">Landing page</h2>
            <div className="servicePageDev__item-wrap">
              <h2 className="">Landing page</h2>
              <p>
              Веб-страница, основной задачей которой является
              сбор контактных данных целевой аудитории.
              Используется для усиления эффективности рекламы,
              увеличения аудитории.
              </p>
            </div>
            <img className="servicePageDev__image"
            src="image/1.jpg"/>
          </article>
        </li>
        <li className="servicePageDev__item">
          <article className="servicePageDev__article flex">
            <h2 className="sr-only">Корпоративный сайт</h2>
            <div className="servicePageDev__item-wrap">
              <h2>Корпоративный сайт</h2>
              <p>
                На корпоративных сайтах размещают подробную информацию о компании: описание услуг,
                сервисов, продуктов, открытых вакансий.
              </p>
            </div>
            <img className="servicePageDev__image"
            src="image/4.jpg"/>
          </article>
        </li>
        <li className="servicePageDev__item">
          <article className="servicePageDev__article flex">
            <h2 className="sr-only">Интернет порталы</h2>
            <div className="servicePageDev__item-wrap">
              <h2>Интернет порталы</h2>
              <p>
                Ресурсы, предоставляющие пользователю
                большое количество тематической
                информации.
              </p>
            </div>
            <img className="servicePageDev__image"
            src="image/2.jpg"/>
          </article>
        </li>
        <li className="servicePageDev__item">
          <article className="servicePageDev__article flex">
            <h2 className="sr-only">Интернет магазин</h2>
            <div className="servicePageDev__item-wrap">
              <h2>Интернет магазин</h2>
              <p>
                Решения, позволяющие
                торговать различными товарами.
              </p>
            </div>
            <img className="servicePageDev__image"
            src="image/3.jpg"/>
          </article>
        </li>
      </ul>
    </div>;

  const contentservicePageService =
  <div>
    <ul>
      <li  className="servicePageService__item">
        <article className="flex">
          <img className="servicePageService__image"
          src="image/service/verstka.png"/>
          <div className="servicePageService__wrap">
            <h2>Верстка контента.</h2>
            <p>
              Добавление, размещение, изменение материалов заказчика.
            </p>
          </div>
        </article>
      </li>

      <li  className="servicePageService__item">
        <article className="flex">
          <img className="servicePageService__image"
          src="image/service/function.png"/>
          <div className="servicePageService__wrap">
            <h2>Добавление и создание <br/>
            функциональных модулей.
            </h2>
            <p>
              Добавление функционала на сайте и сервере.
            </p>
          </div>
        </article>
      </li>

      <li className="servicePageService__item">
        <article className="flex">
          <img className="servicePageService__image"
          src="image/service/server.png"/>
          <div className="servicePageService__wrap">
            <h2>Административная поддержка <br/> и работа с базой данных.</h2>
            <p>
              Работа с хостингом (добавление, удаление файлов).<br/>
              Добавление информации в базу данных, импорт <br/>и экспорт данных, создание
              структуры базы данных.
            </p>
          </div>
        </article>
      </li>
    </ul>
  </div>;

  const contentservicePageSeo =
  <article>
    <div className="flex contentservicePageSeo__wrapper">
      <div>
        <h2>Single page application</h2>
        <p>
        Это веб-приложение, работающее на одной странице.<br/>
        Оно подгружает все необходимые javascript и css файлы<br/>
        при первой загрузке страницы, а затем все общение между<br/>
        клиентом и сервером сводится к минимуму. Т.е. при таком<br/>
        подходе большая часть работы сайта производится <br/>
        на стороне клиента
        </p>
      </div>
      <img className="servicePageSeo__image" src="image/seo/seo.png"/>
    </div>
    <h3 className="contentservicePageSeo__tittle">Плюсы SPA</h3>
    <ul>
      <li className="flex servicePageSeo__item">
        <h4 className="servicePageSeo__item__title">01</h4>
        <p className="servicePageSeo__item__text">
          Поддержка большого количества устройств. <br/>
          В отличие от стандартного подхода, <br/>
          SPA приложения работают как на станционарных компьютерах, <br/>
          так и на мобильных устройствах одинаково хорошо. <br/>
          Таким образом, вы можете создать одно приложение и быть уверены, <br/>
          что оно не будет тормозить и будет прекрасно работать даже на <br/>
          не очень мощных устройствах.
        </p>
      </li>
      <li className="flex servicePageSeo__item">
        <h4 className="servicePageSeo__item__title">02</h4>
        <p className="servicePageSeo__item__text">
        Мощный UX. В приложениях, основанных на таком подходе,<br/>
        намного проще хранить различную информацию, управлять <br/>
        представлением сайта, анимациями. Также, поскольку рабочая <br/>
        страница всего одна, написать красивый пользовательский <br/>
        интерфейс не составит труда.
        </p>
      </li>
      <li className="flex servicePageSeo__item">
        <h4 className="servicePageSeo__item__title">03</h4>
        <p className="servicePageSeo__item__text">
        Высокая производительность. <br/>
        В обычных сайтах очень часто можно встретить загрузку <br/>
        одного и того же содержимого. Например, шапка сайта, футер, <br/>
        меню и другие элементы, которые не меняются от страницы к странице, <br/>
        тем не менее, каждый раз загружаются с сервера. <br/>
        С использованием SPA подхода такой проблемы просто не будет, <br/>
        т.к. контент будет подгружаться по мере необходимости, <br/>
        что значительно повысит скорость работы приложения.
        </p>
      </li>
    </ul>
  </article>;


  function ServicePageContant(props) {
  const {
    servicePageDev,
    servicePageService,
    servicePageSeo
  } = props.props.props.props;

  if(servicePageDev) {
    return contentservicePageDev;

  } else if (servicePageService) {
    return contentservicePageService;

  } else if (servicePageSeo) {
    return contentservicePageSeo;

  } else {
    return contentservicePageDev;
  }

}
  let componentServicePageDev = props.props.componentServicePageDev;
  let componentServicePageService = props.props.componentServicePageService;
  let componentServicePageSeo = props.props.componentServicePageSeo;

 return <div className="flex container padding servicePage">

  <ul className="servicePage__list">
    <li className="servicePage__item">
      <button className="servicePage__button link"
      onClick={()=>{
        componentServicePageDev();
      }}>Разработка сайтов</button>
    </li>
    <li className="servicePage__item">
      <button className="servicePage__button link"
      onClick={()=>{
        componentServicePageService();
      }}>Обслуживание и развитие сайтов</button>
    </li>
    <li className="servicePage__item">
      <button className="servicePage__button link"
      onClick={()=>{
        componentServicePageSeo();
      }}>Разработка одностраничных приложений (SPA)</button>
    </li>
  </ul>
  <div className="servicePage__wrapper"><ServicePageContant props={props}/></div>
 </div>
}
