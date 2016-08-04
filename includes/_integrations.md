

# Integrations

## Get All Integrations

```bash
curl "http://example.com/api/integrations"
  -H "Authorization: q2sdaadsfsdf90qsqsqkjfds!dfewqkjr2344e5<"
```

```javascript

```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Uploader"
  },
  {
    "id": 2,
    "name": "Parser"
  }
]
```

This endpoint retrieves all available integrations.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_all | false | If set to true, the result will also include all third-party integrations.
available | true | If set to false, the result will include integrations that have already been enabled by the authenticated user.

<aside class="success">
Remember — a happy user is an authenticated user!
</aside>

## Get a Specific Integratation

```bash
curl "http://example.com/api/integrations/2"
  -H "Authorization: q2sdaadsfsdf90qsqsqkjfds!dfewqkjr2344e5<"
```

```javascript

```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Parser"
}
```

This endpoint retrieves a specific integration.

### HTTP Request

`GET http://example.com/integration/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the integration to retrieve
