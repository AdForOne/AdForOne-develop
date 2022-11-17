import "../styles/globals.css";
import React, { useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import Layout from "../src/common/layout";
import { AppProps } from "next/app";
import { AccessToken } from "../src/common/recoil/token";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
