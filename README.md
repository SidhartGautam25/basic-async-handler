A wrapper that catches errors from async functions and sends them to your express error handlers automatically.

### Installation:

```
npm install basic-async-handler
```

### Usage:

```javascript
const asyncHandler = require("basic-async-handler");

express.get(
  "/some-route",
  asyncHandler(async (req, res, next) => {
    // some operation
    // no need use try catch block
    res.status(200).send({ key: "value" });
  })
);
```
