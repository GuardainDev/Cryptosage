import style from "./style.module.scss";
const CallitLogoDynamic = ({
  className,
  primaryName,
  secondaryName,
  tagLine,
  isBETA,
  hostName,
}) => {
  return (
    <>
      <div
        className={`${style["logo-block"]} ${
          className ? style[className] : ""
        }`}
      >
        <div className={style["content-block"]}>
          <h5>
            {primaryName} {secondaryName ? <span>{secondaryName}</span> : ""}
          </h5>
          <div className={style["logo-info"]}>
            {tagLine ? <span className={style["tagline"]}>{tagLine}</span> : ""}
            {isBETA ? <span className={style["betapill"]}>BETA</span> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default CallitLogoDynamic;
