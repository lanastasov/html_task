import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavDropdown } from "react-bootstrap";

import "../../src/Sidebar.css";
export default () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        ИСКАМ ДА ЗАБРЕМЕНЕЯ
      </a>
      <a className="menu-item" href="/">
        БРЕМЕННОСТ
      </a>
      <a className="menu-item" href="/">
        БЕБЕ
      </a>
      <a className="menu-item" href="/">
        ДЕТЕ 1-2
      </a>

      <a className="menu-item" href="/">
        ДЕТЕ 3+
      </a>
      <a className="menu-item" href="/">
        ГАЛЕРИЯ
      </a>
      <a className="menu-item" href="/">
        ОФЕРТИ
      </a>
      <a className="menu-item" href="/">
        ЛЮБОПИТНО
      </a>

      <a className="menu-item" href="/">
        СТВОЛОВИ КЛЕТКИ
      </a>
      <a className="menu-item" href="/">
        СПИСЪЦИ
      </a>
      <a className="menu-item" href="/">
        ВИДЕО
      </a>
      <div>
        <a className="menu-item" href="/">
          ИНСТРУМЕНТИ
          <NavDropdown
            title="Намери име за бебе"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title="Тегло при бременност"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title="Калкулатор термин"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title="Момче или момиче"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title="Речник на бременността"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            title="имунизационен календар"
            id="basic-nav-dropdown"
          ></NavDropdown>
        </a>
      </div>

      <hr />

      <a className="menu-item" href="/">
        ПОВЕРИТЕЛНОСТ
      </a>
      <a className="menu-item" href="/">
        ПОЛИТИКА ЛД
      </a>
      <a className="menu-item" href="/">
        ИЗВЕСТИЯ
      </a>
    </Menu>
  );
};
