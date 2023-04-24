import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Axios from "axios";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div>
        <Head>
          {" "}
          <title>HOME | 코딩앙마</title>{" "}
        </Head>
        create-next-app <br />
        - create-next-app
        <br />
        - 이를 통해 설치 시 자동으로 컴파일과 번들링이 됨(webpack과 babel)
        <br />
        - 자동 리프레쉬 기능으로 수정 시 화면에 바로 반영
        <br />
        - 서버사이드 렌더링 지원
        <br />
        - 스태틱 파일을 지원
        <br />
      </div>
    </>
  );
}
