import { useState } from "react";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from "react-phone-input-2/lang/ru.json";

export const AuthorizationForm = () => {
  const [otpState, setOtpState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  console.log(phoneNumber.length);
  return (
    <>
      {ShowOTP ? (
        <form>
          <div className="AuthContent">
            <h1>Вход в аккаунт</h1>
            <OTPInput
              value={otpState}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              onChange={setOtpState}
              containerStyle="otpAuth"
              inputStyle="otpInputAuth"
            ></OTPInput>
            <button>Войти</button>
          </div>
        </form>
      ) : (
        <div className="AuthPhoneContent">
          <label>
            Ваш номер телефона:
            <PhoneInput
              country={"ru"}
              onlyCountries={["ru"]}
              preferredCountries={["ru"]}
              localization={ru}
              countryCodeEditable={false}
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </label>
          <button
            disabled={phoneNumber.length < 11}
            onClick={() =>
              setTimeout(() => {
                setShowOTP(true);
              }, 1000)
            }
          >
            Получить код
          </button>
        </div>
      )}
    </>
  );
};
