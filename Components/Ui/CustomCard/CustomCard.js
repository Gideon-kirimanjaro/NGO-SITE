import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./CustomCard.module.css";
const CustomCard = ({ bgColor, cardData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {cardData.map((item) => {
            return (
              <div class="col-lg-4 col-md-4">
                <div className={Styles.mainDiv}>
                  <div className="card  " style={{ backgroundColor: bgColor }}>
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </div>

                    <div className="card-body">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={Styles.cardIcon}
                      />
                      <p className="card-title text-light">{item.title}</p>
                      <p className="card-text">{item.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomCard;
