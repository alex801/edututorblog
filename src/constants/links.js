import React from "react";
import { Link } from "gatsby";
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Главная страница
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Статьи
        </Link>
        {children}
      </li>
 

    </ul>
  );
};

export default Links;
