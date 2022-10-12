import { Fragment } from "react";
import Head from "next/head";
import App from "../container/App";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Target designer | تارگت دیزاینر</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="گروه برنامه نویسی،برنامه نویس سایت،طراح سایت"
        />
        <meta
          name="keywords"
          content="برنامه نویسی ، طراحی و توسعه دهنده وب،طراحی وبسایت"
        />
        <meta property="og:title" content="تارگت دیزاینر" />
        <meta property="og:url" content="https://target-designer.com" />
        <meta property="og:site_name" value="Target designer | تارگت دیزاینر" />
        <meta name="author" content="Target Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </Fragment>
  );
}
