import React from "react";
import Link from "next/link";

const CustomLink = ({ to, children, ...rest }) => {
  return (
    <Link href={to} passHref legacyBehavior>
      <a {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
