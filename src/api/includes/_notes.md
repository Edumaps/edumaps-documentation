
# Important Usage Notes

## Authentication
### Authentication

Edumaps' users are grouped into organisations depending on their domain login (their registered email address). Therefore, to access and mutate particular datasets it is important to remember that after successful authentication every subsequent call after login that is requires an authenticated user must also request with a header property `Organisation` that is a JSON Web Token of what was recieved during the initial authentication process.

```bash
curl "<-- any endpoint that requires an authenticated user -->"
        -H "Accept: application/json"
        -H "Content-Type: application/json"
        -H "Authorisation: <-- jwt token -->"
        -H "Organisation: <-- jwt token -->"
```

> Please note that the `Authorisation` token is also still required