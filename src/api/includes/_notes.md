
# Important Usage Notes

## Authentication
### Authentication

Edumaps' users are grouped into organisations (known as `Domains`) depending on their domain login account (the associated registered email address). Therefore, to access and mutate particular datasets it is important to remember that after successful authentication every subsequent call that requires an authenticated user must also make the API request with a header property `Domain` included. This header is expected to be in a JSON Web Token format and can be found in the response object when the user first logs in.

#### [token refresh endpoint](#Domain-Selection-Refresh)

<aside class="warning text">Domain Selection Tokens expire after 16 hours for security purposes. Don't want your user to continually have to select the domain account? Then, simply pass the old token to the token refresh endpoint</aside>

```bash
curl "<-- any endpoint that requires an authenticated user -->"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Domain: <-- jwt domain token -->"
```

> Please note that the `Authorisation` token is also still required