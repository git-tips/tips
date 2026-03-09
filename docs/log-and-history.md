# Log and History

## Show helpful guides that come with Git
```sh
git help -g
```

---

## Search change by content
```sh
git log -S'<a term in the source>'
```

---

## Show changes over time for specific file
```sh
git log -p <file_name>
```

---

## List all the conflicted files
```sh
git diff --name-only --diff-filter=U
```

---

## List of all files changed in a commit
```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

---

## Unstaged changes since last commit
```sh
git diff
```

---

## Changes staged for commit
```sh
git diff --cached
```
**Alternatives:**
```sh
git diff --staged
```

---

## Show both staged and unstaged changes
```sh
git diff HEAD
```

---

## What changed since two weeks?
```sh
git log --no-merges --raw --since='2 weeks ago'
```
**Alternatives:**
```sh
git whatchanged --since='2 weeks ago'
```

---

## See all commits made since forking from master
```sh
git log --no-merges --stat --reverse master..
```

---

## Show all tracked files
```sh
git ls-files -t
```

---

## Show all untracked files
```sh
git ls-files --others
```

---

## Show all ignored files
```sh
git ls-files --others -i --exclude-standard
```

---

## Visualize the version tree.
```sh
git log --pretty=oneline --graph --decorate --all
```
**Alternatives:**
```sh
gitk --all
```
```sh
git log --graph --pretty=format:'%C(auto) %h | %s | %an | %ar%d'
```

---

## Visualize the tree including commits that are only referenced from reflogs
```sh
git log --graph --decorate --oneline $(git rev-list --walk-reflogs --all)
```

---

## Show inline word diff.
```sh
git diff --word-diff
```

---

## Show changes using common diff tools.
```sh
git difftool [-t <tool>] <commit1> <commit2> <path>
```

---

## Commits in Branch1 that are not in Branch2
```sh
git log Branch1 ^Branch2
```

---

## List n last commits
```sh
git log -<n>
```
**Alternatives:**
```sh
git log -n <n>
```

---

## Open all conflicted files in an editor.
```sh
git diff --name-only | uniq | xargs $EDITOR
```

---

## View the GPG signatures in the commit log
```sh
git log --show-signature
```

---

## Extract file from another branch.
```sh
git show <branch_name>:<file_name>
```

---

## List only the root and merge commits.
```sh
git log --first-parent
```

---

## List commits and changes to a specific file (even through renaming)
```sh
git log --follow -p -- <file_path>
```

---

## Search Commit log across all branches for given text
```sh
git log --all --grep='<given-text>'
```

---

## Get first commit in a branch (from master)
```sh
git log --oneline master..<branch-name> | tail -1
```
**Alternatives:**
```sh
git log --reverse master..<branch-name> | head -6
```

---

## Show the author, time and last revision made to each line of a given file
```sh
git blame <file-name>
```

---

## Show how many lines does an author contribute
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```
**Alternatives:**
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

---

## Show all the git-notes
```sh
git log --show-notes='*'
```

---

## List unpushed git commits
```sh
git log --branches --not --remotes
```
**Alternatives:**
```sh
git log @{u}..
```
```sh
git cherry -v
```

---

## Add everything, but whitespace changes
```sh
git diff --ignore-all-space | git apply --cached
```

---

## blame on certain range
```sh
git blame -L <start>,<end>
```

---

## Show a Git logical variable.
```sh
git var -l | <variable>
```

---

## Get the repo name.
```sh
git rev-parse --show-toplevel
```

---

## logs between date range
```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

---

## Exclude author from logs
```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)$'
```

---

## View expanded details of changes in last commit
```sh
git show
```

---

## Visualize each position of HEAD in the last 30 days
```sh
git reflog
```

---

