const express = require("express");

const app = express();

/** Serve client static files */
app.use(express.static("static"));

////////////////////
// YOUR CODE HERE //
////////////////////

/** Run the server */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
