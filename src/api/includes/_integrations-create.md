
## Create

<aside class="endpoint">
        <code>POST</code> /integration
</aside>

The **integration** endpoint allows users to register a new application/integration to be run within the Edumaps ecosystem.


> ### <code class="response">CURL</code> Request

```bash
# This is the call to authenticate a user
curl "<-- endpoint here -->/integration"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Domain: <-- jwt domain token -->"
        -d ... see request data options
```

<aside class="request">Request</aside>

### Payload Options


  | Type | Required | Description | Default | Options
- | ---- | -------- | ----------- | ------- | -------
`email` | **String** | <code class="required"></code> | Registered user's email address | |
`access` | **String** | | This flag defines who can access and enable your app. Private is the owner (user) only, protected is for all users within the same organisation and public is accessible by all users. | `private` | `private` `protected` `public`
`url` | **String** |  <code class="required"></code> |  Enter the home url of your application / integration | |
`context` | **String** |  | This determines which area of the core Edumaps application the integration will appear | `stage` | `config` `stage`
`redirect` | **String** |  <code class="required"></code> |  This is location of your app that retrieves the authorisation grant token | |
`name` | **String** |  <code class="required"></code> |  Name your integration | |
`icon` | **String** |  | If you wish an icon to be shown to represent your integration then include the URL here. 128 x 128 is best size for the Edumaps application and is resized accordingly from there | |
`category` | **String** | | Category determines whether this is a third-party application or a Edumaps Core Integration | `3Party` | `3Party` `Core`


> ### <code class="response">201</code> Response

```json
{
        "access": "protected",
        "url": "http://localhost:3030",
        "redirect": "http://localhost:3030/-/success",
        "name": "My First App",
        "domain": "57a44beb37b3d9617ba11edd",
        "owner": "57a9d3762dbff34cf00de6e0",
        "_id": "57ac6eb976cbd3c33fb51a8d",
        "context": "stage",
        "category": "3Party"
}
```

<aside class="response">Response</aside>

An expected successful response should result in a **`201`** header response.



## Enable an Integration

<aside class="endpoint">
        <code>POST</code> /app/code/:id
</aside>

This enables an integration for the logged in user and creates a new access authorisation code on behalf of that integration for that user.


> ### <code class="response">CURL</code> Request

```bash
        curl -X POST "<-- endpoint here -->/app/code/:id"
                -H "Accept: application/json"
                -H "Content-Type: application/json"
```

> Remember to replace `:id` with the integration id which can be obtained from a lookup to [GET /integrations](#integrations)

<aside class="request">Request</aside>


> ### <code class="response">201</code> Response

```json
{
        "code": "jwt token"
}
```

<aside class="response">Response</aside>

An expected successful response should result in a **`201`** header response.

## Disable an Integration

<aside class="endpoint">
        <code>DELETE</code> /app/code/:codeid
</aside>

This disables an integration for the logged in user.


> ### <code class="response">CURL</code> Request

```bash
        curl -X DELETE "<-- endpoint here -->/app/code/:codeid"
                -H "Accept: application/json"
                -H "Content-Type: application/json"
```

> Remember to replace `:codeid` with the id of the enabled integration - not the integration id. These IDs can be obtained from a lookup to [GET /integrations/enabled](#integrations)

<aside class="request">Request</aside>


> ### <code class="response">200</code> Response

```json
{}
```

<aside class="response">Response</aside>


