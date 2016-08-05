
# Errors

> Below is the typical structure of a JSON error response

```json
{
        "name": "NotFound",
        "message": "Not Found",
        "code": 404,
        "className": "not-found",
        "errors": {}
}
```

The Edumaps API uses the following error codes:


Error Code | Error Message | Meaning
---------- | ------------- | -------
400 | Bad Request | ...
401 | Unauthorized | ...
403 | Forbidden | ...
404 | Not Found | ...
405 | Method Not Allowed | ...
406 | Not Acceptable | ...
410 | Gone | ...
429 | Too Many Requests | ...
500 | Internal Server Error | We had a problem with our server. Try again later.
503 | Service Unavailable | We're temporarially offline for maintanance. Please try again later.


