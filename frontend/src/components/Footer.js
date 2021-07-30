import React from "react";

const Footer = () => (
    <footer>
        Created by <span id="ravi">Ravi</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/git-077-Rvraj", "_blank")
                }
            ></i>{" "}
            
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/ravi-raj-765bba1b7/",
                        "_blank"
                    )
                }
            ></i>{" "}
            
            <i
                className="fab fa-instagram"
                onClick={() =>
                    window.open("https://www.instagram.com/rv_raj_77/", "_blank")
                }
            ></i>
        </span>
    </footer>
);

export default Footer;
