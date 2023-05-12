import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3 className="H3Footer">𝓜𝓔𝓜𝓞 𝓣𝓾𝓷𝓲𝓼𝓲𝓪</h3>
        <p>
          Made with <span className="heart">&#10084;</span> by H2 I2
        </p>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; copyright 2023 <a href="#"> 𝓜𝓔𝓜𝓞 𝓣𝓾𝓷𝓲𝓼𝓲𝓪</a>{" "}
        </p>
      </div>
    </footer>
  );
}
