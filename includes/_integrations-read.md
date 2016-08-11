
## Get All

<aside class="endpoint">
        <code>GET</code> /integrations
</aside>

The **integrations** endpoint is quite flexible in that it retrieves all integrations (that a user can have access to) or accepts search parameters to fetch integrations that you are looking for.

By default all returned integrations are restricted to return only the following for the logged in user:

1. If the application is owned by the logged in user
2. If the application is set to protected and the user belongs in the domain
3. If the application is set to public access

From here, a user can search for integrations and install them

<aside class="todo text">
        <h3>TODO</h3>
        <ul>
                <li>Add roles support - allow app administrators to search for applications that are part of the domain yet private to somebody else as well as the above</li>
                <li>Add owner name to output</li>
                <li>Add domain name to output</li>
                <li>Add boolean installed to output for user to see if app installed - linked to the user integrations collection</li>
        </ul>
</aside>


> ### <code class="response">CURL</code> Request

```bash

curl -X GET "<-- endpoint here -->/integrations"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- token here -->"
        -H "Domain: <-- domain token here -->"
```

> Remember to replace `<-- token here -->` & `<-- domain token here -->` with your user authenticated token and domain selected token

<aside class="request">Request</aside>

### Query Options

These options are added to the endpoint such as `...?fieldName=test&$limit=10`


  | Type | Required | Description | Default | Options
- | ---- | -------- | ----------- | ------- | -------
`fieldName` | **String** | | Any field name within the collection can be passed in here | | See the response example
`$limit` | **Integer** | | Limit the result set by this amount. This is a part of pagination | `15` |
`$skip` |  **Integer** | | Skip through a number of records. Use this to navigate to paged result. This is a part of pagination | |
`$sort` |  **Object** | | List the field by which sorting should apply and the direction whether it should ASC or DESC. Example `..&$sort={name: 1}`. 1 is for ascending and -1 is for descending. Multiple values can be passed in | |
`$select[]` |  **Array** | | Return only a subset of fields. Example `...&$select[]=name,access` | |


> ### <code class="response">200</code> Response

```json
{
        "total": 2,
        "limit": 10,
        "skip": 0,
        "data": [
                {
                        "_id": "57ac6af1b5a3923c3daca930",
                        "access": "protected",
                        "url": "http://localhost:3030",
                        "context": "stage",
                        "redirect": "http://localhost:3030/-/success",
                        "name": "My First App",
                        "domain": "57a44beb37b3d9617ba11edd",
                        "owner": "57a9d3762dbff34cf00de6e0",
                        "updatedAt": "2016-08-11T12:09:21.883Z",
                        "createdAt": "2016-08-11T12:09:21.883Z",
                        "appType": "3Party"
                },
                {
                        "_id": "57ac6df210b47d6e3e80b0a7",
                        "access": "protected",
                        "url": "http://localhost:3030",
                        "context": "config",
                        "redirect": "http://localhost:3030/-/success",
                        "name": "My Second App",
                        "domain": "57a44beb37b3d9617ba11edd",
                        "owner": "57a9d3762dbff34cf00de6e0",
                        "updatedAt": "2016-08-11T12:22:10.609Z",
                        "createdAt": "2016-08-11T12:22:10.609Z",
                        "appType": "3Party",
                }
        ]
}
```

<aside class="response">Response</aside>

An expected successful response should result in a **`200`** header response.






## Get Single

<aside class="endpoint">
        <code>GET</code> /integration/:id
</aside>

<aside class="warning text">This is not implemented yet</aside>

