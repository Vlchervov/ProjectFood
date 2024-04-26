import { useLocation } from "react-router";
import { Footer } from "./Footer.styled";

export const FooterComponent = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/catalog" &&
        <Footer>
          <div className="footer__wrapperSocialSection">
            <div className="footer__section">
              <div className="footer__item footerSocial">
                <a href="/#">Telegram</a>
                <picture>
                  <img alt="Telegram" src="../../img/Telegram.png" />
                </picture>
              </div>
              <div className="footer__item footerSocial">
                <a href="/#">VKонтакте</a>
                <picture>
                  <img alt="Telegram" src="../../img/VK_Compact_Logo.svg" />
                </picture>
              </div>
            </div>
          </div>
        </Footer>
      }
    </>
  );
}