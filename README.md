## git-tips
> Collection of `git-tips`, want to add your tips? Checkout [contributing.md](./contributing.md)

[English](http://git.io/git-tips) | [中文](https://github.com/521xueweihan/git-tips) | [Русский](https://github.com/Imangazaliev/git-tips) | [한국어](https://github.com/mingrammer/git-tips) | [Tiếng Việt](https://github.com/hprobotic/git-tips) | [日本語](https://github.com/isotai/git-tips) | [नेपाली](https://github.com/amarduwal/git-tips) | [Polski](https://github.com/mbiesiad/tips) | [فارسی](https://github.com/javadnikbakht/git-tips)

### __Tools:__

* [git-tip](https://www.npmjs.com/package/git-tip) - A handy CLI to make optimum use of these tips. ([Here in Docker container](https://github.com/djoudi5/docker-git-tip))

📖 **[Read the interactive GitBook documentation here!](https://git-tips.github.io/tips/)**

P.S: All these commands are tested on `git version 2.7.4 (Apple Git-66)`.

## Table of Contents

* [Basic Operations](#basic-operations)
  * [List of all files till a commit](#list-of-all-files-till-a-commit)
  * [Quickly switch to the previous branch](#quickly-switch-to-the-previous-branch)
  * [Delete remote branch](#delete-remote-branch)
  * [Delete remote tag](#delete-remote-tag)
  * [Undo local changes with the content in index(staging)](#undo-local-changes-with-the-content-in-indexstaging)
  * [Reword the previous commit message](#reword-the-previous-commit-message)
  * [See commit history for just the current branch](#see-commit-history-for-just-the-current-branch)
  * [Amend author.](#amend-author)
  * [Stage parts of a changed file, instead of the entire file](#stage-parts-of-a-changed-file-instead-of-the-entire-file)
  * [Pick commits across branches using cherry-pick](#pick-commits-across-branches-using-cherry-pick)
  * [Grab a single file from a stash](#grab-a-single-file-from-a-stash)
  * [Create new working tree from a repository (git 2.5)](#create-new-working-tree-from-a-repository-git-25)
  * [Create new working tree from HEAD state](#create-new-working-tree-from-head-state)
  * [Show all commits in the current branch yet to be merged to master](#show-all-commits-in-the-current-branch-yet-to-be-merged-to-master)
  * [Modify previous commit without modifying the commit message](#modify-previous-commit-without-modifying-the-commit-message)
  * [Prunes references to remove branches that have been deleted in the remote.](#prunes-references-to-remove-branches-that-have-been-deleted-in-the-remote)
  * [Retrieve the commit hash of the initial revision.](#retrieve-the-commit-hash-of-the-initial-revision)
  * [Import from a bundle](#import-from-a-bundle)
  * [Ignore one file on commit (e.g. Changelog).](#ignore-one-file-on-commit-eg-changelog)
  * [Fetch pull request by ID to a local branch](#fetch-pull-request-by-id-to-a-local-branch)
  * [Restore deleted file.](#restore-deleted-file)
  * [Restore file to a specific commit-hash](#restore-file-to-a-specific-commit-hash)
  * [Marks your commit as a fix of a previous commit.](#marks-your-commit-as-a-fix-of-a-previous-commit)
  * [Skip staging area during commit.](#skip-staging-area-during-commit)
  * [Interactive staging.](#interactive-staging)
  * [Status of ignored files.](#status-of-ignored-files)
  * [Checkout a new branch without any history](#checkout-a-new-branch-without-any-history)
  * [Find guilty with binary search](#find-guilty-with-binary-search)
  * [Bypass pre-commit and commit-msg githooks](#bypass-pre-commit-and-commit-msg-githooks)
  * [Clone a single branch](#clone-a-single-branch)
  * [Create and switch new branch](#create-and-switch-new-branch)
  * [Show all local branches ordered by recent commits](#show-all-local-branches-ordered-by-recent-commits)
  * [Clone a shallow copy of a repository](#clone-a-shallow-copy-of-a-repository)
  * [Force push to Remote Repository](#force-push-to-remote-repository)
  * [Group commits by authors and title](#group-commits-by-authors-and-title)
  * [Forced push but still ensure you don't overwrite other's work](#forced-push-but-still-ensure-you-dont-overwrite-others-work)
  * [Number of commits in a branch](#number-of-commits-in-a-branch)
  * [Add object notes](#add-object-notes)
  * [Apply commit from another repository](#apply-commit-from-another-repository)
  * [Specific fetch reference](#specific-fetch-reference)
  * [Generates a summary of pending changes](#generates-a-summary-of-pending-changes)
  * [Show git status short](#show-git-status-short)
  * [Checkout a commit prior to a day ago](#checkout-a-commit-prior-to-a-day-ago)
  * [Push the current branch to the same name on the remote repository](#push-the-current-branch-to-the-same-name-on-the-remote-repository)
  * [Push a new local branch to remote repository and track](#push-a-new-local-branch-to-remote-repository-and-track)
  * [Update a submodule to the latest commit](#update-a-submodule-to-the-latest-commit)
  * [Duplicating a repository](#duplicating-a-repository)
* [Branching](#branching)
  * [List all branches that are already merged into master](#list-all-branches-that-are-already-merged-into-master)
  * [Remove branches that have already been merged with master](#remove-branches-that-have-already-been-merged-with-master)
  * [List all branches and their upstreams, as well as last commit on branch](#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
  * [Track upstream branch](#track-upstream-branch)
  * [Delete local branch](#delete-local-branch)
  * [Get list of all local and remote branches](#get-list-of-all-local-and-remote-branches)
  * [Get only remote branches](#get-only-remote-branches)
  * [Find out branches containing commit-hash](#find-out-branches-containing-commit-hash)
  * [Rename a branch](#rename-a-branch)
  * [Archive the `master` branch](#archive-the-master-branch)
  * [Delete local branches that has been squash and merged in the remote.](#delete-local-branches-that-has-been-squash-and-merged-in-the-remote)
  * [Export a branch with history to a file.](#export-a-branch-with-history-to-a-file)
  * [Get the name of current branch.](#get-the-name-of-current-branch)
  * [Show the most recent tag on the current branch.](#show-the-most-recent-tag-on-the-current-branch)
  * [List all branch is WIP](#list-all-branch-is-wip)
  * [Preformatted patch file.](#preformatted-patch-file)
  * [Switch to a branch (modern alternative to checkout)](#switch-to-a-branch-modern-alternative-to-checkout)
* [Log and History](#log-and-history)
  * [Show helpful guides that come with Git](#show-helpful-guides-that-come-with-git)
  * [Search change by content](#search-change-by-content)
  * [Show changes over time for specific file](#show-changes-over-time-for-specific-file)
  * [List all the conflicted files](#list-all-the-conflicted-files)
  * [List of all files changed in a commit](#list-of-all-files-changed-in-a-commit)
  * [Unstaged changes since last commit](#unstaged-changes-since-last-commit)
  * [Changes staged for commit](#changes-staged-for-commit)
  * [Show both staged and unstaged changes](#show-both-staged-and-unstaged-changes)
  * [What changed since two weeks?](#what-changed-since-two-weeks)
  * [See all commits made since forking from master](#see-all-commits-made-since-forking-from-master)
  * [Show all tracked files](#show-all-tracked-files)
  * [Show all untracked files](#show-all-untracked-files)
  * [Show all ignored files](#show-all-ignored-files)
  * [Visualize the version tree.](#visualize-the-version-tree)
  * [Visualize the tree including commits that are only referenced from reflogs](#visualize-the-tree-including-commits-that-are-only-referenced-from-reflogs)
  * [Show inline word diff.](#show-inline-word-diff)
  * [Show changes using common diff tools.](#show-changes-using-common-diff-tools)
  * [Commits in Branch1 that are not in Branch2](#commits-in-branch1-that-are-not-in-branch2)
  * [List n last commits](#list-n-last-commits)
  * [Open all conflicted files in an editor.](#open-all-conflicted-files-in-an-editor)
  * [View the GPG signatures in the commit log](#view-the-gpg-signatures-in-the-commit-log)
  * [Extract file from another branch.](#extract-file-from-another-branch)
  * [List only the root and merge commits.](#list-only-the-root-and-merge-commits)
  * [List commits and changes to a specific file (even through renaming)](#list-commits-and-changes-to-a-specific-file-even-through-renaming)
  * [Search Commit log across all branches for given text](#search-commit-log-across-all-branches-for-given-text)
  * [Get first commit in a branch (from master)](#get-first-commit-in-a-branch-from-master)
  * [Show the author, time and last revision made to each line of a given file](#show-the-author-time-and-last-revision-made-to-each-line-of-a-given-file)
  * [Show how many lines does an author contribute](#show-how-many-lines-does-an-author-contribute)
  * [Show all the git-notes](#show-all-the-git-notes)
  * [List unpushed git commits](#list-unpushed-git-commits)
  * [Add everything, but whitespace changes](#add-everything-but-whitespace-changes)
  * [blame on certain range](#blame-on-certain-range)
  * [Show a Git logical variable.](#show-a-git-logical-variable)
  * [Get the repo name.](#get-the-repo-name)
  * [logs between date range](#logs-between-date-range)
  * [Exclude author from logs](#exclude-author-from-logs)
  * [View expanded details of changes in last commit](#view-expanded-details-of-changes-in-last-commit)
  * [Visualize each position of HEAD in the last 30 days](#visualize-each-position-of-head-in-the-last-30-days)
* [Merging and Rebasing](#merging-and-rebasing)
  * [Rebases 'feature' to 'master' and merges it in to master ](#rebases-feature-to-master-and-merges-it-in-to-master-)
  * [Stash changes before rebasing](#stash-changes-before-rebasing)
  * [Squash fixup commits normal commits.](#squash-fixup-commits-normal-commits)
  * [Change previous two commits with an interactive rebase.](#change-previous-two-commits-with-an-interactive-rebase)
  * [Find common ancestor of two branches](#find-common-ancestor-of-two-branches)
  * [Change a branch base](#change-a-branch-base)
* [Miscellaneous](#miscellaneous)
  * [Everyday Git in twenty commands or so](#everyday-git-in-twenty-commands-or-so)
  * [Untrack files without deleting](#untrack-files-without-deleting)
  * [Don’t consider changes for tracked file.](#dont-consider-changes-for-tracked-file)
  * [Check if the change was a part of a release.](#check-if-the-change-was-a-part-of-a-release)
  * [List ignored files.](#list-ignored-files)
  * [Count unpacked number of objects and their disk consumption.](#count-unpacked-number-of-objects-and-their-disk-consumption)
  * [Prune all unreachable objects from the object database.](#prune-all-unreachable-objects-from-the-object-database)
  * [Instantly browse your working repository in gitweb.](#instantly-browse-your-working-repository-in-gitweb)
  * [Find lines matching the pattern (regex or string) in tracked files](#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
  * [Backup untracked files.](#backup-untracked-files)
  * [Send a collection of patches as emails](#send-a-collection-of-patches-as-emails)
* [Remotes](#remotes)
  * [Changing a remote's URL](#changing-a-remotes-url)
  * [Get list of all remote references](#get-list-of-all-remote-references)
  * [Adding Remote name](#adding-remote-name)
  * [List all currently configured remotes](#list-all-currently-configured-remotes)
  * [List references in a remote repository](#list-references-in-a-remote-repository)
  * [Refresh the list of remote branches](#refresh-the-list-of-remote-branches)
* [Setup and Config](#setup-and-config)
  * [Remove sensitive data from history, after a push](#remove-sensitive-data-from-history-after-a-push)
  * [Reset author, after author has been changed in the global config.](#reset-author-after-author-has-been-changed-in-the-global-config)
  * [Get git bash completion](#get-git-bash-completion)
  * [Git Aliases](#git-aliases)
  * [Always rebase instead of merge on pull.](#always-rebase-instead-of-merge-on-pull)
  * [List all the alias and configs.](#list-all-the-alias-and-configs)
  * [Make git case sensitive.](#make-git-case-sensitive)
  * [Add custom editors.](#add-custom-editors)
  * [Auto correct typos.](#auto-correct-typos)
  * [Reuse recorded resolution, record and reuse previous conflicts resolutions.](#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
  * [Remove entry in the global config.](#remove-entry-in-the-global-config)
  * [Ignore file mode changes on commits](#ignore-file-mode-changes-on-commits)
  * [Turn off git colored terminal output](#turn-off-git-colored-terminal-output)
  * [Specific color settings](#specific-color-settings)
  * [Alias: git undo](#alias-git-undo)
  * [Edit [local/global] git config](#edit-localglobal-git-config)
  * [List all git aliases](#list-all-git-aliases)
  * [Use SSH instead of HTTPs for remotes](#use-ssh-instead-of-https-for-remotes)
  * [Prevent auto replacing LF with CRLF](#prevent-auto-replacing-lf-with-crlf)
  * [Edit config for each level](#edit-config-for-each-level)
* [Stashing](#stashing)
  * [Saving current state of tracked files without committing](#saving-current-state-of-tracked-files-without-committing)
  * [Saving current state of unstaged changes to tracked files](#saving-current-state-of-unstaged-changes-to-tracked-files)
  * [Saving current state including untracked files](#saving-current-state-including-untracked-files)
  * [Saving current state with message](#saving-current-state-with-message)
  * [Saving current state of all files (ignored, untracked, and tracked)](#saving-current-state-of-all-files-ignored-untracked-and-tracked)
  * [Show list of all saved stashes](#show-list-of-all-saved-stashes)
  * [Show the contents of any stash in patch form](#show-the-contents-of-any-stash-in-patch-form)
  * [Apply any stash without deleting from the stashed list](#apply-any-stash-without-deleting-from-the-stashed-list)
  * [Apply last stashed state and delete it from stashed list](#apply-last-stashed-state-and-delete-it-from-stashed-list)
  * [Delete all stored stashes](#delete-all-stored-stashes)
* [Submodules and Subtrees](#submodules-and-subtrees)
  * [Update all the submodules](#update-all-the-submodules)
  * [Deploying git tracked subfolder to gh-pages](#deploying-git-tracked-subfolder-to-gh-pages)
  * [Adding a project to repo using subtree](#adding-a-project-to-repo-using-subtree)
  * [Get latest changes in your repo for a linked project using subtree](#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
* [Tagging](#tagging)
  * [Create local tag](#create-local-tag)
  * [Delete local tag](#delete-local-tag)
* [Undoing Changes](#undoing-changes)
  * [Sync with remote, overwrite local changes](#sync-with-remote-overwrite-local-changes)
  * [Git reset first commit](#git-reset-first-commit)
  * [Reset: preserve uncommitted local changes](#reset-preserve-uncommitted-local-changes)
  * [Revert: Undo a commit by creating a new commit](#revert-undo-a-commit-by-creating-a-new-commit)
  * [Reset: Discard commits, advised for private branch](#reset-discard-commits-advised-for-private-branch)
  * [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
  * [Forcefully remove untracked files](#forcefully-remove-untracked-files)
  * [Forcefully remove untracked directory](#forcefully-remove-untracked-directory)
  * [Undo assume-unchanged.](#undo-assume-unchanged)
  * [Clean the files from `.gitignore`.](#clean-the-files-from-gitignore)
  * [Dry run. (any command that supports dry-run flag should do.)](#dry-run-any-command-that-supports-dry-run-flag-should-do)
  * [Unstaging Staged file](#unstaging-staged-file)
  * [Revert: Reverting an entire merge](#revert-reverting-an-entire-merge)
  * [Restore file (modern alternative to reset/checkout --)](#restore-file-modern-alternative-to-resetcheckout---)

## Basic Operations

### List of all files till a commit
```sh
git ls-tree --name-only -r <commit-ish>
```

### Quickly switch to the previous branch
```sh
git checkout -
```
**Alternatives:**
```sh
git checkout @{-1}
```

### Delete remote branch
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

### Delete remote tag
```sh
git push origin :refs/tags/<tag-name>
```

### Undo local changes with the content in index(staging)
```sh
git checkout -- <file_name>
```

### Reword the previous commit message
```sh
git commit -v --amend
```

### See commit history for just the current branch
```sh
git cherry -v master
```

### Amend author.
```sh
git commit --amend --author='Author Name <email@address.com>'
```

### Stage parts of a changed file, instead of the entire file
```sh
git add -p
```

### Pick commits across branches using cherry-pick
```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

### Grab a single file from a stash
```sh
git checkout <stash@{n}> -- <file_path>
```
**Alternatives:**
```sh
git checkout stash@{0} -- <file_path>
```

### Create new working tree from a repository (git 2.5)
```sh
git worktree add -b <branch-name> <path> <start-point>
```

### Create new working tree from HEAD state
```sh
git worktree add --detach <path> HEAD
```

### Show all commits in the current branch yet to be merged to master
```sh
git cherry -v master
```
**Alternatives:**
```sh
git cherry -v master <branch-to-be-merged>
```

### Modify previous commit without modifying the commit message
```sh
git add --all && git commit --amend --no-edit
```

### Prunes references to remove branches that have been deleted in the remote.
```sh
git fetch -p
```
**Alternatives:**
```sh
git remote prune origin
```

### Retrieve the commit hash of the initial revision.
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

### Import from a bundle
```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

### Ignore one file on commit (e.g. Changelog).
```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

### Fetch pull request by ID to a local branch
```sh
git fetch origin pull/<id>/head:<branch-name>
```
**Alternatives:**
```sh
git pull origin pull/<id>/head:<branch-name>
```

### Restore deleted file.
```sh
git checkout <deleting_commit> -- <file_path>
```

### Restore file to a specific commit-hash
```sh
git checkout <commit-ish> -- <file_path>
```

### Marks your commit as a fix of a previous commit.
```sh
git commit --fixup <SHA-1>
```

### Skip staging area during commit.
```sh
git commit --only <file_path>
```

### Interactive staging.
```sh
git add -i
```

### Status of ignored files.
```sh
git status --ignored
```

### Checkout a new branch without any history
```sh
git checkout --orphan <branch_name>
```

### Find guilty with binary search
```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

### Bypass pre-commit and commit-msg githooks
```sh
git commit --no-verify
```

### Clone a single branch
```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

### Create and switch new branch
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

### Show all local branches ordered by recent commits
```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

### Clone a shallow copy of a repository
```sh
git clone https://github.com/user/repo.git --depth 1
```

### Force push to Remote Repository
```sh
git push -f <remote-name> <branch-name>
```

### Group commits by authors and title
```sh
git shortlog
```

### Forced push but still ensure you don't overwrite other's work
```sh
git push --force-with-lease <remote-name> <branch-name>
```

### Number of commits in a branch
```sh
git rev-list --count <branch-name>
```

### Add object notes
```sh
git notes add -m 'Note on the previous commit....'
```

### Apply commit from another repository
```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

### Specific fetch reference
```sh
git fetch origin master:refs/remotes/origin/mymaster
```

### Generates a summary of pending changes
```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

### Show git status short
```sh
git status --short --branch
```

### Checkout a commit prior to a day ago
```sh
git checkout master@{yesterday}
```

### Push the current branch to the same name on the remote repository
```sh
git push origin HEAD
```

### Push a new local branch to remote repository and track
```sh
git push -u origin <branch_name>
```

### Update a submodule to the latest commit
```sh
cd <path-to-submodule>
git pull origin <branch>
cd <root-of-your-main-project>
git add <path-to-submodule>
git commit -m "submodule updated"
```

### Duplicating a repository
```sh
git clone --bare https://github.com/exampleuser/old-repository.git

git push --mirror https://github.com/exampleuser/new-repository.git
```

## Branching

### List all branches that are already merged into master
```sh
git branch --merged master
```

### Remove branches that have already been merged with master
```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```
**Alternatives:**
```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

### List all branches and their upstreams, as well as last commit on branch
```sh
git branch -vv
```

### Track upstream branch
```sh
git branch -u origin/mybranch
```

### Delete local branch
```sh
git branch -d <local_branchname>
```

### Get list of all local and remote branches
```sh
git branch -a
```

### Get only remote branches
```sh
git branch -r
```

### Find out branches containing commit-hash
```sh
git branch -a --contains <commit-ish>
```
**Alternatives:**
```sh
git branch --contains <commit-ish>
```

### Rename a branch
```sh
git branch -m <new-branch-name>
```
**Alternatives:**
```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

### Archive the `master` branch
```sh
git archive master --format=zip --output=master.zip
```

### Delete local branches that has been squash and merged in the remote.
```sh
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```

### Export a branch with history to a file.
```sh
git bundle create <file> <branch-name>
```

### Get the name of current branch.
```sh
git rev-parse --abbrev-ref HEAD
```

### Show the most recent tag on the current branch.
```sh
git describe --tags --abbrev=0
```

### List all branch is WIP
```sh
git checkout master && git branch --no-merged
```

### Preformatted patch file.
```sh
git format-patch -M upstream..topic
```

### Switch to a branch (modern alternative to checkout)
```sh
git switch <branch-name>
```
**Alternatives:**
```sh
git switch -c <new-branch-name>
```

## Log and History

### Show helpful guides that come with Git
```sh
git help -g
```

### Search change by content
```sh
git log -S'<a term in the source>'
```

### Show changes over time for specific file
```sh
git log -p <file_name>
```

### List all the conflicted files
```sh
git diff --name-only --diff-filter=U
```

### List of all files changed in a commit
```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

### Unstaged changes since last commit
```sh
git diff
```

### Changes staged for commit
```sh
git diff --cached
```
**Alternatives:**
```sh
git diff --staged
```

### Show both staged and unstaged changes
```sh
git diff HEAD
```

### What changed since two weeks?
```sh
git log --no-merges --raw --since='2 weeks ago'
```
**Alternatives:**
```sh
git whatchanged --since='2 weeks ago'
```

### See all commits made since forking from master
```sh
git log --no-merges --stat --reverse master..
```

### Show all tracked files
```sh
git ls-files -t
```

### Show all untracked files
```sh
git ls-files --others
```

### Show all ignored files
```sh
git ls-files --others -i --exclude-standard
```

### Visualize the version tree.
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

### Visualize the tree including commits that are only referenced from reflogs
```sh
git log --graph --decorate --oneline $(git rev-list --walk-reflogs --all)
```

### Show inline word diff.
```sh
git diff --word-diff
```

### Show changes using common diff tools.
```sh
git difftool [-t <tool>] <commit1> <commit2> <path>
```

### Commits in Branch1 that are not in Branch2
```sh
git log Branch1 ^Branch2
```

### List n last commits
```sh
git log -<n>
```
**Alternatives:**
```sh
git log -n <n>
```

### Open all conflicted files in an editor.
```sh
git diff --name-only | uniq | xargs $EDITOR
```

### View the GPG signatures in the commit log
```sh
git log --show-signature
```

### Extract file from another branch.
```sh
git show <branch_name>:<file_name>
```

### List only the root and merge commits.
```sh
git log --first-parent
```

### List commits and changes to a specific file (even through renaming)
```sh
git log --follow -p -- <file_path>
```

### Search Commit log across all branches for given text
```sh
git log --all --grep='<given-text>'
```

### Get first commit in a branch (from master)
```sh
git log --oneline master..<branch-name> | tail -1
```
**Alternatives:**
```sh
git log --reverse master..<branch-name> | head -6
```

### Show the author, time and last revision made to each line of a given file
```sh
git blame <file-name>
```

### Show how many lines does an author contribute
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```
**Alternatives:**
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

### Show all the git-notes
```sh
git log --show-notes='*'
```

### List unpushed git commits
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

### Add everything, but whitespace changes
```sh
git diff --ignore-all-space | git apply --cached
```

### blame on certain range
```sh
git blame -L <start>,<end>
```

### Show a Git logical variable.
```sh
git var -l | <variable>
```

### Get the repo name.
```sh
git rev-parse --show-toplevel
```

### logs between date range
```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

### Exclude author from logs
```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)$'
```

### View expanded details of changes in last commit
```sh
git show
```

### Visualize each position of HEAD in the last 30 days
```sh
git reflog
```

## Merging and Rebasing

### Rebases 'feature' to 'master' and merges it in to master 
```sh
git rebase master feature && git checkout master && git merge -
```

### Stash changes before rebasing
```sh
git rebase --autostash
```

### Squash fixup commits normal commits.
```sh
git rebase -i --autosquash
```

### Change previous two commits with an interactive rebase.
```sh
git rebase --interactive HEAD~2
```

### Find common ancestor of two branches
```sh
git merge-base <branch-name> <other-branch-name>
```

### Change a branch base
```sh
git rebase --onto <new_base> <old_base>
```

## Miscellaneous

### Everyday Git in twenty commands or so
```sh
git help everyday
```

### Untrack files without deleting
```sh
git rm --cached <file_path>
```
**Alternatives:**
```sh
git rm --cached -r <directory_path>
```

### Don’t consider changes for tracked file.
```sh
git update-index --assume-unchanged <file_name>
```

### Check if the change was a part of a release.
```sh
git name-rev --name-only <SHA-1>
```

### List ignored files.
```sh
git check-ignore *
```

### Count unpacked number of objects and their disk consumption.
```sh
git count-objects --human-readable
```

### Prune all unreachable objects from the object database.
```sh
git gc --prune=now --aggressive
```

### Instantly browse your working repository in gitweb.
```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

### Find lines matching the pattern (regex or string) in tracked files
```sh
git grep --heading --line-number 'foo bar'
```

### Backup untracked files.
```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```

### Send a collection of patches as emails
```sh
git send-email [<options>] <file|directory>…

git send-email [<options>] <format-patch options>
```

## Remotes

### Changing a remote's URL
```sh
git remote set-url origin <URL>
```

### Get list of all remote references
```sh
git remote
```
**Alternatives:**
```sh
git remote show
```

### Adding Remote name
```sh
git remote add <remote-nickname> <remote-url>
```

### List all currently configured remotes
```sh
git remote -v
```

### List references in a remote repository
```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

### Refresh the list of remote branches
```sh
git remote update origin --prune
```

## Setup and Config

### Remove sensitive data from history, after a push
```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch <path-to-your-file>' --prune-empty --tag-name-filter cat -- --all && git push origin --force --all
```

### Reset author, after author has been changed in the global config.
```sh
git commit --amend --reset-author --no-edit
```

### Get git bash completion
```sh
curl -L http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

### Git Aliases
```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

### Always rebase instead of merge on pull.
```sh
git config --global pull.rebase true
```
**Alternatives:**
```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

### List all the alias and configs.
```sh
git config --list
```

### Make git case sensitive.
```sh
git config --global core.ignorecase false
```

### Add custom editors.
```sh
git config --global core.editor '$EDITOR'
```

### Auto correct typos.
```sh
git config --global help.autocorrect 1
```

### Reuse recorded resolution, record and reuse previous conflicts resolutions.
```sh
git config --global rerere.enabled 1
```

### Remove entry in the global config.
```sh
git config --global --unset <entry-name>
```

### Ignore file mode changes on commits
```sh
git config core.fileMode false
```

### Turn off git colored terminal output
```sh
git config --global color.ui false
```

### Specific color settings
```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

### Alias: git undo
```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

### Edit [local/global] git config
```sh
git config [--global] --edit
```

### List all git aliases
```sh
git config -l | grep alias | sed 's/^alias\.//g'
```
**Alternatives:**
```sh
git config -l | grep alias | cut -d '.' -f 2
```

### Use SSH instead of HTTPs for remotes
```sh
git config --global url.'git@github.com:'.insteadOf 'https://github.com/'
```

### Prevent auto replacing LF with CRLF
```sh
git config --global core.autocrlf false
```

### Edit config for each level
```sh
git config --edit --system

git config --edit --global

git config --edit --local
```

## Stashing

### Saving current state of tracked files without committing
```sh
git stash
```
**Alternatives:**
```sh
git stash push
```

### Saving current state of unstaged changes to tracked files
```sh
git stash -k
```
**Alternatives:**
```sh
git stash --keep-index
```
```sh
git stash push --keep-index
```

### Saving current state including untracked files
```sh
git stash -u
```
**Alternatives:**
```sh
git stash push -u
```
```sh
git stash push --include-untracked
```

### Saving current state with message
```sh
git stash push -m <message>
```
**Alternatives:**
```sh
git stash push --message <message>
```

### Saving current state of all files (ignored, untracked, and tracked)
```sh
git stash -a
```
**Alternatives:**
```sh
git stash --all
```
```sh
git stash push --all
```

### Show list of all saved stashes
```sh
git stash list
```

### Show the contents of any stash in patch form
```sh
git stash show -p <stash@{n}>
```

### Apply any stash without deleting from the stashed list
```sh
git stash apply <stash@{n}>
```

### Apply last stashed state and delete it from stashed list
```sh
git stash pop
```
**Alternatives:**
```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

### Delete all stored stashes
```sh
git stash clear
```
**Alternatives:**
```sh
git stash drop <stash@{n}>
```

## Submodules and Subtrees

### Update all the submodules
```sh
git submodule foreach git pull
```
**Alternatives:**
```sh
git submodule update --init --recursive
```
```sh
git submodule update --remote
```

### Deploying git tracked subfolder to gh-pages
```sh
git subtree push --prefix subfolder_name origin gh-pages
```
**Alternatives:**
```sh
git subtree push --prefix subfolder_name origin branch_name
```

### Adding a project to repo using subtree
```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

### Get latest changes in your repo for a linked project using subtree
```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Tagging

### Create local tag
```sh
git tag <tag-name>
```

### Delete local tag
```sh
git tag -d <tag-name>
```

## Undoing Changes

### Sync with remote, overwrite local changes
```sh
git fetch origin && git reset --hard origin/master && git clean -f -d
```

### Git reset first commit
```sh
git update-ref -d HEAD
```

### Reset: preserve uncommitted local changes
```sh
git reset --keep <commit>
```

### Revert: Undo a commit by creating a new commit
```sh
git revert <commit-ish>
```

### Reset: Discard commits, advised for private branch
```sh
git reset <commit-ish>
```

### Before deleting untracked files/directory, do a dry run to get the list of these files/directories
```sh
git clean -n
```

### Forcefully remove untracked files
```sh
git clean -f
```

### Forcefully remove untracked directory
```sh
git clean -f -d
```

### Undo assume-unchanged.
```sh
git update-index --no-assume-unchanged <file_name>
```

### Clean the files from `.gitignore`.
```sh
git clean -X -f
```

### Dry run. (any command that supports dry-run flag should do.)
```sh
git clean -fd --dry-run
```

### Unstaging Staged file
```sh
git reset HEAD <file-name>
```

### Revert: Reverting an entire merge
```sh
git revert -m 1 <commit-ish>
```

### Restore file (modern alternative to reset/checkout --)
```sh
git restore <file-name>
```
**Alternatives:**
```sh
git restore --staged <file-name>
```
