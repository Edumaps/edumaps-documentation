
## Create

<aside class="endpoint">
        <code>POST</code> /institution
</aside>

Use this endpoint to create a new organisation. If the organisation already exists it is simply returned.

> ### <code class="response">CURL</code> Request

```bash
# This is the call to authenticate a user
curl -X POST "<-- endpoint here -->/institution"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -d "email: <-- user's email address -->"
        -d "domain: <-- domain from user's email address -->"
```

<aside class="request">Request</aside>

You must pass in the request body an **`email`** or a **`domain`**.

### Payload Options


  | Required | Description
- | -------- | -----------
`email` or `domain` | <code class="required"></code> | User's email address or a domain name


> ### <code class="response">201</code> Response

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
`_id` | **String** | The ID of the newly created or returned organisation
`domain` | **String** | The domain extracted from the email address or passed in via `domain` is now the unique reference of the new organisation