import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useState } from "react";
import {
  WrapperAboutUser,
  ProfileSection,
  FooterInfoAboutUser,
  InfoAboutUser,
} from "./Profile.styled";

export const UserProfile = () => {
  const { user } = useGlobalContext();
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <ProfileSection>
      <h1>Профиль</h1>
      <WrapperAboutUser>
        <InfoAboutUser>
          <p>Номер телефона: {user} </p>
          <>
            <label>
              Имя: {firstName}
            </label>
            <label>
              Email:{email}
            </label>
          </>
        </InfoAboutUser>
        <FooterInfoAboutUser>
          <button>Редакировать</button>
        </FooterInfoAboutUser>
      </WrapperAboutUser>
    </ProfileSection>
  );
};