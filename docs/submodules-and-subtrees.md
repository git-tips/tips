# Submodules and Subtrees

## Update all the submodules
```sh
git submodule foreach git pull
```
**Alternatives:**
```sh
git submodule update --init --recursive
```
```sh
git submodule update --remote
```

---

## Deploying git tracked subfolder to gh-pages
```sh
git subtree push --prefix subfolder_name origin gh-pages
```
**Alternatives:**
```sh
git subtree push --prefix subfolder_name origin branch_name
```

---

## Adding a project to repo using subtree
```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

---

## Get latest changes in your repo for a linked project using subtree
```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

---

