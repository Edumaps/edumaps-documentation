
## Get All Users

<aside class="endpoint">
        <code>GET</code> /users
</aside>

This will get all users based on the logged in user and selected domain

> ### <code class="response">CURL</code> Request

```bash

curl -X GET "<-- endpoint here -->/users"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Domain: <-- jwt domain token -->"
```

<aside class="request">Request</aside>

> ### <code class="response">200</code> Response

```json

{
                "total": 2,
                "limit": 5,
                "skip": 0,
                "data": [
                                {
                                        "_id": "..."
                                        "username": "..."
                                        "email": "..."
                                        "activated": true
                                        "updatedAt": "2016-08-09T12:58:30.409Z"
                                        "createdAt": "2016-08-09T12:58:30.409Z"
                                        "belongsTo": [{...}, {...}]
                                },
                                {...}
                ]
}
```

<aside class="response">Response</aside>



### Query Options

These options are added to the endpoint such as `...?fieldName=test&$limit=10`


  | Type | Required | Description | Default | Options
- | ---- | -------- | ----------- | ------- | -------
`fieldName` | **String** | | Any field name within the collection can be passed in here | | See the response example
`$limit` | **Integer** | | Limit the result set by this amount. This is a part of pagination | `5` |
`$skip` |  **Integer** | | Skip through a number of records. Use this to navigate to paged result. This is a part of pagination | |
`$sort` |  **Object** | | List the field by which sorting should apply and the direction whether it should ASC or DESC. Example `..&$sort={name: 1}`. 1 is for ascending and -1 is for descending. Multiple values can be passed in | |
`$select[]` |  **Array** | | Return only a subset of fields. Example `...&$select[]=name,access` | |




## Get One User

<aside class="endpoint">
        <code>GET</code> /users/:id
</aside>

This fetches an individual user.

<aside class="warning text">This endpoint is restricted and only returns the logged in user details. All other suer details is not permitted</aside>


> ### <code class="response">CURL</code> Request

```bash

curl -X GET "<-- endpoint here -->/users/:id"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Domain: <-- jwt domain token -->"
```

<aside class="request">Request</aside>

> ### <code class="response">200</code> Response

```json

{
                "_id": "..."
                "username": "..."
                "email": "..."
                "activated": true
                "updatedAt": "2016-08-09T12:58:30.409Z"
                "createdAt": "2016-08-09T12:58:30.409Z"
                "belongsTo": [{...}, {...}]
}
```

<aside class="response">Response</aside>

