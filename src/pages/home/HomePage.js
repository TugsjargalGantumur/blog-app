import React from "react";
import { Header, Footer } from "../../components";
import { useUserContext } from "../../context";
import { signOutFunction } from "../../firebase";
import "./HomePage.css";

export const HomePage = () => {
  const { loading, currentUser } = useUserContext();
  const handleSignOut = async () => {
    await signOutFunction();
  };
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading ...
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div id="home-container">
        <h1>Home Page</h1>
        {currentUser ? (
          <>
            <p>Welcome back, {currentUser.displayName}!</p>
            <button onClick={handleSignOut}>Sign out</button>
          </>
        ) : (
          <p>Welcome, Guest!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
