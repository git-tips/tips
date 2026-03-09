# Branching

## List all branches that are already merged into master
```sh
git branch --merged master
```

---

## Remove branches that have already been merged with master
```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```
**Alternatives:**
```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

---

## List all branches and their upstreams, as well as last commit on branch
```sh
git branch -vv
```

---

## Track upstream branch
```sh
git branch -u origin/mybranch
```

---

## Delete local branch
```sh
git branch -d <local_branchname>
```

---

## Get list of all local and remote branches
```sh
git branch -a
```

---

## Get only remote branches
```sh
git branch -r
```

---

## Find out branches containing commit-hash
```sh
git branch -a --contains <commit-ish>
```
**Alternatives:**
```sh
git branch --contains <commit-ish>
```

---

## Rename a branch
```sh
git branch -m <new-branch-name>
```
**Alternatives:**
```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

---

## Archive the `master` branch
```sh
git archive master --format=zip --output=master.zip
```

---

## Delete local branches that has been squash and merged in the remote.
```sh
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```

---

## Export a branch with history to a file.
```sh
git bundle create <file> <branch-name>
```

---

## Get the name of current branch.
```sh
git rev-parse --abbrev-ref HEAD
```

---

## Show the most recent tag on the current branch.
```sh
git describe --tags --abbrev=0
```

---

## List all branch is WIP
```sh
git checkout master && git branch --no-merged
```

---

## Preformatted patch file.
```sh
git format-patch -M upstream..topic
```

---

## Switch to a branch (modern alternative to checkout)
```sh
git switch <branch-name>
```
**Alternatives:**
```sh
git switch -c <new-branch-name>
```

---

