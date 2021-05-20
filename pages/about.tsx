import { Container } from "next/app";
import CategoryLayout from "../components/CategoryLayout";

const AboutPage = () => (
  <CategoryLayout pageNumber={"03"}>
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <h1 className="bold-text headline">ABOUT</h1>
    </div>
    <style jsx>{``}</style>
  </CategoryLayout>
);
export default AboutPage;
