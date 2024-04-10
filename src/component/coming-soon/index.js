import React, { useEffect, useState } from "react";

import style from "./style.module.scss";
import CallitLogoDynamic from "../callit-logo-dynamic";
import Image from "next/image";

const ComingSoon = () => {
  const [hostName, setHostName] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHostName(window.location.host);
    }
  }, []);
  return (
    <>
      <section>
        <div className={`${style["hero-banner-section"]}`}>
          <div className={`${style["slider_one"]}`}>
            <div className={`${style["logo-img"]} mb-0`}>
              <span className={` ${style["blink_contest"]} `}>
                <span className={`${style["new-badge"]}`}>Coming Soon...</span>
              </span>

              <CallitLogoDynamic
                hostName={hostName}
                className="not-found-logo"
                primaryName={"CRYPTO"}
                secondaryName={"Sage"}
                tagLine="ANALYSE | TRADE | EARN"
                isBETA
              />
            </div>
            {/* <article>
              <h1>Coming Soon...</h1>
            </article> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
