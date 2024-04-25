import {
  AuthSection,
  AuthorizationBody,
  AuthorizationHeader,
  AuthorizationWindow,
} from "./Auth.styled";
import { CaptchaVerify } from "./CaptchaVerify/CaptchaVerify";

export const AuthComponent = () => {
  return (
    <AuthSection>
      <AuthorizationWindow>
        <AuthorizationHeader></AuthorizationHeader>
        <AuthorizationBody>
          <CaptchaVerify />
        </AuthorizationBody>
        <div id="recaptcha-container" className="CAPTCHA"></div>
      </AuthorizationWindow>
    </AuthSection>
  );
};