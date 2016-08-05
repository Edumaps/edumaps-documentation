
# User

## Registration

<aside class="endpoint">
        <code>POST</code> /signup
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
        "_id": "<-- user id -->",
        "email": "<-- user email address -->",
        "updatedAt": "2016-08-05T08:18:51.612Z",
        "createdAt": "2016-08-05T08:18:51.612Z",
        "belongsTo": [... <-- array of organisation domains that user is associated to -->],
        "integrations": [... <-- array of services that user has enabled -->]
        ...
}
```

> Above is the typical response you will get after user registration.

<aside class="info">
        Please note, this endpoint is due to change to require users to verify (double opt-in) theirt email address
</aside>


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
