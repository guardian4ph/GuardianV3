import React from "react";
import Moment from "react-moment";
import "./Update.css";

const MAX_LENGTH = 250;

const Update = ({ data }) => {
  const timeDifference = (item) => {
    console.log("item", item);
    var current = new Date();
    var formatDate = new Date(item?.dateTime);

    var minutes = 60 * 1000;
    var hours = minutes * 60;
    var days = hours * 24;
    var months = days * 30;
    var years = days * 365;

    var elapsed = current - formatDate;

    if (elapsed < minutes) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < hours) {
      return Math.round(elapsed / minutes) + " minutes ago";
    } else if (elapsed < days) {
      return Math.round(elapsed / hours) + " hours ago";
    } else if (elapsed < months) {
      return Math.round(elapsed / days) + " days ago";
    } else if (elapsed < years) {
      return Math.round(elapsed / months) + " months ago";
    } else {
      return Math.round(elapsed / years) + " years ago";
    }
  };

  return (
    <div className="updateContainer ">
      <tbody style={{}}>
        {data.updates.map((item, i) => (
          <tr className="alert_tr" key={i}>
            <td className="imageAlertContainer , centerContents ">
              <img className="imageAlert" src={item.opcenLogo} alt="" />
            </td>
            <td
              className="titleAlert  "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                {item.title}
              </p>{" "}
              <p
                style={{
                  whiteSpace: "pre-line",
                }}
              >
                {item.details.substring(0, MAX_LENGTH)} ...
              </p>
            </td>

            <td className="datetimeAlert , centerContents ">
              <Moment format="lll">{item.dateTime}</Moment> -{" "}
              {timeDifference(item)}
            </td>
            <td className="opcenAlert , centerContents ">
              <img className="opcenImageAlert" src={item.alertImage} alt="" />
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Update;
