# gatsby-extracted-query-in-themes-duplicate
Repo for bug report.

This code will error:

```

 ERROR #85919  GRAPHQL

Found two different GraphQL fragments with identical name "PleaseDontDuplicateMe". Fragment names must be unique

  File: /Users/laurenskling/sites/test/workspaces/gatsby-theme-two/src/fragment.js
  > 1 | fragment PleaseDontDuplicateMe on site{id host}
|             ^^^^^^^^^^^^^^^^^^^^^

  File: /Users/laurenskling/sites/test/workspaces/gatsby-theme-one/src/fragment.js
  > 1 | fragment PleaseDontDuplicateMe on site{id buildTime}
|             ^^^^^^^^^^^^^^^^^^^^^

```
