import os
import datetime
from random import randint, choice

# CONFIG
total_days = 1095                 # Total number of days to go back
max_commits_per_day = 10        # Max number of commits in a day
variability = True              # Enable randomness for more realism

# Use SSH repo link with custom host alias (from ~/.ssh/config)
# Make sure you've defined "github-friend" in your SSH config
repo_link = "git@github.com:kishankalandoor/fluffy-eureka.git"  # Replace with actual values

# Commit message pool
commit_messages = [
    "Fix minor bug 🐞",
    "Update README 📄",
    "Refactor code 🧼",
    "Improve performance 🚀",
    "Add new feature ✨",
    "Update dependencies 📦",
    "Minor style changes 🎨",
    "Fix typo ✏️",
    "Code cleanup 🧹",
    "Update comments 🗒️"
]

# Setup
os.system("git init")

# (Optional) Set user config locally — ensure it's your friend's identity
os.system('git config user.name "kishankalandoor"')
os.system('git config user.email "kishanbvn@gmail.com"')

now = datetime.datetime.now()
commit_counter = 1

pointer = 0  # days back
while pointer < total_days:
    commits_today = randint(0, max_commits_per_day) if variability else max_commits_per_day

    for _ in range(commits_today):
        hour = randint(9, 23)
        minute = randint(0, 59)
        second = randint(0, 59)
        commit_time = datetime.time(hour, minute, second)

        commit_date = now - datetime.timedelta(days=pointer)
        commit_datetime = datetime.datetime.combine(commit_date.date(), commit_time)
        commit_timestamp = commit_datetime.strftime("%Y-%m-%d %H:%M:%S")

        # Write to file
        with open("commit.txt", "a+") as f:
            f.write(f"Commit {commit_counter}: {commit_timestamp}\n")

        # Stage and commit
        os.system("git add .")
        commit_msg = choice(commit_messages)
        os.system(f'git commit --date="{commit_timestamp}" -m "{commit_msg}"')
        print(f"Committed: {commit_msg} at {commit_timestamp}")
        commit_counter += 1

    pointer += 1

# Push to GitHub
os.system(f"git remote add origin {repo_link}")
os.system("git branch -M main")
os.system("git push -u origin main -f")
