import { useEffect } from "react";
import { navbar_dropdown } from "../scripts/navbar_dropdown";

const NavBar = () => {
  useEffect(() => {
    navbar_dropdown();
  }, []);

  return (
    <nav id="navbar">
      <div id="navbar_name">
        <h1>Gabriel Nito</h1>
      </div>
      <div id="navbar_links">
        <div className="navbar_link">
          <a href="">
            Sobre
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <div className="navbar_dropdown sobre">
            <a href="">
              <p>Sobre mim</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus tempora aliquam sint!
              </p>
            </a>
            <a href="">
              <p>Projetos</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </a>
            <a href="">
              <p>Podcasts</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                sequi eveniet, asperiores ullam velit rerum necessitatibus.
              </p>
            </a>
            <a href="">
              <p>Talks</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div>
        </div>
        <div className="navbar_link">
          <a href="">Setup</a>
          {/* <div className="navbar_dropdown setup">
            <a href="">
              <p>Sobre mim</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus tempora aliquam sint!
              </p>
            </a>
            <a href="">
              <p>Projetos</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </a>
            <a href="">
              <p>Podcasts</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                sequi eveniet, asperiores ullam velit rerum necessitatibus.
              </p>
            </a>
            <a href="">
              <p>Talks</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
