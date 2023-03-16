import "./_footer.scss";

export const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__item footerLogo">
          {/* <img src="../img/172f0794-4161-4e28-bbb8-b847954411d3.png"></img> */}
          #LOGO
        </div>
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
    </div>
  );
};
