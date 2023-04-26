import Item from "@/src/component/Item";
import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Head from "next/head";

interface Props {
  item: {
    name: string;
    description: string;
  };
  name: any;
}

const Post = ({ item, name }: Props) => {
  // const router = useRouter(); //getServerSideProps를 이용함으로써, 다 필요없어짐
  // const { id } = router.query;
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // }
  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, [id]);
  const thisItem = item;
  return (
    <>
      {/* {isLoading ? (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : ( */}
      {item && (
        <>
          <Head>
            <title>{thisItem.name}</title>
            <meta name="description" content={thisItem.description} />
          </Head>
          {name} 환경입니다.
          <Item item={thisItem} />
        </>
      )}
      {/* )} */}
    </>
  );
};

export default Post;

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
