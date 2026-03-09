# Undoing Changes

## Sync with remote, overwrite local changes
```sh
git fetch origin && git reset --hard origin/master && git clean -f -d
```

---

## Git reset first commit
```sh
git update-ref -d HEAD
```

---

## Reset: preserve uncommitted local changes
```sh
git reset --keep <commit>
```

---

## Revert: Undo a commit by creating a new commit
```sh
git revert <commit-ish>
```

---

## Reset: Discard commits, advised for private branch
```sh
git reset <commit-ish>
```

---

## Before deleting untracked files/directory, do a dry run to get the list of these files/directories
```sh
git clean -n
```

---

## Forcefully remove untracked files
```sh
git clean -f
```

---

## Forcefully remove untracked directory
```sh
git clean -f -d
```

---

## Undo assume-unchanged.
```sh
git update-index --no-assume-unchanged <file_name>
```

---

## Clean the files from `.gitignore`.
```sh
git clean -X -f
```

---

## Dry run. (any command that supports dry-run flag should do.)
```sh
git clean -fd --dry-run
```

---

## Unstaging Staged file
```sh
git reset HEAD <file-name>
```

---

## Revert: Reverting an entire merge
```sh
git revert -m 1 <commit-ish>
```

---

## Restore file (modern alternative to reset/checkout --)
```sh
git restore <file-name>
```
**Alternatives:**
```sh
git restore --staged <file-name>
```

---

