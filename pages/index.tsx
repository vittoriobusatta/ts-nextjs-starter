import axios from "axios";
import Head from "next/head";
import { gql } from "@/utils/helpers";
import query from "@/graphql/queries/query.graphql";
import { useEffect, useState } from "react";
import { log } from "console";

export default function Home() {
  const [data, setData] = useState(null);
  const API_ENDPOINT = "http://localhost:3000/api/hello";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(API_ENDPOINT, {
          query: gql`
            ${query}
          `,
        });
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête GraphQL :", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Head>
        <title>Next.Js Starter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
