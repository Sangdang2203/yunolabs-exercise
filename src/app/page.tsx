import { Metadata } from "next";
import HomePage from "./(public)/home/page";

export const metadata: Metadata = {
  title: "Yunolabs Evaluation Excercise",
  description: "Evaluation Exercises for Yunolabs",
  keywords: ["yunolabs", "singapore"],
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
