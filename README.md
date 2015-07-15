## git-tips
> Collection of `git-tips`, want to add your tips? Checkout [contributing.md](./contributing.md)

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
* [Overwrite pull](https://github.com/git-tips/tips#Overwrite pull)
* [List of all the files changed in a commit](https://github.com/git-tips/tips#List of all the files changed in a commit)
* [Git reset first commit](https://github.com/git-tips/tips#Git reset first commit)
* [List all the conflicted files](https://github.com/git-tips/tips#List all the conflicted files)
* [List all branches that are already merged into master](https://github.com/git-tips/tips#List all branches that are already merged into master)
* [Quickly switch to the previous branch](https://github.com/git-tips/tips#Quickly switch to the previous branch)
* [Remove branches that have already been merged with master](https://github.com/git-tips/tips#Remove branches that have already been merged with master)
* [List all branches and their upstreams, as well as last commit on branch](https://github.com/git-tips/tips#List all branches and their upstreams, as well as last commit on branch)
* [Track upstream branch](https://github.com/git-tips/tips#Track upstream branch)

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

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
