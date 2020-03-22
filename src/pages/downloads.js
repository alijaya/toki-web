import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LightNavbar from "../components/light-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import useWindowDimensions from "../hooks/window-dimensions";
import { breakpoints } from "../config";
import BackgroundImage from "gatsby-background-image";
import "./downloads.scss";

const Downloads = props => {
  const { data } = props;
  const BackgroundBooks = data.booksBackground.childImageSharp.fluid;
  const BackgroundArchive = data.archiveBackground.childImageSharp.fluid;
  const BackgroundNews = data.newsBackground.childImageSharp.fluid;

  return (
    <Layout>
      <LightNavbar />
      <div className="text-bold text-center title-download">
        <span className="text-1c5">DOWNLOADS</span>
      </div>
      <Container fluid>
        <div className="row">
          <div className="col-12 col-md-4">
            <BackgroundImage
              fluid={BackgroundBooks}
              style={{ backgroundSize: "400px" }}
            >
              <Container fluid className="text-center books">
                <h5>TOKI BOOKS</h5>
                <Link to="/">
                  <button className="toki-button">MORE</button>
                </Link>
              </Container>
            </BackgroundImage>
          </div>
          <div className="col-12 col-md-4">
            <BackgroundImage
              fluid={BackgroundArchive}
              style={{ backgroundSize: "450px" }}
            >
              <Container fluid className="text-center books">
                <h5>PROBLEMSETS ARCHIVES</h5>
                <Link to="/">
                  <button className="toki-button">MORE</button>
                </Link>
              </Container>
            </BackgroundImage>
          </div>
          <div className="col-12 col-md-4">
            <BackgroundImage
              fluid={BackgroundNews}
              style={{ backgroundSize: "300px" }}
            >
              <Container fluid className="text-center books">
                <h5>TOKI NEWS</h5>
                <Link to="/">
                  <button className="toki-button">MORE</button>
                </Link>
              </Container>
            </BackgroundImage>
          </div>
        </div>
      </Container>
      <div className="filler" />
      <Footer />
    </Layout>
  );
};

export default Downloads;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    booksBackground: file(relativePath: { eq: "downloadBooks.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    archiveBackground: file(relativePath: { eq: "downloadArchive.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsBackground: file(relativePath: { eq: "downloadTokiNews.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;