import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>User Logged In: {auth.isLoggedIn ? "Yes" : "No"}</p>
      <p>Theme: {theme}</p>
      <p>Language: {language}</p>
      <p>Notifications: {notifications.length}</p>
    </div>
  );
};

export default HomePage;
