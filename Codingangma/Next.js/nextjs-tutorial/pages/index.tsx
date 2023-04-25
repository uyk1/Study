import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //api 호출이 끝나면 다시 false로 바꾸기
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Head>
          {" "}
          <title>HOME | 코딩앙마</title>{" "}
        </Head>
        {isLoading && (
          <div style={{ padding: "300px 0" }}>
            <Loader inline="centered" active>
              Loading
            </Loader>
          </div>
        )}
        {!isLoading && (
          <>
            <Header as="h3" style={{ paddingTop: 40 }}>
              베스트 상품
            </Header>
            <Divider />
            <ItemList list={list.slice(0, 9)} />
            <Header as="h3" style={{ paddingTop: 40 }}>
              신상품
            </Header>
            <Divider />
            <ItemList list={list.slice(9)} />
          </>
        )}
      </div>
    </>
  );
}
