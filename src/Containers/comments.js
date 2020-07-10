import React, { useEffect } from "react";

const src = "https://utteranc.es/client.js";
const branch = "master";

const Utterances = ({ repo }) => {
  const rootElm = React.createRef();

  useEffect(() => {
    const utterances = document.createElement("script");
    const utterancesConfig = {
      repo:"rushabh31/blogs",
      async: true,
      "issue-term": "title",
      label: "type:comment",
      crossorigin: "anonymous"
    };

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, []);

  return <div id="ar-comments" className="utterances" ref={rootElm} />;
};

export default Utterances;
