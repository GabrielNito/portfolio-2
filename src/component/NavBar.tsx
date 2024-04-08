import { useEffect } from "react";
import { navbar_dropdown } from "../scripts/navbar_dropdown";
import { NavBar } from "./NavBar/index";

const Navbar = () => {
  useEffect(() => {
    navbar_dropdown();
  }, []);

  return (
    <NavBar.Root>
      <NavBar.Name>
        <NavBar.NameImage src="/Logo.svg" />
        <NavBar.NameText text="Gabriel Nito" href="/" />
      </NavBar.Name>
      <NavBar.Links>
        <NavBar.Link>
          <NavBar.LinkButton title="Sobre" dropdown />
          <NavBar.Dropdown>
            <NavBar.DropdownLink
              title="Sobre Mim"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora aliquam sint!"
              href="/"
            />
            <NavBar.DropdownLink
              title="Projetos"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
              href="/"
            />
            <NavBar.DropdownLink
              title="Podcasts"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                sequi eveniet, asperiores ullam velit rerum necessitatibus."
              href="/"
            />
            <NavBar.DropdownLink
              title="Talks"
              description="Lorem ipsum dolor sit amet."
              href="/"
            />
          </NavBar.Dropdown>
        </NavBar.Link>
        <NavBar.Link>
          <NavBar.LinkButton title="Setup" dropdown />
          <NavBar.Dropdown>
            <NavBar.DropdownLink
              title="Equipamentos"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              href="/"
            />
            <NavBar.DropdownLink
              title="Stack"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                aliquid vitae fugiat facilis eveniet excepturi."
              href="/"
            />
            <NavBar.DropdownLink
              title="Wallpapers"
              description="Lorem ipsum dolor sit amet consectetur adipisicing."
              href="/"
            />
          </NavBar.Dropdown>
        </NavBar.Link>
        <NavBar.Link>
          <NavBar.LinkButton title="Contact" href="/contact" />
          <NavBar.LinkButtonTooltip text="Get in touch with me" />
        </NavBar.Link>
        <NavBar.Link>
          <NavBar.LinkButton title="Login" href="/login" />
          <NavBar.LinkButtonTooltip
            text={`
              Sign in
              Sign Up`}
          />
        </NavBar.Link>
      </NavBar.Links>
    </NavBar.Root>
  );
};

export default Navbar;
