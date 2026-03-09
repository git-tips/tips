# Merging and Rebasing

## Rebases 'feature' to 'master' and merges it in to master 
```sh
git rebase master feature && git checkout master && git merge -
```

---

## Stash changes before rebasing
```sh
git rebase --autostash
```

---

## Squash fixup commits normal commits.
```sh
git rebase -i --autosquash
```

---

## Change previous two commits with an interactive rebase.
```sh
git rebase --interactive HEAD~2
```

---

## Find common ancestor of two branches
```sh
git merge-base <branch-name> <other-branch-name>
```

---

## Change a branch base
```sh
git rebase --onto <new_base> <old_base>
```

---

