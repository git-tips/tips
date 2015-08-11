## git-tips
> Collection of `git-tips`, want to add your tips? Checkout [contributing.md](./contributing.md)

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
* [Overwrite pull](https://github.com/git-tips/tips#overwrite-pull)
* [List of all files till a commit](https://github.com/git-tips/tips#list-of-all-files-till-a-commit)
* [Git reset first commit](https://github.com/git-tips/tips#git-reset-first-commit)
* [List all the conflicted files](https://github.com/git-tips/tips#list-all-the-conflicted-files)
* [List of all files changed in a commit](https://github.com/git-tips/tips#list-of-all-files-changed-in-a-commit)
* [Unstaged changes since last commit](https://github.com/git-tips/tips#unstaged-changes-since-last-commit)
* [Changes staged for commit](https://github.com/git-tips/tips#changes-staged-for-commit)
* [Show both staged and unstaged changes](https://github.com/git-tips/tips#show-both-staged-and-unstaged-changes)
* [List all branches that are already merged into master](https://github.com/git-tips/tips#list-all-branches-that-are-already-merged-into-master)
* [Quickly switch to the previous branch](https://github.com/git-tips/tips#quickly-switch-to-the-previous-branch)
* [Remove branches that have already been merged with master](https://github.com/git-tips/tips#remove-branches-that-have-already-been-merged-with-master)
* [List all branches and their upstreams, as well as last commit on branch](https://github.com/git-tips/tips#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
* [Track upstream branch](https://github.com/git-tips/tips#track-upstream-branch)
* [Delete local branch](https://github.com/git-tips/tips#delete-local-branch)
* [Delete remote branch](https://github.com/git-tips/tips#delete-remote-branch)
* [Undo local changes with the last content in head](https://github.com/git-tips/tips#undo-local-changes-with-the-last-content-in-head)
* [Revert: Undo a commit by creating a new commit](https://github.com/git-tips/tips#revert-undo-a-commit-by-creating-a-new-commit)
* [Reset: Discard commits, advised for private branch](https://github.com/git-tips/tips#reset-discard-commits-advised-for-private-branch)
* [Reword the previous commit message](https://github.com/git-tips/tips#reword-the-previous-commit-message)
* [Changing a remote's URL](https://github.com/git-tips/tips#changing-a-remotes-url)
* [Get list of all remote references](https://github.com/git-tips/tips#get-list-of-all-remote-references)
* [Get list of all local and remote branches](https://github.com/git-tips/tips#get-list-of-all-local-and-remote-branches)
* [Get only remote branches](https://github.com/git-tips/tips#get-only-remote-branches)
* [Stage parts of a changed file, instead of the entire file](https://github.com/git-tips/tips#stage-parts-of-a-changed-file-instead-of-the-entire-file)
* [Get git bash completion](https://github.com/git-tips/tips#get-git-bash-completion)
* [What changed since two weeks?](https://github.com/git-tips/tips#what-changed-since-two-weeks)
* [See all commits made since forking from master](https://github.com/git-tips/tips#see-all-commits-made-since-forking-from-master)
* [Pick commits across branches using cherry-pick](https://github.com/git-tips/tips#pick-commits-across-branches-using-cherry-pick)
* [Find out branches containing commit-hash](https://github.com/git-tips/tips#find-out-branches-containing-commit-hash)
* [Git Aliases](https://github.com/git-tips/tips#git-aliases)
* [Saving current state of tracked files without commiting](https://github.com/git-tips/tips#saving-current-state-of-tracked-files-without-commiting)
* [Saving current state including untracked files](https://github.com/git-tips/tips#saving-current-state-including-untracked-files)
* [Show list of all saved stashes](https://github.com/git-tips/tips#show-list-of-all-saved-stashes)
* [Apply any stash without deleting from the stashed list](https://github.com/git-tips/tips#apply-any-stash-without-deleting-from-the-stashed-list)
* [Apply last stashed state and delete it from stashed list](https://github.com/git-tips/tips#apply-last-stashed-state-and-delete-it-from-stashed-list)
* [Delete all stored stashes](https://github.com/git-tips/tips#delete-all-stored-stashes)
* [Show all tracked files](https://github.com/git-tips/tips#show-all-tracked-files)
* [Show all untracked files](https://github.com/git-tips/tips#show-all-untracked-files)
* [Show all ignored files](https://github.com/git-tips/tips#show-all-ignored-files)
* [Create new working tree from a repository (git 2.5)](https://github.com/git-tips/tips#create-new-working-tree-from-a-repository-git-25)
* [Create new working tree from HEAD state](https://github.com/git-tips/tips#create-new-working-tree-from-head-state)
* [Before deleting untracked files/directory, do a dry run to get the list of these files/directories](https://github.com/git-tips/tips#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
* [Forcefully remove untracked files](https://github.com/git-tips/tips#forcefully-remove-untracked-files)
* [Forcefully remove untracked directory](https://github.com/git-tips/tips#forcefully-remove-untracked-directory)

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->


<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## Overwrite pull
```sh
git fetch --all && git reset --hard origin/master
```

## List of all files till a commit
```sh
git ls-tree --name-only -r <commit-ish>
```

## Git reset first commit
```sh
git update-ref -d HEAD
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

## Show both staged and unstaged changes
```sh
git diff HEAD
```

## List all branches that are already merged into master
```sh
git checkout master && git branch --merged
```

## Quickly switch to the previous branch
```sh
git checkout -
```

## Remove branches that have already been merged with master
```sh
git branch --merged | grep -v '\*' | xargs -n 1 git branch -d
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
curl http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

## What changed since two weeks?
```sh
git whatchanged --since='2 weeks ago'
```

## See all commits made since forking from master
```sh
git log --no-merges --stat --reverse master..
```

## Pick commits across branches using cherry-pick
```sh
git checkout <branch-name> && cherry-pick <commit-ish>
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

## Saving current state including untracked files
```sh
git stash save -u
```


__Alternatives:__
```sh
git stash save --include-untracked
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

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
