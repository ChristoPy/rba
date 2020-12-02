# rba
Create Resource Based APIs.

## Installation
```npm install rba```

## Usage
```js
const RBA = require('rba');
const resources = require('path-to-resources/resources.json');

RBA(resources, 3000, {
  logger: true,
});
```

## API
```RBA([resources, port], serverOptions)```

## To do
[ ] Add better API documentation  
[ ] Add tests  
[ ] Add more examples  
[ ] Support multiple types of requests

## Version: 1.0.0
