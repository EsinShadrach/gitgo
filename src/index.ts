import { helpText } from "./help-text";
import { createUrl } from "./createUrl";

const cliArgs = process.argv.slice(2);

async function main() {
  for (const arg of cliArgs) {
    if (arg === "-h" || arg === "--help") {
      console.log(helpText);
      return;
    }

    if (arg === "--from" || arg === "-f" || arg === "--form") {
      const createFrom = cliArgs[1];
      createUrl(createFrom);
      return;
    }
    break;
  }

  createUrl();
}

main();

