
## Login

<aside class="endpoint">
        <code>POST</code> /auth/login
</aside>

Use this endpoint to log in a user.

> ### <code class="response">CURL</code> Request

```bash
# This is the call to authenticate a user
curl "<-- endpoint here -->/auth/local"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -d "email: <-- user's email address -->"
        -d "password: <-- user's password -->"
```

<aside class="request">Request</aside>

You must pass in the request body **`email`** and **`password`**.

### Payload Options


  | Required | Description
- | -------- | -----------
`email` | <code class="required"></code> | Registered user's email address
`password` | <code class="required"></code> | Registered user's password


> ### <code class="response">201</code> Response

```json

{
        "token": "<-- jwt hashed token -->",
        "data": {
                "_id": "<-- user id -->",
                "username": "<-- user email address -->",
                "email": "<-- user email address -->",
                "updatedAt": "2016-08-05T08:18:51.612Z",
                "createdAt": "2016-08-05T08:18:51.612Z",
                "belongsTo": [... <-- array of organisation domains that user is associated to -->],
                "integrations": [... <-- array of services that user has enabled -->]
                ...
        }
}
```

> Above is the typical response you will get after a successful user authentication. Please note that the response may contain more data properties than what is shown and the user must have activated their account first

> ### <code class="response">401</code> Response

```json
{
        "name": "NotAuthenticated",
        "message": "Not Activated",
        "code": 401,
        "className": "not-authenticated",
        "errors": {}
}
```

<aside class="response">Response</aside>

 | Type | Description
-------- | ---- | -----------
`token` | **String** | The authenticated login token returned that can be used for all subsequent calls
`data._id` | **String** | The ID of the newly registered user
`data.username` | **String** | The username of the user. **This is currently automatically assigned the email address**
`data.email` | **String** | The email address registered
`data.belongsTo` | **[Object]** | An array of organisations that the user belongs to containing a `domain` and `domainId` key
`data.integrations` | **[Object]** | An array of services/integrations that the user is able to access or has enabled. This lists out the ....

<aside class="info">The above properties are just some of the properties that may be returned. Call the API endpoint to find and investigate the remaning properties that get returned</aside>

## Token

<aside class="endpoint">
        <code>POST</code> /auth/token
</aside>

Edumaps API allows for token based access in order for users to allow third-party apps to log in and access the user data. This is not to be confused with oAuth permissions. It is also a means to re-authenticating and retriving the current user data of the user if this has been mutated in anyway since their last login. This endpoint can be used as a means to bypass requring the user to enter their credentials everytime.

> ### <code class="response">CURL</code> Request

```bash
        # This is the call to re-authenticate a user using a previous authenticated token

        curl "<-- endpoint here -->/auth/local"
                -H "Accept: application/json"
                -H "Content-Type: application/json"
                -H "Authorisation: <-- jwt token -->"
```

<aside class="request">Request</aside>

### Header Options

  | Required | Expected Value | Description
- | -------- | -------------- | -----------
`Authorisation` | <code class="required"></code>| a jwt token | a valid jwt token must be passed and this can be obtained from the fist time user login - see [login](#login) for details


> ### <code class="response">201</code> Response

```json

{
        "token": "<-- jwt hashed token -->",
        "data": {
                "_id": "<-- user id -->",
                "username": "<-- user email address -->",
                "email": "<-- user email address -->",
                "updatedAt": "2016-08-05T08:18:51.612Z",
                "createdAt": "2016-08-05T08:18:51.612Z",
                "belongsTo": [... <-- array of organisation domains that user is associated to -->],
                "integrations": [... <-- array of services that user has enabled -->]
                ...
        }
}
```

> Above is the typical response you will get after a successful user authentication. Please note that the response may contain more data properties than what is shown and the user must have activated their account first

> ### <code class="response">401</code> Response

```json
{
        "name": "NotAuthenticated",
        "message": "Not Activated",
        "code": 401,
        "className": "not-authenticated",
        "errors": {}
}
```

<aside class="response">Response</aside>

 | Type | Description
-------- | ---- | -----------
`token` | **String** | The authenticated login token returned that can be used for all subsequent calls
`data._id` | **String** | The ID of the newly registered user
`data.username` | **String** | The username of the user. **This is currently automatically assigned the email address**
`data.email` | **String** | The email address registered
`data.belongsTo` | **[Object]** | An array of organisations that the user belongs to containing a `domain` and `domainId` key
`data.integrations` | **[Object]** | An array of services/integrations that the user is able to access or has enabled. This lists out the ....

<aside class="info">The above properties are just some of the properties that may be returned. Call the API endpoint to find and investigate the remaning properties that get returned</aside>

