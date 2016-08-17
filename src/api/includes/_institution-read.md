
## Get All

<aside class="endpoint">
        <code>GET</code> /institutions
</aside>

This will get all institutions based on the logged in user and selected domain

> ### <code class="response">CURL</code> Request

```bash
# This is the call to authenticate a user
curl -X GET "<-- endpoint here -->/institutions"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Domain: <-- jwt domain token -->"
```

<aside class="request">Request</aside>

> ### <code class="response">200</code> Response

```json

{
                "_id": "<-- organisation id -->",
                "domain": "<-- organisation unique domain name -->",
                "updatedAt": "2016-08-05T08:18:51.612Z",
                "createdAt": "2016-08-05T08:18:51.612Z"
}
```

<aside class="response">Response</aside>

 | Type | Description
-------- | ---- | -----------
`_id` | **String** | The ID of the organisation
`domain` | **String** | The domain organisation


## Get One

<aside class="endpoint">
        <code>GET</code> /institution/:id
</aside>

This will get institution who's id is passed in so long as the user has access to that institution others a `404 Error` is returned.

> ### <code class="response">CURL</code> Request

```bash
# This is the call to authenticate a user
curl -X GET "<-- endpoint here -->/institution/:id"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Domain: <-- jwt domain token -->"
```

<aside class="request">Request</aside>

> ### <code class="response">200</code> Response

```json

{
                "_id": "<-- organisation id -->",
                "domain": "<-- organisation unique domain name -->",
                "updatedAt": "2016-08-05T08:18:51.612Z",
                "createdAt": "2016-08-05T08:18:51.612Z"
}
```

<aside class="response">Response</aside>

 | Type | Description
-------- | ---- | -----------
`_id` | **String** | The ID of the organisation
`domain` | **String** | The domain organisation



## Domain Selection Refresh

<aside class="endpoint">
        <code>GET</code> /institution/refresh
</aside>

Domain selection tokens expire after 16 hours. In order for the user to not require to re-select the domain you may pass their authenticated login session plus their previous domain selection token in order to recieve a refreshed token.

> ### <code class="response">CURL</code> Request

```bash
        # This is the call to re-authenticate a user using a previous authenticated token

        curl "<-- endpoint here -->/auth/local"
                -H "Accept: application/json"
                -H "Content-Type: application/json"
                -H "Authorisation: <-- jwt token -->"
                -H "Domain: <-- jwt domain token -->"
```

<aside class="request">Request</aside>

### Header Options

  | Required | Expected Value | Description
- | -------- | -------------- | -----------
`Authorisation` | <code class="required"></code>| a jwt token | a valid jwt token must be passed and this can be obtained from the fist time user login - see [login](#login) for details
`Domain` | <code class="required"></code>| a jwt token | a valid jwt token corresponding to the user's selected domain account


> ### <code class="response">200</code> Response

```json

{
        "token": "<-- jwt hashed token -->",
}
```

<aside class="response">Response</aside>

 | Type | Description
-------- | ---- | -----------
`token` | **String** | The authenticated domain selection token returned that can be used for all subsequent calls as the `Domain` header

