import chalk from "chalk";

export const helpText = `
Usage: git-remote [options] [command] [args]

Options:

-h, --help \t output usage information

-V, --version \t output the version number

Commands:

open \t open the remote URL in the default web browser

Examples:

git-remote open \t open the remote URL in the default web browser
git-remote open -h \t output usage information
git-remote open -V \t output the version number
`;

export function noRemoteString(getFrom: string) {
  return chalk.cyanBright(
    `=== No Remotes Found with \`${chalk.bold.redBright(getFrom)}\` ===`,
  );
}
