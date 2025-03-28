import Link from "next/link";

import{FaGithub, FaLinkedinIn, FaYoutube, FaMedium} from "react-icons/fa"

const socials = [
  {icon: <FaGithub/>, path: 'https://github.com/jchong990315'},
  {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/seungjun-chong-07ba891b8'},
  {icon: <FaMedium/>, path: 'https://medium.com/@jchong990315'},
  {icon: <FaYoutube/>, path: 'https://www.youtube.com/@TeamRobotics-wg7wy'},
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
