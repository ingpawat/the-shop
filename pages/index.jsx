import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const route = useRouter();

  return (
    <div className="w-[full] h-[full]">
      <Head>
        <title>Bannok Shop</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="m-[10%] mt-[5%] w-[full] h-[500px] text-center flex items-center justify-start flex-col">
        <h1 className="text-[2rem] mb-[5%]">หมวดหมู่</h1>

        <Link href="/Coffee">
          <button className="Coffee drop-shadow-2xl w-[10rem] h-[50px] border border-black mb-[10%] rounded-xl">
            <p className="mt-[2%]">กาแฟ</p>
          </button>
        </Link>

        <Link href="/Tea">
          <button className="Tea drop-shadow-2xl w-[10rem] h-[50px] border border-black mb-[10%] rounded-xl">
            <p className="mt-[2%]">ชา</p>
          </button>
        </Link>

        <Link href="/Fruit">
          <button className="Fruit drop-shadow-2xl w-[10rem] h-[50px] border border-black mb-[10%] rounded-xl">
            <p className="mt-[2%]">น้ำผลไม้</p>
          </button>
        </Link>

        <Link href="/BearBand">
          <button className="BearBand drop-shadow-2xl w-[10rem] h-[50px] border border-black mb-[10%] rounded-xl">
            <p className="mt-[2%]">นมหมี</p>
          </button>
        </Link>

        <Link href="/Milk">
          <button className="Milk drop-shadow-2xl w-[10rem] h-[50px] border border-black mb-[10%] rounded-xl">
            <p className="mt-[2%]">นมสด</p>
          </button>
        </Link>

        <Link href="/Soda">
          <button className="Soda drop-shadow-2xl w-[10rem] h-[50px] border border-black mb-[10%] rounded-xl">
            <p className="mt-[2%]">โซดา</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
