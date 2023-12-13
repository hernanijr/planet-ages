
# Planet Ages

## Features

- **Multi-Planet Age Calculator**: Calculate a person's age on different planets based on the provided seconds and planetary information.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository:

 ```bash
  git clone https://github.com/hernanijr/planet-ages.git
  cd planet-ages
  ```

2. Running the Application
```bash
docker compose up app
```
The API should start at `http://localhost:3000`.

Planetary Age Calculation
To calculate a person's age on different planets, use the following endpoint:

- **Endpoint**: `/calculate-age`
- **Method**: `GET`
- **URL Params**: `seconds=[number]&type=[string]`
- **seconds**: Number of seconds
- **type**: Planet type (e.g., "Earth," "Venus," etc.)
- **Success Response**: `${number} Planet-years-old` 
- **Error Response**: `{
      message: 'Invalid input',
      error: 'Please provide valid seconds and planet type.',
      statusCode: 400 }`


Example:
```bash
curl http://localhost:3000/calculate-age?seconds=2500000000&type=Venus
```
**Response**:

```json
{
  48.74 Venus-years-old
}
```


3. Running the Tests
```bash
docker compose up test
```

## Stop the Container

```bash
docker-compose down
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
