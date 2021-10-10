import React from "react";
import {
  FaVk,
  FaYoutube
} from "react-icons/fa";
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.youtube.com/channel/UCbkT-RPOSasvKDOxjz2UhFw">
          <FaYoutube className="social-icon dribble-icon"></FaYoutube>
        </a>
      </li>
      <li>
        <a href="https://vk.com/edututor">
          <FaVk className="social-icon facebook-icon"></FaVk>
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
