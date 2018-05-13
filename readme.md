# Discography

Graphql API wrapper for Discogs using a local PostgreSQL database.

## Installation

##### Prerequisites

* [Download the data dumps from Discogs](https://data.discogs.com/?prefix=data/2018/ 'Download the data dumps from Discogs'). (The latest tested and working data dump is 20180201)
* Import to PostgreSQL using [discogs-xml2db](https://github.com/philipmat/discogs-xml2db 'discogs-xml2db')

##### Procedure

* Run some additional SQL schema fixes `psql -U discogs discogs -f schema_fixes.sql`
* Create a .env file in the root of the project and configure with the correct environment variables (see below)
* Build with `npm run build`
* Run the server with `npm start`

##### Environment Variables

* **APP_PORT**: Port to run the server on
* **DB_HOST**: Hostname of PSQL server
* **DB_USER**: Name of the database user
* **DB_PASSWORD**: Password for the databse
* **DB_NAME**: Name of the database
* **ENGINE_KEY**: Optional [Apollo Engine](https://engine.apollographql.com/ 'Apollo Engine') key

## Example Queries

There are two main query types: Lookup and Search.

Lookup will return a given entity from it's discogs id. The following example will return the name of the label, and its first 5 releases. The [Relay connection specification](https://facebook.github.io/relay/graphql/connections.htm 'Relay connection specification') is also supported.

```graphql
query {
  lookup {
    label(id: 271) {
      name
      releases(first: 5) {
        edges {
          node {
            id
            title
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
}
```

The search query will search an entity on combinations of fields that are specific to each. For example the following query searches for Deep House from 1992 released on US labels.

```graphql
query {
  search {
    release(styles: "Deep House", released: "1992", country: "US", first: 50) {
      edges {
        node {
          id
          title
          styles
          released
          country
        }
      }
    }
  }
}
```
