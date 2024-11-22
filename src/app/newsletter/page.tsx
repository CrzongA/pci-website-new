"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function AboutPage() {
  return (
    <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
      <Typography className={"max-w-7xl"} variant="h1">
        {"Newsletter".toUpperCase()}
      </Typography>
      <Typography className="max-w-7xl my-8" variant="lead">
        {
          "The Policy Change Index newsletter delivers routine updates on the series of PCI projects to your inbox through Substack.\n"
        }
        <br />
        If you are not in the loop yet,{" "}
        <a href="https://policychangeindex.substack.com/">sign up here</a>.
        <br />
        {
          "Below is the latest issue of the newsletter. Check out our Substack page for the archive."
        }
      </Typography>
      <div className="w-full flex place-content-center">
        <embed
          className="block w-[60rem] h-[80rem]"
          src={"/newsletter/latest.pdf"}
        ></embed>
      </div>
    </section>
  );
}
