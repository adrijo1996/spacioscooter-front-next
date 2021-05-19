import Head from "next/head";
import React from "react";
import { Menu } from "../Menu";
import { Footer } from "../Footer";
import styled from "styled-components";

const FullScreen = styled.div`
display: block;
height: 100vh;
margin 0;
background-size: cover;
box-sizing: border-box;
`;

const ContentStyled = styled.div`
  display: flex;
  margin: 0px;
`;

export const PrimaryLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div id="root ">
      <Head>
        <title></title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
          crossOrigin="anonymous"
        />
      </Head>
      <FullScreen>
        <Menu />
        <ContentStyled className="text-dark">{children}</ContentStyled>
        <Footer />
      </FullScreen>
    </div>
  );
};
