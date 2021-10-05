import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Blockquote } from "./src/components/Complete";
import TeX from "@matejmazur/react-katex";

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  blockquote: Blockquote,
  Tex: TeX, 

};
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
