import React from "react";

const Footer = ({ index, theme }) => (
  <ul
    css={{
      position: "fixed",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "100%",
      right: 0,
      bottom: 0,
      margin: 16,
      color: theme.colors.text,
      listStyleType: "none",
      opacity: 0.75,
      li: {
        padding: 8
      }
    }}
  >
    <li>{index}</li>
    <li>
      <a href={`https://twitter.com/hashtag/${theme.metadata.hashtag}`}>
        {theme.metadata.hashtag}
      </a>
    </li>
    <li css={{ flexGrow: 1 }}></li>
    <li>{theme.metadata.author}</li>
    <li>
      <a href={`https://github.com/${theme.metadata.github}`}>
        {theme.metadata.github}
      </a>
    </li>
  </ul>
);

export default Footer;
