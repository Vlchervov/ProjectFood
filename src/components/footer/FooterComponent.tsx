import { useLocation } from "react-router";
import { Footer } from "./Footer.styled";

export const FooterComponent = () => {
  return (
    <>
      {useLocation().pathname === "/catalog" ? (
        <Footer>
          <div className="footer__section">
            <div className="footer__item footerLogo">#LOGO</div>
          </div>
          <div className="footer__section">
            <div className="footer__item footerDelivery">
              <a>Design by Vladislav Chervov</a>
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
            <div className="footer__item footerAppTitle">
              <a>Заказывайте через приложение</a>
            </div>
            <div className="footerLogo">
              <a className="footer__itemLogo GoogleLogo"> Google Play</a>
              <a className="footer__itemLogo AppleLogo"> AppStore</a>
            </div>
          </div>
        </Footer>
      ) : null}
    </>
  );
};