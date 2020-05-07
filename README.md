## git-tips
> Collection of `git-tips`, want to add your tips? Checkout [contributing.md](./contributing.md)

[English](http://git.io/git-tips) | [中文](https://github.com/521xueweihan/git-tips) | [Русский](https://github.com/Imangazaliev/git-tips) | [한국어](https://github.com/mingrammer/git-tips) | [Tiếng Việt](https://github.com/hprobotic/git-tips) | [日本語](https://github.com/isotai/git-tips) | [नेपाली](https://github.com/amarduwal/git-tips) | [Polski](https://github.com/mbiesiad/tips)

### __Tools:__

* [git-tip](https://www.npmjs.com/package/git-tip) - A handy CLI to make optimum use of these tips. ([Here in Docker container](https://github.com/djoudi5/docker-git-tip))

P.S: All these commands are tested on `git version 2.7.4 (Apple Git-66)`.

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
* [Everyday Git in twenty commands or so](#everyday-git-in-twenty-commands-or-so)
* [Show helpful guides that come with Git](#show-helpful-guides-that-come-with-git)
* [Search change by content](#search-change-by-content)
* [Show changes over time for specific file](#show-changes-over-time-for-specific-file)
* [Remove sensitive data from history, after a push](#remove-sensitive-data-from-history-after-a-push)
* [Sync with remote, overwrite local changes](#sync-with-remote-overwrite-local-changes)
* [List of all files till a commit](#list-of-all-files-till-a-commit)
* [Git reset first commit](#git-reset-first-commit)
* [Reset: preserve uncommitted local changes](#reset-preserve-uncommitted-local-changes)
* [List all the conflicted files](#list-all-the-conflicted-files)
* [List of all files changed in a commit](#list-of-all-files-changed-in-a-commit)
* [Unstaged changes since last commit](#unstaged-changes-since-last-commit)
* [Changes staged for commit](#changes-staged-for-commit)
* [Show both staged and unstaged changes](#show-both-staged-and-unstaged-changes)
* [List all branches that are already merged into master](#list-all-branches-that-are-already-merged-into-master)
* [Quickly switch to the previous branch](#quickly-switch-to-the-previous-branch)
* [Remove branches that have already been merged with master](#remove-branches-that-have-already-been-merged-with-master)
* [List all branches and their upstreams, as well as last commit on branch](#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
* [Track upstream branch](#track-upstream-branch)
* [Delete local branch](#delete-local-branch)
* [Delete remote branch](#delete-remote-branch)
* [Delete local tag](#delete-local-tag)
* [Delete remote tag](#delete-remote-tag)
* [Undo local changes with the last content in head](#undo-local-changes-with-the-last-content-in-head)
* [Revert: Undo a commit by creating a new commit](#revert-undo-a-commit-by-creating-a-new-commit)
* [Reset: Discard commits, advised for private branch](#reset-discard-commits-advised-for-private-branch)
* [Reword the previous commit message](#reword-the-previous-commit-message)
* [See commit history for just the current branch](#see-commit-history-for-just-the-current-branch)
* [Amend author.](#amend-author)
* [Reset author, after author has been changed in the global config.](#reset-author-after-author-has-been-changed-in-the-global-config)
* [Changing a remote's URL](#changing-a-remotes-url)
* [Get list of all remote references](#get-list-of-all-remote-references)
* [Get list of all local and remote branches](#get-list-of-all-local-and-remote-branches)
* [Get only remote branches](#get-only-remote-branches)
* [Stage parts of a changed file, instead of the entire file](#stage-parts-of-a-changed-file-instead-of-the-entire-file)
* [Get git bash completion](#get-git-bash-completion)
* [What changed since two weeks?](#what-changed-since-two-weeks)
* [See all commits made since forking from master](#see-all-commits-made-since-forking-from-master)
* [Pick commits across branches using cherry-pick](#pick-commits-across-branches-using-cherry-pick)
* [Find out branches containing commit-hash](#find-out-branches-containing-commit-hash)
* [Git Aliases](#git-aliases)
* [Saving current state of tracked files without commiting](#saving-current-state-of-tracked-files-without-commiting)
* [Saving current state of unstaged changes to tracked files](#saving-current-state-of-unstaged-changes-to-tracked-files)
* [Saving current state including untracked files](#saving-current-state-including-untracked-files)
* [Saving current state with message](#saving-current-state-with-message)
* [Saving current state of all files (ignored, untracked, and tracked)](#saving-current-state-of-all-files-ignored-untracked-and-tracked)
* [Show list of all saved stashes](#show-list-of-all-saved-stashes)
* [Apply any stash without deleting from the stashed list](#apply-any-stash-without-deleting-from-the-stashed-list)
* [Apply last stashed state and delete it from stashed list](#apply-last-stashed-state-and-delete-it-from-stashed-list)
* [Delete all stored stashes](#delete-all-stored-stashes)
* [Grab a single file from a stash](#grab-a-single-file-from-a-stash)
* [Show all tracked files](#show-all-tracked-files)
* [Show all untracked files](#show-all-untracked-files)
* [Show all ignored files](#show-all-ignored-files)
* [Create new working tree from a repository (git 2.5)](#create-new-working-tree-from-a-repository-git-25)
* [Create new working tree from HEAD state](#create-new-working-tree-from-head-state)
* [Untrack files without deleting](#untrack-files-without-deleting)
* [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
* [Forcefully remove untracked files](#forcefully-remove-untracked-files)
* [Forcefully remove untracked directory](#forcefully-remove-untracked-directory)
* [Update all the submodules](#update-all-the-submodules)
* [Show all commits in the current branch yet to be merged to master](#show-all-commits-in-the-current-branch-yet-to-be-merged-to-master)
* [Rename a branch](#rename-a-branch)
* [Rebases 'feature' to 'master' and merges it in to master ](#rebases-feature-to-master-and-merges-it-in-to-master)
* [Archive the `master` branch](#archive-the-master-branch)
* [Modify previous commit without modifying the commit message](#modify-previous-commit-without-modifying-the-commit-message)
* [Prunes references to remote branches that have been deleted in the remote.](#prunes-references-to-remote-branches-that-have-been-deleted-in-the-remote)
* [Retrieve the commit hash of the initial revision.](#retrieve-the-commit-hash-of-the-initial-revision)
* [Visualize the version tree.](#visualize-the-version-tree)
* [Visualize the tree including commits that are only referenced from reflogs](#visualize-the-tree-including-commits-that-are-only-referenced-from-reflogs)
* [Deploying git tracked subfolder to gh-pages](#deploying-git-tracked-subfolder-to-gh-pages)
* [Adding a project to repo using subtree](#adding-a-project-to-repo-using-subtree)
* [Get latest changes in your repo for a linked project using subtree](#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
* [Export a branch with history to a file.](#export-a-branch-with-history-to-a-file)
* [Import from a bundle](#import-from-a-bundle)
* [Get the name of current branch.](#get-the-name-of-current-branch)
* [Ignore one file on commit (e.g. Changelog).](#ignore-one-file-on-commit-eg-changelog)
* [Stash changes before rebasing](#stash-changes-before-rebasing)
* [Fetch pull request by ID to a local branch](#fetch-pull-request-by-id-to-a-local-branch)
* [Show the most recent tag on the current branch.](#show-the-most-recent-tag-on-the-current-branch)
* [Show inline word diff.](#show-inline-word-diff)
* [Show changes using common diff tools.](#show-changes-using-common-diff-tools)
* [Don’t consider changes for tracked file.](#dont-consider-changes-for-tracked-file)
* [Undo assume-unchanged.](#undo-assume-unchanged)
* [Clean the files from `.gitignore`.](#clean-the-files-from-gitignore)
* [Restore deleted file.](#restore-deleted-file)
* [Restore file to a specific commit-hash](#restore-file-to-a-specific-commit-hash)
* [Always rebase instead of merge on pull.](#always-rebase-instead-of-merge-on-pull)
* [List all the alias and configs.](#list-all-the-alias-and-configs)
* [Make git case sensitive.](#make-git-case-sensitive)
* [Add custom editors.](#add-custom-editors)
* [Auto correct typos.](#auto-correct-typos)
* [Check if the change was a part of a release.](#check-if-the-change-was-a-part-of-a-release)
* [Dry run. (any command that supports dry-run flag should do.)](#dry-run-any-command-that-supports-dry-run-flag-should-do)
* [Marks your commit as a fix of a previous commit.](#marks-your-commit-as-a-fix-of-a-previous-commit)
* [Squash fixup commits normal commits.](#squash-fixup-commits-normal-commits)
* [Skip staging area during commit.](#skip-staging-area-during-commit)
* [Interactive staging.](#interactive-staging)
* [List ignored files.](#list-ignored-files)
* [Status of ignored files.](#status-of-ignored-files)
* [Commits in Branch1 that are not in Branch2](#commits-in-branch1-that-are-not-in-branch2)
* [List n last commits](#list-n-last-commits)
* [Reuse recorded resolution, record and reuse previous conflicts resolutions.](#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
* [Open all conflicted files in an editor.](#open-all-conflicted-files-in-an-editor)
* [Count unpacked number of objects and their disk consumption.](#count-unpacked-number-of-objects-and-their-disk-consumption)
* [Prune all unreachable objects from the object database.](#prune-all-unreachable-objects-from-the-object-database)
* [Instantly browse your working repository in gitweb.](#instantly-browse-your-working-repository-in-gitweb)
* [View the GPG signatures in the commit log](#view-the-gpg-signatures-in-the-commit-log)
* [Remove entry in the global config.](#remove-entry-in-the-global-config)
* [Checkout a new branch without any history](#checkout-a-new-branch-without-any-history)
* [Extract file from another branch.](#extract-file-from-another-branch)
* [List only the root and merge commits.](#list-only-the-root-and-merge-commits)
* [Change previous two commits with an interactive rebase.](#change-previous-two-commits-with-an-interactive-rebase)
* [List all branch is WIP](#list-all-branch-is-wip)
* [Find guilty with binary search](#find-guilty-with-binary-search)
* [Bypass pre-commit and commit-msg githooks](#bypass-pre-commit-and-commit-msg-githooks)
* [List commits and changes to a specific file (even through renaming)](#list-commits-and-changes-to-a-specific-file-even-through-renaming)
* [Clone a single branch](#clone-a-single-branch)
* [Create and switch new branch](#create-and-switch-new-branch)
* [Ignore file mode changes on commits](#ignore-file-mode-changes-on-commits)
* [Turn off git colored terminal output](#turn-off-git-colored-terminal-output)
* [Specific color settings](#specific-color-settings)
* [Show all local branches ordered by recent commits](#show-all-local-branches-ordered-by-recent-commits)
* [Find lines matching the pattern (regex or string) in tracked files](#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
* [Clone a shallow copy of a repository](#clone-a-shallow-copy-of-a-repository)
* [Search Commit log across all branches for given text](#search-commit-log-across-all-branches-for-given-text)
* [Get first commit in a branch (from master)](#get-first-commit-in-a-branch-from-master)
* [Unstaging Staged file](#unstaging-staged-file)
* [Force push to Remote Repository](#force-push-to-remote-repository)
* [Adding Remote name](#adding-remote-name)
* [List all currently configured remotes](#list-all-currently-configured-remotes)
* [Show the author, time and last revision made to each line of a given file](#show-the-author-time-and-last-revision-made-to-each-line-of-a-given-file)
* [Group commits by authors and title](#group-commits-by-authors-and-title)
* [Forced push but still ensure you don't overwrite other's work](#forced-push-but-still-ensure-you-dont-overwrite-others-work)
* [Show how many lines does an author contribute](#show-how-many-lines-does-an-author-contribute)
* [Revert: Reverting an entire merge](#revert-reverting-an-entire-merge)
* [Number of commits in a branch](#number-of-commits-in-a-branch)
* [Alias: git undo](#alias-git-undo)
* [Add object notes](#add-object-notes)
* [Show all the git-notes](#show-all-the-git-notes)
* [Apply commit from another repository](#apply-commit-from-another-repository)
* [Specific fetch reference](#specific-fetch-reference)
* [Find common ancestor of two branches](#find-common-ancestor-of-two-branches)
* [List unpushed git commits](#list-unpushed-git-commits)
* [Add everything, but whitespace changes](#add-everything-but-whitespace-changes)
* [Edit [local/global] git config](#edit-localglobal-git-config)
* [blame on certain range](#blame-on-certain-range)
* [Show a Git logical variable.](#show-a-git-logical-variable)
* [Preformatted patch file.](#preformatted-patch-file)
* [Get the repo name.](#get-the-repo-name)
* [logs between date range](#logs-between-date-range)
* [Exclude author from logs](#exclude-author-from-logs)
* [Generates a summary of pending changes](#generates-a-summary-of-pending-changes)
* [List references in a remote repository](#list-references-in-a-remote-repository)
* [Backup untracked files.](#backup-untracked-files)
* [List all git aliases](#list-all-git-aliases)
* [Show git status short](#show-git-status-short)
* [Checkout a commit prior to a day ago](#checkout-a-commit-prior-to-a-day-ago)
* [Push a new local branch to remote repository and track](#push-a-new-local-branch-to-remote-repository-and-track)
* [Change a branch base](#change-a-branch-base)
* [Use SSH instead of HTTPs for remotes](#use-ssh-instead-of-https-for-remotes)
* [Update a submodule to the latest commit](#update-a-submodule-to-the-latest-commit)
* [Prevent auto replacing LF with CRLF](#prevent-auto-replacing-lf-with-crlf)

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->


<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## Everyday Git in twenty commands or so
```sh
git help everyday
```

## Show helpful guides that come with Git
```sh
git help -g
```

## Search change by content
```sh
git log -S'<a term in the source>'
```

## Show changes over time for specific file
```sh
git log -p <file_name>
```

## Remove sensitive data from history, after a push
```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch <path-to-your-file>' --prune-empty --tag-name-filter cat -- --all && git push origin --force --all
```

## Sync with remote, overwrite local changes
```sh
git fetch origin && git reset --hard origin/master && git clean -f -d
```

## List of all files till a commit
```sh
git ls-tree --name-only -r <commit-ish>
```

## Git reset first commit
```sh
git update-ref -d HEAD
```

## Reset: preserve uncommitted local changes
```sh
git reset --keep <commit>
```

## List all the conflicted files
```sh
git diff --name-only --diff-filter=U
```

## List of all files changed in a commit
```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

## Unstaged changes since last commit
```sh
git diff
```

## Changes staged for commit
```sh
git diff --cached
```


__Alternatives:__
```sh
git diff --staged
```

## Show both staged and unstaged changes
```sh
git diff HEAD
```

## List all branches that are already merged into master
```sh
git branch --merged master
```

## Quickly switch to the previous branch
```sh
git checkout -
```


__Alternatives:__
```sh
git checkout @{-1}
```

## Remove branches that have already been merged with master
```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```


__Alternatives:__
```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

## List all branches and their upstreams, as well as last commit on branch
```sh
git branch -vv
```

## Track upstream branch
```sh
git branch -u origin/mybranch
```

## Delete local branch
```sh
git branch -d <local_branchname>
```

## Delete remote branch
```sh
git push origin --delete <remote_branchname>
```


__Alternatives:__
```sh
git push origin :<remote_branchname>
```


```sh
git branch -dr <remote/branch>
```

## Delete local tag
```sh
git tag -d <tag-name>
```

## Delete remote tag
```sh
git push origin :refs/tags/<tag-name>
```

## Undo local changes with the last content in head
```sh
git checkout -- <file_name>
```

## Revert: Undo a commit by creating a new commit
```sh
git revert <commit-ish>
```

## Reset: Discard commits, advised for private branch
```sh
git reset <commit-ish>
```

## Reword the previous commit message
```sh
git commit -v --amend
```

## See commit history for just the current branch
```sh
git cherry -v master
```

## Amend author.
```sh
git commit --amend --author='Author Name <email@address.com>'
```

## Reset author, after author has been changed in the global config.
```sh
git commit --amend --reset-author --no-edit
```

## Changing a remote's URL
```sh
git remote set-url origin <URL>
```

## Get list of all remote references
```sh
git remote
```


__Alternatives:__
```sh
git remote show
```

## Get list of all local and remote branches
```sh
git branch -a
```

## Get only remote branches
```sh
git branch -r
```

## Stage parts of a changed file, instead of the entire file
```sh
git add -p
```

## Get git bash completion
```sh
curl -L http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

## What changed since two weeks?
```sh
git log --no-merges --raw --since='2 weeks ago'
```


__Alternatives:__
```sh
git whatchanged --since='2 weeks ago'
```

## See all commits made since forking from master
```sh
git log --no-merges --stat --reverse master..
```

## Pick commits across branches using cherry-pick
```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

## Find out branches containing commit-hash
```sh
git branch -a --contains <commit-ish>
```


__Alternatives:__
```sh
git branch --contains <commit-ish>
```

## Git Aliases
```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

## Saving current state of tracked files without commiting
```sh
git stash
```


__Alternatives:__
```sh
git stash save
```

## Saving current state of unstaged changes to tracked files
```sh
git stash -k
```


__Alternatives:__
```sh
git stash --keep-index
```


```sh
git stash save --keep-index
```

## Saving current state including untracked files
```sh
git stash -u
```


__Alternatives:__
```sh
git stash save -u
```


```sh
git stash save --include-untracked
```

## Saving current state with message
```sh
git stash save <message>
```

## Saving current state of all files (ignored, untracked, and tracked)
```sh
git stash -a
```


__Alternatives:__
```sh
git stash --all
```


```sh
git stash save --all
```

## Show list of all saved stashes
```sh
git stash list
```

## Apply any stash without deleting from the stashed list
```sh
git stash apply <stash@{n}>
```

## Apply last stashed state and delete it from stashed list
```sh
git stash pop
```


__Alternatives:__
```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

## Delete all stored stashes
```sh
git stash clear
```


__Alternatives:__
```sh
git stash drop <stash@{n}>
```

## Grab a single file from a stash
```sh
git checkout <stash@{n}> -- <file_path>
```


__Alternatives:__
```sh
git checkout stash@{0} -- <file_path>
```

## Show all tracked files
```sh
git ls-files -t
```

## Show all untracked files
```sh
git ls-files --others
```

## Show all ignored files
```sh
git ls-files --others -i --exclude-standard
```

## Create new working tree from a repository (git 2.5)
```sh
git worktree add -b <branch-name> <path> <start-point>
```

## Create new working tree from HEAD state
```sh
git worktree add --detach <path> HEAD
```

## Untrack files without deleting
```sh
git rm --cached <file_path>
```


__Alternatives:__
```sh
git rm --cached -r <directory_path>
```

## Before deleting untracked files/directory, do a dry run to get the list of these files/directories
```sh
git clean -n
```

## Forcefully remove untracked files
```sh
git clean -f
```

## Forcefully remove untracked directory
```sh
git clean -f -d
```

## Update all the submodules
```sh
git submodule foreach git pull
```


__Alternatives:__
```sh
git submodule update --init --recursive
```


```sh
git submodule update --remote
```

## Show all commits in the current branch yet to be merged to master
```sh
git cherry -v master
```


__Alternatives:__
```sh
git cherry -v master <branch-to-be-merged>
```

## Rename a branch
```sh
git branch -m <new-branch-name>
```


__Alternatives:__
```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

## Rebases 'feature' to 'master' and merges it in to master 
```sh
git rebase master feature && git checkout master && git merge -
```

## Archive the `master` branch
```sh
git archive master --format=zip --output=master.zip
```

## Modify previous commit without modifying the commit message
```sh
git add --all && git commit --amend --no-edit
```

## Prunes references to remote branches that have been deleted in the remote.
```sh
git fetch -p
```


__Alternatives:__
```sh
git remote prune origin
```

## Retrieve the commit hash of the initial revision.
```sh
 git rev-list --reverse HEAD | head -1
```


__Alternatives:__
```sh
git rev-list --max-parents=0 HEAD
```


```sh
git log --pretty=oneline | tail -1 | cut -c 1-40
```


```sh
git log --pretty=oneline --reverse | head -1 | cut -c 1-40
```

## Visualize the version tree.
```sh
git log --pretty=oneline --graph --decorate --all
```


__Alternatives:__
```sh
gitk --all
```


```sh
git log --graph --pretty=format:'%C(auto) %h | %s | %an | %ar%d'
```

## Visualize the tree including commits that are only referenced from reflogs
```sh
git log --graph --decorate --oneline $(git rev-list --walk-reflogs --all)
```

## Deploying git tracked subfolder to gh-pages
```sh
git subtree push --prefix subfolder_name origin gh-pages
```

## Adding a project to repo using subtree
```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Get latest changes in your repo for a linked project using subtree
```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## Export a branch with history to a file.
```sh
git bundle create <file> <branch-name>
```

## Import from a bundle
```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

## Get the name of current branch.
```sh
git rev-parse --abbrev-ref HEAD
```

## Ignore one file on commit (e.g. Changelog).
```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

## Stash changes before rebasing
```sh
git rebase --autostash
```

## Fetch pull request by ID to a local branch
```sh
git fetch origin pull/<id>/head:<branch-name>
```


__Alternatives:__
```sh
git pull origin pull/<id>/head:<branch-name>
```

## Show the most recent tag on the current branch.
```sh
git describe --tags --abbrev=0
```

## Show inline word diff.
```sh
git diff --word-diff
```

## Show changes using common diff tools.
```sh
git difftool [-t <tool>] <commit1> <commit2> <path>
```

## Don’t consider changes for tracked file.
```sh
git update-index --assume-unchanged <file_name>
```

## Undo assume-unchanged.
```sh
git update-index --no-assume-unchanged <file_name>
```

## Clean the files from `.gitignore`.
```sh
git clean -X -f
```

## Restore deleted file.
```sh
git checkout <deleting_commit>^ -- <file_path>
```

## Restore file to a specific commit-hash
```sh
git checkout <commit-ish> -- <file_path>
```

## Always rebase instead of merge on pull.
```sh
git config --global pull.rebase true
```


__Alternatives:__
```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

## List all the alias and configs.
```sh
git config --list
```

## Make git case sensitive.
```sh
git config --global core.ignorecase false
```

## Add custom editors.
```sh
git config --global core.editor '$EDITOR'
```

## Auto correct typos.
```sh
git config --global help.autocorrect 1
```

## Check if the change was a part of a release.
```sh
git name-rev --name-only <SHA-1>
```

## Dry run. (any command that supports dry-run flag should do.)
```sh
git clean -fd --dry-run
```

## Marks your commit as a fix of a previous commit.
```sh
git commit --fixup <SHA-1>
```

## Squash fixup commits normal commits.
```sh
git rebase -i --autosquash
```

## Skip staging area during commit.
```sh
git commit --only <file_path>
```

## Interactive staging.
```sh
git add -i
```

## List ignored files.
```sh
git check-ignore *
```

## Status of ignored files.
```sh
git status --ignored
```

## Commits in Branch1 that are not in Branch2
```sh
git log Branch1 ^Branch2
```

## List n last commits
```sh
git log -<n>
```


__Alternatives:__
```sh
git log -n <n>
```

## Reuse recorded resolution, record and reuse previous conflicts resolutions.
```sh
git config --global rerere.enabled 1
```

## Open all conflicted files in an editor.
```sh
git diff --name-only | uniq | xargs $EDITOR
```

## Count unpacked number of objects and their disk consumption.
```sh
git count-objects --human-readable
```

## Prune all unreachable objects from the object database.
```sh
git gc --prune=now --aggressive
```

## Instantly browse your working repository in gitweb.
```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

## View the GPG signatures in the commit log
```sh
git log --show-signature
```

## Remove entry in the global config.
```sh
git config --global --unset <entry-name>
```

## Checkout a new branch without any history
```sh
git checkout --orphan <branch_name>
```

## Extract file from another branch.
```sh
git show <branch_name>:<file_name>
```

## List only the root and merge commits.
```sh
git log --first-parent
```

## Change previous two commits with an interactive rebase.
```sh
git rebase --interactive HEAD~2
```

## List all branch is WIP
```sh
git checkout master && git branch --no-merged
```

## Find guilty with binary search
```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

## Bypass pre-commit and commit-msg githooks
```sh
git commit --no-verify
```

## List commits and changes to a specific file (even through renaming)
```sh
git log --follow -p -- <file_path>
```

## Clone a single branch
```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

## Create and switch new branch
```sh
git checkout -b <branch-name>
```


__Alternatives:__
```sh
git branch <branch-name> && git checkout <branch-name>
```

## Ignore file mode changes on commits
```sh
git config core.fileMode false
```

## Turn off git colored terminal output
```sh
git config --global color.ui false
```

## Specific color settings
```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

## Show all local branches ordered by recent commits
```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

## Find lines matching the pattern (regex or string) in tracked files
```sh
git grep --heading --line-number 'foo bar'
```

## Clone a shallow copy of a repository
```sh
git clone https://github.com/user/repo.git --depth 1
```

## Search Commit log across all branches for given text
```sh
git log --all --grep='<given-text>'
```

## Get first commit in a branch (from master)
```sh
git log --oneline master..<branch-name> | tail -1
```


__Alternatives:__
```sh
git log --reverse master..<branch-name> | head -6
```

## Unstaging Staged file
```sh
git reset HEAD <file-name>
```

## Force push to Remote Repository
```sh
git push -f <remote-name> <branch-name>
```

## Adding Remote name
```sh
git remote add <remote-nickname> <remote-url>
```

## List all currently configured remotes
```sh
git remote -v
```

## Show the author, time and last revision made to each line of a given file
```sh
git blame <file-name>
```

## Group commits by authors and title
```sh
git shortlog
```

## Forced push but still ensure you don't overwrite other's work
```sh
git push --force-with-lease <remote-name> <branch-name>
```

## Show how many lines does an author contribute
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```


__Alternatives:__
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += <!-- @doxie.inject start -->; subs += <!-- @doxie.inject end -->; loc += <!-- @doxie.inject start --> - <!-- @doxie.inject end --> } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

## Revert: Reverting an entire merge
```sh
git revert -m 1 <commit-ish>
```

## Number of commits in a branch
```sh
git rev-list --count <branch-name>
```

## Alias: git undo
```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

## Add object notes
```sh
git notes add -m 'Note on the previous commit....'
```

## Show all the git-notes
```sh
git log --show-notes='*'
```

## Apply commit from another repository
```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

## Specific fetch reference
```sh
git fetch origin master:refs/remotes/origin/mymaster
```

## Find common ancestor of two branches
```sh
git merge-base <branch-name> <other-branch-name>
```

## List unpushed git commits
```sh
git log --branches --not --remotes
```


__Alternatives:__
```sh
git log @{u}..
```


```sh
git cherry -v
```

## Add everything, but whitespace changes
```sh
git diff --ignore-all-space | git apply --cached
```

## Edit [local/global] git config
```sh
git config [--global] --edit
```

## blame on certain range
```sh
git blame -L <start>,<end>
```

## Show a Git logical variable.
```sh
git var -l | <variable>
```

## Preformatted patch file.
```sh
git format-patch -M upstream..topic
```

## Get the repo name.
```sh
git rev-parse --show-toplevel
```

## logs between date range
```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

## Exclude author from logs
```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)

```

## Generates a summary of pending changes
```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

## List references in a remote repository
```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

## Backup untracked files.
```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```

## List all git aliases
```sh
git config -l | grep alias | sed 's/^alias\.//g'
```


__Alternatives:__
```sh
git config -l | grep alias | cut -d '.' -f 2
```

## Show git status short
```sh
git status --short --branch
```

## Checkout a commit prior to a day ago
```sh
git checkout master@{yesterday}
```

## Push a new local branch to remote repository and track
```sh
git push -u origin <branch_name>
```

## Change a branch base
```sh
git rebase --onto <new_base> <old_base>
```

## Use SSH instead of HTTPs for remotes
```sh
git config --global url.'git@github.com:'.insteadOf 'https://github.com/'
```

## Update a submodule to the latest commit
```sh
cd <path-to-submodule>
git pull origin <branch>
cd <root-of-your-main-project>
git add <path-to-submodule>
git commit -m "submodule updated"
```

## Prevent auto replacing LF with CRLF
```sh
git config --global core.autocrlf false
```

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
