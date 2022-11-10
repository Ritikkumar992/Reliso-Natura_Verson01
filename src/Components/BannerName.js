import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "Rs";
  return (
    <div className="bannerContent">
      <h3>Reliso Natura,</h3>
      <p>
        Get free discount for every <span>{`${currency}${discount}`}</span>{" "}
        Shoping
      </p>
      <a href={more}>Shop Now</a>
    </div>
  );
}

export default BannerName;
