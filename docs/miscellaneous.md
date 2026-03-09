# Miscellaneous

## Everyday Git in twenty commands or so
```sh
git help everyday
```

---

## Untrack files without deleting
```sh
git rm --cached <file_path>
```
**Alternatives:**
```sh
git rm --cached -r <directory_path>
```

---

## Don’t consider changes for tracked file.
```sh
git update-index --assume-unchanged <file_name>
```

---

## Check if the change was a part of a release.
```sh
git name-rev --name-only <SHA-1>
```

---

## List ignored files.
```sh
git check-ignore *
```

---

## Count unpacked number of objects and their disk consumption.
```sh
git count-objects --human-readable
```

---

## Prune all unreachable objects from the object database.
```sh
git gc --prune=now --aggressive
```

---

## Instantly browse your working repository in gitweb.
```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

---

## Find lines matching the pattern (regex or string) in tracked files
```sh
git grep --heading --line-number 'foo bar'
```

---

## Backup untracked files.
```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```

---

## Send a collection of patches as emails
```sh
git send-email [<options>] <file|directory>…

git send-email [<options>] <format-patch options>
```

---

