
# Errors

> Below is the typical structure of a JSON error response

```json
{
        "error": 400,
        "description": "Bad Request",
        "message": "Missing parameters ID"
}
```

<aside class="notice">This error section is stored in a separate file in `includes/_errors.md`. Slate allows you to optionally separate out your docs into many files...just save them to the `includes` folder and add them to the top of your `index.md`'s frontmatter. Files are included in the order listed.</aside>

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

