import Image from "next/image";
import React from "react";
import Styles from "./BlogUi.module.css";
import Badge from "react-bootstrap/Badge";
import { StyledButton } from "../StyledButton";
import TagButton from "../TagButton/TagButton";
const BlogUi = ({ heading, src, tag, time, date, tagColor }) => {
  return (
    <div className="ms-3 ps-5" id={Styles.mainDiv}>
      <div className="row">
        <div className="col-sm-6">
          <div className={Styles.imgDiv}>
            <Image
              loader={() => src}
              src={src}
              height={300}
              width={300}
              style={{ borderRadius: "10%" }}
              alt="blog image"
              unoptimized
              priority
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className={Styles.contentDiv}>
            <div className="d-flex">
              <div className="px-5">
                {" "}
                {/* <TagButton tag={tag} btnColor={tagColor} /> */}
                <StyledButton primary color={tagColor}>
                  {tag}
                </StyledButton>
              </div>
              <p className="fw-normal fst-italic text-decoration-underline">
                {time} min Read
              </p>
            </div>{" "}
            <div
              className="ps-5"
              style={{ width: "300px", height: "40px", overflow: "hidden" }}
            >
              <h2 className="fw-bold">{heading}</h2>
            </div>
            <div className="ps-5">
              <StyledButton color={tagColor}>Read More</StyledButton>
            </div>
            <div className="ps-5 d-flex mt-2  ">
              <Image
                src="/images/admin.jpg"
                height={50}
                width={50}
                style={{ borderRadius: "50%" }}
                alt="admin image"
              />
              <div className="ps-4">
                <p className="text-dark" style={{ marginBottom: "-5px" }}>
                  Admin
                </p>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* <hr
          style={{
            color: "white",
            backgroundColor: tagColor,
            height: "5",
            padding: "2px",
          }}
        /> */}
      </div>
    </div>
  );
};

export default BlogUi;
