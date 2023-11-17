import { createContext } from "react";
import { IGlobalStateContext } from "../../interfaces";

const GlobalContext = createContext<IGlobalStateContext>({
    isModalForCleanBasketVisible: false,
    setIsModalForCleanBasketVisible: () => { },
    isModalForAuthorizationVisible: false,
    setIsModalForAuthorizationVisible: () => { },
    handleButton: () => { },
    scroll: 0,
    otpState: "",
    setOtpState: () => { },
    phoneNumber: "",
    setPhoneNumber: () => { },
    ShowOTP: false,
    setShowOTP: () => { },
    user: "",
    signin: () => { },
    signout: () => { },
    isHeaderIsHidden: false,
    setIsHeaderIsHidden: () => { },
    hidden: () => { },
});

export default GlobalContext;