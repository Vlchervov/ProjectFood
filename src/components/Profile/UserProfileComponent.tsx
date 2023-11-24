import {
  WrapperAboutUser,
  ProfileSection,
  FooterInfoAboutUser,
  InfoAboutUser,
} from "./Profile.styled";

export const UserProfile = () => {
  const user = localStorage.getItem("user");

  return (
    <ProfileSection>
      <h1>Профиль</h1>
      <WrapperAboutUser>
        <InfoAboutUser>
          <p>Номер телефона: {user} </p>
        </InfoAboutUser>
        <FooterInfoAboutUser>
          <button disabled>Редакировать</button>
        </FooterInfoAboutUser>
      </WrapperAboutUser>
    </ProfileSection>
  );
};