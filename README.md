# How to create an HTTPS server in Node.js

This sample repository shows how to use [mkert](https://github.com/FiloSottile/mkcert) and [Doppler CLI](https://docs.doppler.com/docs/cli) to supply the TLS certificate and key for a Node.js HTTPS server.

At Doppler, we feel strongly that HTTPS should be used everywhere possible, including in development environments because it ensures that all traffic sent between your browser and development server will also be encrypted.

## Requirements

- [Doppler CLI](https://docs.doppler.com/docs/cli)
- [mkert](https://github.com/FiloSottile/mkcert)

## Setup

Create the Doppler project and configure the CLI to use the `node-https` project:

```sh
doppler import
doppler setup --project node-https --config dev
```

Create the localhost TLS certificate and key and import to Doppler:

```sh
mkcert localhost
```

Then import the TLS certificate and key to Doppler and remove the files:

```sh
cat localhost.pem | doppler secrets set TLS_CERT
cat localhost-key.pem | doppler secrets set TLS_KEY
rm localhost*.pem
```

(Optional): You can install the `dotenv` package if you'd like to test the Doppler CLI ephemeral secrets mount feature:

```sh
npm install
```

## Run

To supply secrets using environment variables (preferred):

```sh
doppler run -- node https.js
```

To supply secrets using an ephemeral .env file (automatically removed on process exit):

```sh
doppler-dev run --mount .env -- node https.js
```
