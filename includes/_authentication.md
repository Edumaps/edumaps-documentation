
# Authentication

## login

<aside class="endpoint">
        <code>POST</code> /auth/login
</aside>


```bash
# This is the call to authenticate a user
curl "<-- endpoint here -->/auth/local"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -d "email: <-- user's email address -->"
        -d "password: <-- user's password -->"
```

```json

{
        "token": "<-- jwt hashed token -->",
        "data": {
                "_id": "<-- user id -->",
                "email": "<-- user email address -->",
                "updatedAt": "2016-08-05T08:18:51.612Z",
                "createdAt": "2016-08-05T08:18:51.612Z",
                "belongsTo": [... <-- array of organisation domains that user is associated to -->],
                "integrations": [... <-- array of services that user has enabled -->]
                ...
        }
}
```

> Above is the typical response you will get after user authentication. Please note that the response may contain more data properties than what is shown

Edumaps API uses [jwt](https://jwt.io/) to provide access to user accounts and results from secured endpoints. The user authenticates by providing a username (typically their registered email address) and a password. Upon successful login a token is returned which is then used for all other endpoint calls.


### Header Options


  | Required | Expected Value | Description
- | -------- | -------------- | -----------
`Accept` | <code class="required"></code> | "application/json" |
`Content-Type` | <code class="required"></code>| "application/json" |



### Payload Options


  | Required | Description
- | -------- | -----------
`email` | <code class="required"></code> | Registered user's email address
`password` | <code class="required"></code> | Registered user's password



### Query Options

  | Required | Possible Values | Description
- | -------- | --------------- | -----------
| | |



## token

<aside class="endpoint">
        <code>POST</code> /auth/token
</aside>


```bash
# This is the call to re-authenticate a user using a previous authenticated token
curl "<-- endpoint here -->/auth/local"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
```

```json

{
        "token": "<-- a new jwt hashed token -->",
        "data": {
                "_id": "<-- user id -->",
                "email": "<-- user email address -->",
                "updatedAt": "2016-08-05T08:18:51.612Z",
                "createdAt": "2016-08-05T08:18:51.612Z",
                "belongsTo": [... <-- array of organisation domains that user is associated to -->],
                "integrations": [... <-- array of services that user has enabled -->]
                ...
        }
}
```

> Above is the typical response you will get after user re-authentication using a token access. Please note that the response may contain more data properties than what is shown

Edumaps API allows for token based access in order for users to allow third-party apps to log in and access the user data. This is not to be confused with oAuth permissions. It is also a means to re-authenticating and retriving the current user data of the user if this has been mutated in anyway since their last login. This endpoint can be used as a means to bypass requring the user to enter their credentials everytime.


### Header Options


  | Required | Expected Value | Description
- | -------- | -------------- | -----------
`Accept` | <code class="required"></code> | "application/json" |
`Content-Type` | <code class="required"></code>| "application/json" |
`Authorisation` | <code class="required"></code>| a jwt token | a valid jwt token must be passed and this can be obtained from the fist time user login - see [login](#login) for details



### Payload Options


  | Required | Description
- | -------- | -----------
|||



### Query Options

  | Required | Possible Values | Description
- | -------- | --------------- | -----------
|||

