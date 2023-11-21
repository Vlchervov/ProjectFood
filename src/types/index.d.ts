import { RecaptchaVerifier, UserCredential } from "firebase/auth";

export { };

declare global {
    interface Window {
        confirmationResult: ConfirmationResult;
        recaptchaVerifier: RecaptchaVerifier;
        confirm: string;
    }
}

