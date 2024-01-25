import chalk from "chalk";

export const helpText = `
Usage: gitgo [options]

Options:

${chalk.magenta(" -h, --help ")} \t\t output usage information

${chalk.magenta(
  " -f, --from, --from "
)} \t Remote URL to parse i.e: push, fetch, default's to fetch

Examples:

${chalk.green("gitgo")} \t\t open the remote URL in the default web browser
${chalk.green("gitgo -h")} \t output usage information
${chalk.green("gitgo -f")} \t change remote url to fetch from
`;

export function noRemoteString(getFrom: string) {
  return chalk.cyanBright(
    `=== No Remotes Found with \`${chalk.bold.redBright(getFrom)}\` ===`
  );
}
