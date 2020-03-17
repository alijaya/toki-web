import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DarkNavbar from "../components/dark-navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import { breakpoints } from "../config";
import useWindowDimensions from "../hooks/window-dimensions";
import "./index.scss";
import { Parallax, Background } from "react-parallax";
import BackgroundImage from "gatsby-background-image";

const IndexPage = props => {
  const { data } = props;
  const { width } = useWindowDimensions();
  const landingImage =
    width > breakpoints.md
      ? require("../img/IOI2017.png")
      : require("../img/IOI2017mob.png");
  const BackgroundAbout = data.aboutBackground.childImageSharp.fluid;
  const blogPosts = data.allMarkdownRemark.edges;
  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  return (
    <Layout>
      <DarkNavbar />
      <Parallax bgImage={landingImage} strength={250} className="landing-image">
        <div style={{ height: 500 }}>
          <h1 style={insideStyles}>
            TIM OLIMPIADE
            <br /> KOMPUTER INDONESIA
          </h1>
        </div>
      </Parallax>
      <BackgroundImage fluid={BackgroundAbout}>
        <Container fluid className="about-us">
          <div className="p-4 row no-gutters">
            <h5 className="col-12 mb-2">ABOUT US</h5>
            <div className="col-12 col-md-6 mb-2">
              Tim Olimpiade Komputer Indonesia, atau yang sering disingkat
              “TOKI”, adalah sebuah tim yang terdiri dari siswa-siswa terbaik
              sekolah menengah di Indonesia yang dipersiapkan khusus untuk
              mewakili Indonesia bertanding dalam ajang olimpiade informatika
              tingkat internasional.
            </div>
            <div className="col-12">
              <Link to="/about">
                <button className="toki-button">READ MORE</button>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
      <Parallax
        bgImage={require("../img/about_toki.png")}
        bgImageSizes="100vh"
        strength={250}
        className="image-between-pages"
      />
      <Container fluid>
        <Row>
          {blogPosts.map(edge => {
            const blogPost = edge.node;
            return (
              <Col xs="12" md="6" key={blogPost.fields.slug}>
                <div className="mx-1 mb-3 blog-post">
                  <Img
                    fluid={
                      blogPost.frontmatter.featuredimage.childImageSharp.fluid
                    }
                    className="mb-3"
                  />
                  <div className="p-3">
                    <h3 className="text-grey2">{blogPost.frontmatter.title}</h3>
                    <div className="text-grey1 mb-2">{blogPost.excerpt}</div>
                    <Link to={blogPost.fields.slug}>
                      <button className="toki-button">READ MORE</button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mobileLandingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopLandingImage: file(relativePath: { eq: "IOI2017.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutBackground: file(relativePath: { eq: "BackgroundAbout.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
