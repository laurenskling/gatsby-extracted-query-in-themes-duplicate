import { graphql } from 'gatsby';

export const query = graphql`
  fragment PleaseDontDuplicateMe on site {
    id
    host
  }
`;

export default null;
