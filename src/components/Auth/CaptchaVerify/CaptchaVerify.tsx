import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { AuthorizationForm } from "../AuthForm/AuthorizationFormComponent";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

interface IUser {
    user: {
        phoneNumber: number;
    }
}

export const CaptchaVerify = () => {
    const { signin } = useGlobalContext();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpState, setOtpState] = useState("");
    const [ShowOTP, setShowOTP] = useState(false);
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

    return <AuthorizationForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} otpState={otpState} setOtpState={setOtpState} ShowOTP={ShowOTP} onSignUp={onSignUp} onOTPVerify={onOTPVerify} onCapthVerify={onCapthVerify} />
}