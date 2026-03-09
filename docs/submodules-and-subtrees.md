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
g
```
```sh
i
```
```sh
t
```
```sh
 
```
```sh
s
```
```sh
u
```
```sh
b
```
```sh
t
```
```sh
r
```
```sh
e
```
```sh
e
```
```sh
 
```
```sh
p
```
```sh
u
```
```sh
s
```
```sh
h
```
```sh
 
```
```sh
-
```
```sh
-
```
```sh
p
```
```sh
r
```
```sh
e
```
```sh
f
```
```sh
i
```
```sh
x
```
```sh
 
```
```sh
s
```
```sh
u
```
```sh
b
```
```sh
f
```
```sh
o
```
```sh
l
```
```sh
d
```
```sh
e
```
```sh
r
```
```sh
_
```
```sh
n
```
```sh
a
```
```sh
m
```
```sh
e
```
```sh
 
```
```sh
o
```
```sh
r
```
```sh
i
```
```sh
g
```
```sh
i
```
```sh
n
```
```sh
 
```
```sh
b
```
```sh
r
```
```sh
a
```
```sh
n
```
```sh
c
```
```sh
h
```
```sh
_
```
```sh
n
```
```sh
a
```
```sh
m
```
```sh
e
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

