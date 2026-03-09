# Stashing

## Saving current state of tracked files without committing
```sh
git stash
```
**Alternatives:**
```sh
git stash push
```

---

## Saving current state of unstaged changes to tracked files
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

---

## Saving current state including untracked files
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

---

## Saving current state with message
```sh
git stash push -m <message>
```
**Alternatives:**
```sh
git stash push --message <message>
```

---

## Saving current state of all files (ignored, untracked, and tracked)
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

---

## Show list of all saved stashes
```sh
git stash list
```

---

## Show the contents of any stash in patch form
```sh
git stash show -p <stash@{n}>
```

---

## Apply any stash without deleting from the stashed list
```sh
git stash apply <stash@{n}>
```

---

## Apply last stashed state and delete it from stashed list
```sh
git stash pop
```
**Alternatives:**
```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

---

## Delete all stored stashes
```sh
git stash clear
```
**Alternatives:**
```sh
git stash drop <stash@{n}>
```

---

