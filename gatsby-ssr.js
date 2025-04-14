import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"
import React from "react"
import { GlobalProvider } from "./src/context"
import { PortableTextComponentsProvider } from "@portabletext/react"
import { RichTextComponents } from "./src/utils/rich-text"
export const wrapRootElement = ({ element }) => (
  <GlobalProvider><PortableTextComponentsProvider components={RichTextComponents}>{element}</PortableTextComponentsProvider></GlobalProvider>
)