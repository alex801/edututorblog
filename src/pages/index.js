import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

import { graphql } from "gatsby";
const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title ="Последние публикации"/>
    </Layout>
  );
};
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          date(formatString: "ll", locale: "ru")
          readTime
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`;

export default IndexPage;
