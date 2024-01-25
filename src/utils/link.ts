import chalk from "chalk";
import terminalLink from "terminal-link";

export function createClickableLink(text: string, url: string) {
  return terminalLink(chalk.blue(text), url);
}
