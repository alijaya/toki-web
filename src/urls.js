import { kebabCase } from "lodash";

const url = {
  HOME: "/",
  ABOUT_TOKI: "/about/",
  HALL_OF_FAME: "/hall-of-fame/",
  TAG: "/tag/",
  // if changed, need to also update it manually in gatsby-node.js due to ES6 import issue
  toBlog: idx => (idx === 1 ? `/blog/` : `/blog/${idx}/`),
  toTag: tag => idx =>
    idx === 1 ? `/tag/${kebabCase(tag)}/` : `/tag/${kebabCase(tag)}/${idx}/`
};

export default url;
