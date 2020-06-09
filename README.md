# node-events_streams
Node.js: Introduction to Node.js, Events, and Streams

## Examples

### example01

Simple example simmulating a task processing and ending when is finished using events.

### example02

Node server example for uploading file

### example03

Node echo server

Server:

```Bash
npm start
```

Client:

```Bash
curl localhost:8000
```

### example04

Node log file server or upload file

Server:

```Bash
npm start
```

Client:

```Bash
curl -d 'Text to send to the log file' localhost:8000

curl --upload-file log_client.txt localhost:8000
```
