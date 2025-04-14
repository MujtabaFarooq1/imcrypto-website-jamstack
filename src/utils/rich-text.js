import React from "react";
import DynamicComponent from "../components/dynamicComponent";
/**  custom component configurations for rich */
export const RichTextComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
  },

  marks: {
    link: ({ children, value }) => {
      if (!value?.href) {
        return <a>{children}</a>;
      }
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={value.href.startsWith("http") ? "_blank" : "_self"}
        >
          {children}
        </a>
      );
    },
  },
  unknownType: ({ value }) => {
    return <DynamicComponent {...value} />;
  },
};
