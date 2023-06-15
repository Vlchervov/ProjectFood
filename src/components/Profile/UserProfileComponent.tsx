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
  const [redaction, setRedaction] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  return (
    <ProfileSection>
      <h1>Профиль</h1>
      <WrapperAboutUser>
        <InfoAboutUser>
          <p>Номер телефона: {user} </p>
          <>
            <label>
              Имя:
              {redaction ? <input
                maxLength={10}
                value={firstName}
                onChange={(e) => {
                  e.preventDefault();
                  setFirstName(e.target.value.trim());
                }}
              /> : <> {firstName}</>}
            </label>
            <label>
              Email:
              {redaction ? <input
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value.trim());
                }}
              /> : <> {email}</>}
            </label>
          </>
        </InfoAboutUser>
        <FooterInfoAboutUser>
          <button onClick={() => setRedaction(!redaction)}>
            {!redaction ? "Редактировать профиль" : "Сохранить"}{" "}
          </button>
        </FooterInfoAboutUser>
      </WrapperAboutUser>
    </ProfileSection>
  );
};