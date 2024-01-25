import { $ } from "bun";
import { GitRemote } from "./gitRemote";
import chalk from "chalk";
import { noRemoteString } from "./help-text";

export async function createUrl(getFrom = "fetch") {
  const remoteUrl = $`git remote -v`.lines();
  let remotePrinted = false;

  for await (const remote of remoteUrl) {
    const getFromInRemote = remote.includes(getFrom);

    if (getFromInRemote) {
      const fetchRemoteUrl = `${remote.split("\t")[1]}`;
      const gitRemoteUrl = fetchRemoteUrl.split(" ")[0];
      const gitRemote = new GitRemote(gitRemoteUrl);
      await gitRemote.openRemoteUrl();
      return;
    } else {
      if (!remotePrinted && getFromInRemote) {
        const noRemoteText = noRemoteString(getFrom);
        console.log(noRemoteText);
      }

      remotePrinted = true;
      console.log(chalk.greenBright(remote));
      // return;
    }
  }
}
