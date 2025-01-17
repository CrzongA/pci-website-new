"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Post({ data }: { data: any }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    setContent(data[0].content);
  }, [data]);
  return (
    <>
      <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
        <Typography className={"max-w-7xl hidden md:inline-block"} variant="h1">
          {"Research & Data".toUpperCase()}
        </Typography>
        <Typography className={"max-w-7xl md:hidden"} variant="h3">
          {"Research & Data".toUpperCase()}
        </Typography>

        <Markdown
          className={"max-w-xs md:max-w-xl xl:max-w-6xl"}
          components={{
            p(props) {
              const { children } = props;
              return (
                <Typography
                  className="inline my-8 leading-loose text-md text-justify"
                  variant="paragraph"
                >
                  {children}
                </Typography>
              );
            },
            ul(props) {
              const { children } = props;
              const ret = (children as Array<any>).filter((item) => {
                return typeof item == "object";
              });
              return <ul className="list-emptyCircle">{ret}</ul>;
            },
            li(props) {
              const { children } = props;
              const ret = (children as Array<any>).filter((item) => {
                return typeof item == "object";
              });
              return <li>{ret}</li>;
            },
            h2(props) {
              const { children } = props;
              return (
                <>
                  <Typography
                    className="my-8 leading-loose hidden md:inline"
                    variant="h2"
                  >
                    {children}
                  </Typography>
                  <Typography
                    className="my-8 leading-loose md:hidden"
                    variant="h4"
                  >
                    {children}
                  </Typography>
                </>
              );
            },
            h3(props) {
              const { children } = props;
              return (
                <>
                  <Typography
                    className="my-8 leading-loose hidden md:inline"
                    variant="h3"
                  >
                    {children}
                  </Typography>
                  <Typography
                    className="my-8 leading-loose md:hidden"
                    variant="h5"
                  >
                    {children}
                  </Typography>
                </>
              );
            },
            strong(props) {
              const { children } = props;
              return (
                <Typography
                  className="inline my-8 leading-loose font-semibold"
                  variant="paragraph"
                >
                  {children}
                </Typography>
              );
            },
            a(props) {
              const { children, href } = props;
              return (
                <a href={href === undefined || href === null ? "" : href}>
                  <Button
                    className="inline text-sm px-2 text-blue-600 dark:hover:bg-neutral-800 underline"
                    variant="text"
                    size="sm"
                  >
                    {children}
                  </Button>
                </a>
              );
            },
            img(props) {
              const { children, src, alt, title } = props;

              if (alt == "graph")
                return (
                  <div className="w-full flex place-content-center">
                    <embed className="block w-5/6 h-[40rem]" src={src}></embed>
                  </div>
                );
              else {
                return (
                  <Image
                    alt={alt === undefined || alt === null ? "" : alt}
                    src={
                      src === undefined || src === null ? "" : `${title}/${src}`
                    }
                    width={1000}
                    height={800}
                  />
                );
              }
            },
          }}
        >
          {content}
        </Markdown>
      </section>
    </>
  );
}
