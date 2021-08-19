import * as React from "react";
import styled, { keyframes } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import EpisodeList from "../components/episodeList";
import EpisodeCard from "../components/episodeCard";
import PageStyle from "../components/pageStyle";
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Heading = styled.h1`
  font-size: 6rem;
  text-align: center;
  transform: translateY(-270px);
  font-family: Knewave;
  text-transform: uppercase;
  @media only screen and (max-width: 480px) {
    font-size: 2.4rem;
    transform: translateY(-90px);
  }
`;

const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};

const imageStyle = {
  zIndex: -2,
};

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <StaticImage
        src="../images/Untitled design(7).png"
        alt="Yellow and pink stripes"
        placeholder="blurred"
        layout="fullWidth"
        style={imageStyle}
      />
      <Heading>Reel Feminism</Heading>
      <PageStyle>
        <EpisodeList>
          {renderEpisodes(data.allPodcastRssFeedEpisode.nodes)}
        </EpisodeList>
      </PageStyle>
    </main>
  );
  function renderEpisodes(episode) {
    return episode.map((ep) => {
      const { image, duration, summary } = ep.item.itunes;
      const { guid, title, link } = ep.item;
      return (
        <EpisodeCard
          key={title}
          title={title}
          guid={guid}
          link={link}
          image={image}
          summary={summary}
        />
      );
    });
  }
};

export default IndexPage;

export const PodcastQuery = graphql`
  query {
    allPodcastRssFeedEpisode {
      nodes {
        item {
          itunes {
            image
            duration
            summary
          }
          guid
          title
          link
        }
      }
    }
  }
`;
