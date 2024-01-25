import { $ } from "bun";
import { createClickableLink } from "./utils/link";
import { orangeText } from "./utils/colors";
import chalk from "chalk";

/**
 * Represents a Git remote and provides methods to extract information from the remote string.
 */
export class GitRemote {
  gitRemoteString: string;
  /**
   * @param {string} gitRemoteString - The Git remote string to be parsed.
   */
  constructor(gitRemoteString: string) {
    this.gitRemoteString = gitRemoteString;
  }

  /**
   * Gets the Git remote name.
   * @returns {string} - The Git remote name.
   */
  get gitRemote(): string {
    return this.gitRemoteString.split(" ")[0];
  }

  /**
   * Gets the Git remote URL.
   * @returns {string} - The Git remote URL.
   */
  get gitRemoteUrl(): string {
    return this.gitRemote.split("@")[1];
  }

  /**
   * Gets the Git remote URL split into username and repository.
   * @returns {string[]} - An array containing the username and repository name.
   */
  get gitRemoteUrlSplit(): string[] {
    return this.gitRemoteUrl.split(":");
  }

  /**
   * Gets the Git remote username.
   * @returns {string} - The Git remote username.
   */
  get gitRemoteUsername(): string {
    return this.gitRemoteUrlSplit[0];
  }

  /**
   * Gets the Git remote repository name.
   * @returns {string} - The Git remote repository name.
   */
  get gitRemoteRepoName(): string {
    return this.gitRemoteUrlSplit[1].split(".")[0];
  }

  /**
   * Opens the remote URL in the default web browser.
   * @async
   */
  async openRemoteUrl() {
    const url = `https://${this.gitRemoteUsername}/${this.gitRemoteRepoName}`;
    console.log(
      `\nOpening URl for repo => ${chalk.greenBright(this.gitRemoteRepoName)}\n`
    );

    orangeText("Opening URL...");
    const link = createClickableLink(url, url);
    console.log(link);

    await $`open ${url}`;
  }
}
