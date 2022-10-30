import { graphql } from 'gatsby';

export const query = graphql`
  fragment PleaseDontDuplicateMe on site {
    id
    buildTime
  }
`;

export default null;
