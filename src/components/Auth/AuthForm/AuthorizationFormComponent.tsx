import { useState } from "react";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

export const AuthorizationForm = (props: any) => {
  const [checked, setIsChecked] = useState(false)
  return (
    <>
      {props.ShowOTP ? (
        <>
          <h1>Вход в аккаунт</h1>
          <div className="AuthContent">
            <OTPInput
              value={props.otpState}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              onChange={props.setOtpState}
              containerStyle="otpAuth"
              inputStyle="otpInputAuth"
            ></OTPInput>
            <button onClick={props.onOTPVerify}>Войти</button>
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
                value={props.phoneNumber}
                onChange={props.setPhoneNumber}
              />
            </label>
            <div className="agreeCheckboxaAuthorization">
              <input id="agree" type="checkbox" onChange={(e) => { setIsChecked(e.target.checked) }} checked={checked} />
              <label htmlFor="agree"> Я согласен
              </label>
            </div>
            <button disabled={props.phoneNumber.length < 11 || !checked} onClick={props.onSignUp}>
              Получить код
            </button>
          </div>
        </>
      )}
    </>
  );
};