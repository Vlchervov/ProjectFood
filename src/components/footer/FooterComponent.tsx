import { useLocation } from "react-router";
import { Footer } from "./Footer.styled";

export const FooterComponent = () => {
  return (
    <>
      {useLocation().pathname === "/catalog" ? (
        <Footer>
          <div className="footer__section">
            <div className="footer__item footerPaymentMethods">
              <h4>Способы оплаты</h4>
            </div>
            <div className="footer__item footerPaymentCard">
              <picture>
                <img alt="Способ оплаты" src="https://storage.yandexcloud.net/ecomm-storage-dev/images/logoMasterCard-v2.png" />
                <img alt="Способ оплаты" src="https://storage.yandexcloud.net/ecomm-storage-dev/images/logoVisa-v2.png" />
                <img alt="Способ оплаты" src="https://storage.yandexcloud.net/ecomm-storage-dev/images/logoJcb-v2.png" />
                <img alt="Способ оплаты" src="https://storage.yandexcloud.net/ecomm-storage-dev/images/logoMir-v2.png" />
              </picture>
            </div>
            <div className="footer__item footerNav">
              <ul>
                <li>г. Новокузнецк,
                  пр-кт Н.С.Ермакова д 30</li>
                <li>+7(999)-999-99-99</li>
              </ul>
            </div>
          </div>
          <div className="footer__section">
            <div className="footer__item footerDelivery">
              <h4>Title</h4>
            </div>
            <div className="footer__item footerNav">
              <ul>
                <li>Доставка и оплата</li>
                <li>Публичная оферта</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="footer__section">
            <div className="footer__item footerContacts">
            </div>
          </div>
          <div className="footer__section">
            <div className="footer__item footerAppTitle">
              <a href="#">Заказывайте через приложение</a>
            </div>
            <div className="footerLogo">
              <div className="footer__itemLogo GoogleLogo">
                <a href="#">Google Play</a>
                <picture>
                  <img alt="GooglePlay" src="../img/google-play-5.svg" />
                </picture>
              </div>
              <div className="footer__itemLogo AppleLogo">
                <a href="#">AppStore</a>
                <picture>
                  <img alt="AppStore" src="../img/icons8-apple-logo.svg" />
                </picture>
              </div>
            </div>
            <div className="footer__item footerSocial">
              <a href="#">Мы в социальных сетях</a>
              <picture>
                <img alt="Telegram" src="../../img/Telegram.png" />
                <img alt="Whatsapp" src="../../img/Whatsapp.png" />
              </picture>
            </div>
            <div className="footer__item footerDeveloperCompanyName">
              <a href="#">
                Developer name
              </a>
            </div>
          </div>
        </Footer>
      ) : null}
    </>
  );
}