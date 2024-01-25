import { $ } from "bun";
import { GitRemote } from "./gitRemote";
import { helpText } from "./help-text";

const argurment = process.argv.slice(2);

argurment.forEach(async (arg) => {
  if (arg === "-h" || arg === "--help") {
    console.log(helpText);
  }
});

const remoteUrl = $`git remote -v`.lines();
for await (const remote of remoteUrl) {
  if (remote.includes("fetch")) {
    const fetchRemoteUrl = `${remote.split("\t")[1]}`;
    const gitRemoteUrl = fetchRemoteUrl.split(" ")[0];
    const gitRemote = new GitRemote(gitRemoteUrl);
    await gitRemote.openRemoteUrl();
  }
}

