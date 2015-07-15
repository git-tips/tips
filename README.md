# Overwrite pull

```sh
git fetch --all
git reset --hard origin/master
```

# List of all the files changed in a commit

```sh
git ls-tree --name-only -r <commit-ish>
```

# Git reset first commit

```sh
git update-ref -d HEAD
```

# List all the conflicted files

```sh
git diff --name-only --diff-filter=U
```

# List all branches that are already merged into master

```sh
git checkout master
git branch --merged
```

# Quickly switch to the previous branch

```sh
git checkout -
```

# List all branches and their upstreams, as well as last commit on branch

```sh
git branch -vv
```

# Track upstream branch

```sh
git branch -u origin/mybranch
```