## git-tips
> Collection of `git-tips`, want to add your tips? Checkout [contributing.md](./contributing.md)

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
* [Overwrite pull](https://github.com/git-tips/tips#overwrite-pull)
* [List of all the files changed in a commit](https://github.com/git-tips/tips#list-of-all-the-files-changed-in-a-commit)
* [Git reset first commit](https://github.com/git-tips/tips#git-reset-first-commit)
* [List all the conflicted files](https://github.com/git-tips/tips#list-all-the-conflicted-files)
* [List all branches that are already merged into master](https://github.com/git-tips/tips#list-all-branches-that-are-already-merged-into-master)
* [Quickly switch to the previous branch](https://github.com/git-tips/tips#quickly-switch-to-the-previous-branch)
* [Remove branches that have already been merged with master](https://github.com/git-tips/tips#remove-branches-that-have-already-been-merged-with-master)
* [List all branches and their upstreams, as well as last commit on branch](https://github.com/git-tips/tips#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
* [Track upstream branch](https://github.com/git-tips/tips#track-upstream-branch)
* [Delete local branch](https://github.com/git-tips/tips#delete-local-branch)
* [Delete remote branch](https://github.com/git-tips/tips#delete-remote-branch)
* [Undo local changes with the last content in head](https://github.com/git-tips/tips#undo-local-changes-with-the-last-content-in-head)
* [Changing a remote's URL](https://github.com/git-tips/tips#changing-a-remotes-url)
* [Stage parts of a changed file, instead of the entire file](https://github.com/git-tips/tips#stage-parts-of-a-changed-file-instead-of-the-entire-file)
* [Get git bash completion](https://github.com/git-tips/tips#get-git-bash-completion)

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->


<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## Overwrite pull
```sh
git fetch --all && git reset --hard origin/master
```

## List of all the files changed in a commit
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
git push origin :<remote_branchname>
```

## Undo local changes with the last content in head
```sh
git checkout -- <file_name>
```

## Changing a remote's URL
```sh
git remote set-url origin <URL>
```

## Stage parts of a changed file, instead of the entire file
```sh
git add -p
```

## Get git bash completion
```sh
curl http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
