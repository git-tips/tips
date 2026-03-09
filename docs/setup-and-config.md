# Setup and Config

## Remove sensitive data from history, after a push
```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch <path-to-your-file>' --prune-empty --tag-name-filter cat -- --all && git push origin --force --all
```

---

## Reset author, after author has been changed in the global config.
```sh
git commit --amend --reset-author --no-edit
```

---

## Get git bash completion
```sh
curl -L http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

---

## Git Aliases
```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

---

## Always rebase instead of merge on pull.
```sh
git config --global pull.rebase true
```
**Alternatives:**
```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

---

## List all the alias and configs.
```sh
git config --list
```

---

## Make git case sensitive.
```sh
git config --global core.ignorecase false
```

---

## Add custom editors.
```sh
git config --global core.editor '$EDITOR'
```

---

## Auto correct typos.
```sh
git config --global help.autocorrect 1
```

---

## Reuse recorded resolution, record and reuse previous conflicts resolutions.
```sh
git config --global rerere.enabled 1
```

---

## Remove entry in the global config.
```sh
git config --global --unset <entry-name>
```

---

## Ignore file mode changes on commits
```sh
git config core.fileMode false
```

---

## Turn off git colored terminal output
```sh
git config --global color.ui false
```

---

## Specific color settings
```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

---

## Alias: git undo
```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

---

## Edit [local/global] git config
```sh
git config [--global] --edit
```

---

## List all git aliases
```sh
git config -l | grep alias | sed 's/^alias\.//g'
```
**Alternatives:**
```sh
git config -l | grep alias | cut -d '.' -f 2
```

---

## Use SSH instead of HTTPs for remotes
```sh
git config --global url.'git@github.com:'.insteadOf 'https://github.com/'
```

---

## Prevent auto replacing LF with CRLF
```sh
git config --global core.autocrlf false
```

---

## Edit config for each level
```sh
git config --edit --system

git config --edit --global

git config --edit --local
```

---

