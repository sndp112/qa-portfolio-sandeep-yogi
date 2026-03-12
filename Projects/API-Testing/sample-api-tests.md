# API Testing Example

Endpoint:
/api/login

Method:
POST

Request Body
{
  "email": "test@gmail.com",
  "password": "123456"
}

Expected Response
200 OK

Response Body
{
  "token": "authentication_token"
}

** {For firehouse need each time an auth token is needed for access when new variable using}**
