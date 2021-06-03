
import React from "react";

export const ContactPage = () =>{
  return <div className="container padding flex">
    <ul className="contactPage__list">
      <li className="contact__item">
        <a className="contact-link phone"
        href="tel:89779207740"
        target="_blank">+7 (977) 920-77-40</a>
      </li>
      <li className="contact__item">
        <a className="contact-link mail"
        href="mailto:info.webdevru@yandex.ru"
        target="_blank">info.webdevru@yandex.ru</a>
      </li>
      <li className="contact__item">
        <p className="contact-link whatsapp">
        Начать чат в <a className="contact-link__massanger"
        href="https://wa.me/79779207740"
        target="_blank">WhatsApp</a>
        </p>
      </li>
    </ul>

    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A94fb25bdf6b39c9901b1c8d6632d3584c12d3d4f70a3631a066be8f2efb2028b&amp;source=constructor" width="664" height="400" frameBorder="0"></iframe>
  </div>;
}
