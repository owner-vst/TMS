"use client";
import React, { useEffect, useRef } from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
export default function RenderPdf() {
return(
    <>
    <EmbedPDF
  mode="inline"
  style={{ width: 900, height: 800 }}
  documentURL="https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf"
/>
        </>
)
}