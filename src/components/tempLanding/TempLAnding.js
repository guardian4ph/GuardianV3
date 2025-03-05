import React from "react";
import slides from "../../../src/data/carouselData.json";
import ImageCarousel from "../landing/ImageCarousel";
import { ImFacebook2 } from "react-icons/im";
import "../../index.css";

const TempLAnding = () => {
  const handleRedirect = () => {
    window.location.href = "https://www.facebook.com/GuardianPhilippines";
  };
  return (
    <div className="body" onClick={handleRedirect}>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "20px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ImageCarousel data={slides} />
      </div>
      <p className="footer1">
        We are updating the app to serve you better, standby for GuardianPH V3
      </p>

      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <p className="footer1">for latest updates and visit our FB Page </p>
        <button style={{ marginLeft: "6px" }}>
          <ImFacebook2 size={"14"} color="#0766FF" />
        </button>
      </div>
    </div>
  );
};

export default TempLAnding;
