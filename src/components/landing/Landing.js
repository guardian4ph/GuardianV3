import React from "react";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar";

import slides from "../../../src/data/carouselData.json";
import products from "../../../src/data/carouselData.json";

import NavbarBtn from "./NavbarBtn";
import Products from "./Products";
import "./Landing.css";
import { FaUserInjured } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaBuildingShield } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import Updates from "./Updates";

const Landing = () => {
  return (
    <div
      className="gradient"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "60px",
          width: "1920px",
          backgroundColor: "#4d7b91",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            width: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "80px" }}
            src="/photos/landing/GUARDIANph.png"
            alt=""
            loading="lazy"
          />
        </div>
        {/* NavBar */}
        <div style={{ width: "65%" }}>
          <Navbar />
        </div>
        {/* Log-in */}
        <div
          style={{
            display: "flex",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NavbarBtn />
        </div>
      </div>

      {/* Title Header */}
      <div
        style={{
          display: "flex",
          height: "30px",
          width: "1920px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ddd",
        }}
      >
        <p style={{ fontSize: 14 }}>
          Georgaphic Unified Assistance and Response to Distress Incidents with
          Agile Networking{" "}
        </p>
      </div>

      <div>
        <ImageCarousel data={slides} />
      </div>
      {/* Live Data */}
      <div className="centerContents liveData">
        {/* Total Incidents */}
        <div className="liveDataContent">
          <div className="icon">
            <FaUserInjured size={50} className="iconDimension" />
          </div>
          <div className="title">
            <p className="titleFont">Incidents</p>
          </div>
          <div className="data">
            <p className="dataFont">2,329,098</p>
          </div>
        </div>

        {/* Total Volunteers Online */}
        <div className="liveDataContent">
          <div className="icon">
            <MdVolunteerActivism size={70} className="iconDimension" />
          </div>
          <div className="title">
            <p className="titleFont">Volunteers</p>
          </div>
          <div className="data">
            <p className="dataFont">2,329,098</p>
          </div>
        </div>

        {/* Total Dispatchers Online */}
        <div className="liveDataContent">
          <div className="icon">
            <MdOutlineSupportAgent size={70} className="iconDimension" />
          </div>
          <div className="title">
            <p className="titleFont">Dispatchers</p>
          </div>
          <div className="data">
            <p className="dataFont">2,329,098</p>
          </div>
        </div>
        {/*  {/* Total Operation Center Online */}
        <div className="liveDataContent">
          <div className="icon">
            <FaBuildingShield size={70} className="iconDimension" />
          </div>
          <div className="title">
            <p className="titleFont">Operation Center</p>
          </div>
          <div className="data">
            <p className="dataFont">2,329,098</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider50" style={{}}>
        <div>LIVE DATA</div>
        <div
          style={{
            display: "flex",
            width: "1920px",
            alignItems: "center",
            justifyContent: "center",
            borderTop: "1px solid #fff",
            marginTop: "8px",
          }}
        >
          <div className="imageAlertContainer , centerContents"> Alert</div>
          <div className="titleAlert , centerContents">Title/Details</div>
          <div className="datetimeAlert , centerContents">Date/Time</div>
          <div className="opcenAlert , centerContents">Opcen</div>
        </div>
      </div>

      {/* Alerts */}
      <div className="alerts  ">
        <Updates />
      </div>

      {/* Products  */}
      <div className="products centerContents">
        <Products data={products} />
      </div>

      {/* Contacts */}

      <div className="contactUs centerContents">
        <p>CONTACT US</p>
      </div>

      {/* Footer */}
      <div className="footer centerContents">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Landing;
