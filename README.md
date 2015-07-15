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
