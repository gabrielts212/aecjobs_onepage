import React from "react";
import Link from "next/link";

const CustomLink = ({ to, children, ...rest }) => {
  return (
    <Link href={to} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
