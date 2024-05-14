// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { rocket } from "./core/rocket.js";

console.log(NFSAT.id);
console.log(FISHSAT.id);

// export default function launch() {}

loadPayload(NFSAT.id, FISHSAT.id);

fuel();

countdown(rocket.requiredCountdown);
