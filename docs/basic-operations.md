# Basic Operations

## List of all files till a commit
```sh
git ls-tree --name-only -r <commit-ish>
```

---

## Quickly switch to the previous branch
```sh
git checkout -
```
**Alternatives:**
```sh
git checkout @{-1}
```

---

## Delete remote branch
```sh
git push origin --delete <remote_branchname>
```
**Alternatives:**
```sh
git push origin :<remote_branchname>
```
```sh
git branch -dr <remote/branch>
```

---

## Delete remote tag
```sh
git push origin :refs/tags/<tag-name>
```

---

## Undo local changes with the content in index(staging)
```sh
git checkout -- <file_name>
```

---

## Reword the previous commit message
```sh
git commit -v --amend
```

---

## See commit history for just the current branch
```sh
git cherry -v master
```

---

## Amend author.
```sh
git commit --amend --author='Author Name <email@address.com>'
```

---

## Stage parts of a changed file, instead of the entire file
```sh
git add -p
```

---

## Pick commits across branches using cherry-pick
```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

---

## Grab a single file from a stash
```sh
git checkout <stash@{n}> -- <file_path>
```
**Alternatives:**
```sh
git checkout stash@{0} -- <file_path>
```

---

## Create new working tree from a repository (git 2.5)
```sh
git worktree add -b <branch-name> <path> <start-point>
```

---

## Create new working tree from HEAD state
```sh
git worktree add --detach <path> HEAD
```

---

## Show all commits in the current branch yet to be merged to master
```sh
git cherry -v master
```
**Alternatives:**
```sh
git cherry -v master <branch-to-be-merged>
```

---

## Modify previous commit without modifying the commit message
```sh
git add --all && git commit --amend --no-edit
```

---

## Prunes references to remove branches that have been deleted in the remote.
```sh
git fetch -p
```
**Alternatives:**
```sh
git remote prune origin
```

---

## Retrieve the commit hash of the initial revision.
```sh
 git rev-list --reverse HEAD | head -1
```
**Alternatives:**
```sh
git rev-list --max-parents=0 HEAD
```
```sh
git log --pretty=oneline | tail -1 | cut -c 1-40
```
```sh
git log --pretty=oneline --reverse | head -1 | cut -c 1-40
```

---

## Import from a bundle
```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

---

## Ignore one file on commit (e.g. Changelog).
```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

---

## Fetch pull request by ID to a local branch
```sh
git fetch origin pull/<id>/head:<branch-name>
```
**Alternatives:**
```sh
git pull origin pull/<id>/head:<branch-name>
```

---

## Restore deleted file.
```sh
git checkout <deleting_commit> -- <file_path>
```

---

## Restore file to a specific commit-hash
```sh
git checkout <commit-ish> -- <file_path>
```

---

## Marks your commit as a fix of a previous commit.
```sh
git commit --fixup <SHA-1>
```

---

## Skip staging area during commit.
```sh
git commit --only <file_path>
```

---

## Interactive staging.
```sh
git add -i
```

---

## Status of ignored files.
```sh
git status --ignored
```

---

## Checkout a new branch without any history
```sh
git checkout --orphan <branch_name>
```

---

## Find guilty with binary search
```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

---

## Bypass pre-commit and commit-msg githooks
```sh
git commit --no-verify
```

---

## Clone a single branch
```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

---

## Create and switch new branch
```sh
git checkout -b <branch-name>
```
**Alternatives:**
```sh
git branch <branch-name> && git checkout <branch-name>
```
```sh
git switch -c <branch-name>
```

---

## Show all local branches ordered by recent commits
```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

---

## Clone a shallow copy of a repository
```sh
git clone https://github.com/user/repo.git --depth 1
```

---

## Force push to Remote Repository
```sh
git push -f <remote-name> <branch-name>
```

---

## Group commits by authors and title
```sh
git shortlog
```

---

## Forced push but still ensure you don't overwrite other's work
```sh
git push --force-with-lease <remote-name> <branch-name>
```

---

## Number of commits in a branch
```sh
git rev-list --count <branch-name>
```

---

## Add object notes
```sh
git notes add -m 'Note on the previous commit....'
```

---

## Apply commit from another repository
```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

---

## Specific fetch reference
```sh
git fetch origin master:refs/remotes/origin/mymaster
```

---

## Generates a summary of pending changes
```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

---

## Show git status short
```sh
git status --short --branch
```

---

## Checkout a commit prior to a day ago
```sh
git checkout master@{yesterday}
```

---

## Push the current branch to the same name on the remote repository
```sh
git push origin HEAD
```

---

## Push a new local branch to remote repository and track
```sh
git push -u origin <branch_name>
```

---

## Update a submodule to the latest commit
```sh
cd <path-to-submodule>
git pull origin <branch>
cd <root-of-your-main-project>
git add <path-to-submodule>
git commit -m "submodule updated"
```

---

## Duplicating a repository
```sh
git clone --bare https://github.com/exampleuser/old-repository.git

git push --mirror https://github.com/exampleuser/new-repository.git
```

---

