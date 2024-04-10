import {
  AuthSection,
  AuthorizationBody,
  AuthorizationHeader,
  AuthorizationWindow,
} from "./Auth.styled";
import { AuthorizationForm } from "./AuthForm/AuthorizationFormComponent";

export const AuthComponent = () => {
  return (
    <AuthSection>
      <AuthorizationWindow>
        <AuthorizationHeader></AuthorizationHeader>
        <AuthorizationBody>
          <AuthorizationForm />
        </AuthorizationBody>
        <div id="recaptcha-container" className="CAPTCHA"></div>
      </AuthorizationWindow>
    </AuthSection>
  );
};