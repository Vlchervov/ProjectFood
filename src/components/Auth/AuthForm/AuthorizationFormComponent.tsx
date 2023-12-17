import { useState } from "react";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import ru from "react-phone-input-2/lang/ru.json";
import { auth } from "../../../firebase.config";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { useLocation, useNavigate } from "react-router";

interface IUser {
  user: any,
}

export const AuthorizationForm = () => {
  const [otpState, setOtpState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  const [checked, setIsChecked] = useState(false)
  const { signin } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/profile";

  function onCapthVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            onSignUp();
          },
          // "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function onSignUp() {
    onCapthVerify();
    const appVerifier = window.recaptchaVerifier;
    const fortmatPh = "+" + phoneNumber;
    signInWithPhoneNumber(auth, fortmatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }

  function onOTPVerify() {
    window.confirmationResult
      .confirm(otpState)
      .then(async (result: IUser) => {
        signin(result.user.phoneNumber, navigate(fromPage, { replace: true }));
      })
      .catch((err: string) => {
        console.log(err);
      });
  }

  return (
    <>
      {ShowOTP ? (
        <>
          <h1>Вход в аккаунт</h1>
          <div className="AuthContent">
            <OTPInput
              value={otpState}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              onChange={setOtpState}
              containerStyle="otpAuth"
              inputStyle="otpInputAuth"
            ></OTPInput>
            <button onClick={onOTPVerify}>Войти</button>
          </div>
        </>
      ) : (
        <>
          <h1>Авторизация</h1>
          <div className="AuthPhoneContent">
            <label>
              <PhoneInput
                country={"ru"}
                onlyCountries={["ru"]}
                preferredCountries={["ru"]}
                inputClass="phoneNumberInput"
                dropdownClass="phoneNumberDropdown"
                localization={ru}
                countryCodeEditable={false}
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </label>
            <div>
              <input id="agree" type="checkbox" onChange={(e) => { setIsChecked(e.target.checked) }} checked={checked} />
              <label htmlFor="agree"> Я согласен
              </label>
            </div>
            <button disabled={phoneNumber.length < 11 || !checked} onClick={onSignUp}>
              Получить код
            </button>
          </div>
        </>
      )}
    </>
  );
};