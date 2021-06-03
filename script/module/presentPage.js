import React from "react";

export const PresentPage = (props) => {
  return <div>
    <section className="main__section-manadger padding">
      <h2 className="sr-only">Руководство</h2>

      <div className="container">
        <h2 className="main__section-manadger__title text-center">Руководство</h2>

        <ul className="main__section-manadger__list">
          <li className="main__section-manadger__item">
            <img className="main__section-manadger__image"
            src="image/сотрудники/I.png"/>
            <p className="main__section-manadger__text">
              Frontend разработчик <span
              className="name__firm-text fontWebDevelopment"
              ><br></br>&laquo;Web-development &#187;
              </span>
              <br/>
              Черепаха Дмитрий Вадимович
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
}
