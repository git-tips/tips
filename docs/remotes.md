# Remotes

## Changing a remote's URL
```sh
git remote set-url origin <URL>
```

---

## Get list of all remote references
```sh
git remote
```
**Alternatives:**
```sh
git remote show
```

---

## Adding Remote name
```sh
git remote add <remote-nickname> <remote-url>
```

---

## List all currently configured remotes
```sh
git remote -v
```

---

## List references in a remote repository
```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

---

## Refresh the list of remote branches
```sh
git remote update origin --prune
```

---

