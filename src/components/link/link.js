import React from "react";
import Link from "next/link";

const CustomLink = ({ to, children, ...rest }) => {
  return (
    <Link href={to} passHref>
      <div className="hover:no-underline" {...rest}>
        {children}
      </div>
    </Link>
  );
};

export default CustomLink;