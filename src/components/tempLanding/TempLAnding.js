import React from "react";
import slides from "../../../src/data/carouselData.json";
import ImageCarousel from "../landing/ImageCarousel";
import { ImFacebook2 } from "react-icons/im";

const TempLAnding = () => {
  const handleRedirect = () => {
    window.location.href = "https://www.facebook.com/GuardianPhilippines";
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handleRedirect}>
      <div
        style={{
          display: "flex",
          marginTop: "5%",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ImageCarousel data={slides} />
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {" "}
          <p style={{ fontSize: 24, fontWeight: "lighter" }}>
            We are updating the app to serve you better, standby for GuardianPH
            V3
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: 24, fontWeight: "lighter" }}>
          for latest updates and visit our FB Page{" "}
        </p>
        <button style={{ marginLeft: "20px" }}>
          <ImFacebook2 size={"25"} color="#0766FF" />
        </button>
      </div>
    </div>
  );
};

export default TempLAnding;
