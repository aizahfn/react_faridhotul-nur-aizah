# (02)Version Control Management (Git)

## 1. Setting Up Github
Kita menyetting github dengan git init, clone dan config
- Git Config
$ git config --global user.name "aizahfn"
$ git config --global user.email "aizahfn22@students.unnes.ac.id"
- Git Init
$ git init
$ git remote add<remote_name> <remoye_repo_url>
$git push -u <remote_name> <local_branch_name>
- Git Clone
start with existing project, start working on the project
$ git clone ssh://john@example.com/path/to/my-project.git
$ cd my-project

## 2. Saving Changes 
Terdapat staging area dalam mengunggah file / tiap perubahan pada repository. 
Working directory -> git add -> staging area -> git commit -> repository. 
Saat kita akan commit ke github, diharapkan kita menuliskan commit message sesuai dengan apa yang di commit. Dan juga harus sesuai dengan Semantic Commit Message agar memudahkan kita / orang lain mentrack apa yang sedang kita commit.

## 3. Syncing
- Git Push
$ git push origin master
$ git push origin feature/login-user
- Git Remote
$ git remote -v
$ git remote add origin http://dev.example.com/john.git
- Git Fetch and Pull
$ git fetch
$ git pull origin master

## 4. Branches
Git Branching
- Show all branch
$ git branch --list
- Create a New Branch Called <branch>
$ git branch <branch>
- Delete the Spesified Branch
$ git branch -D <branch>
- list remote branch
$ git branch -a

Git Merge
- Start a new feature
$ git checkout -b new0feature master
- Edit some files
$ git add <file>
$ git commit -m "Start a feature"
- Edit some files
$ git add <file>
$ git commit -m "Finish a feature"
- Merge in the new-feature branch
$ git  checkout master
$ git merge new-feature
$ git branch -d new-feature

Atau dapat kita lakukan dengan pull request pada repository github, kemudian merge branch.