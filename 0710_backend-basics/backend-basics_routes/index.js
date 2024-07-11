import { server } from "./server.js";

const port = 8001;

server.listen(port, () =>
  console.log(`Server is running at http://127.0.0.1:${port}`)
);
