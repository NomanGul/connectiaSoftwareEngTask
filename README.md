```
Task # 1: Linux
Based on history write a bash one-liner to print a count of unique commands that were used in
conjunction with sudo:
hint: the start of the one-liner should be: history |
Example:
If the output of the command history is:
1. sudo nano /tmp/file1
2. ls /home
3. grep "test" /tmp/file1
4. sudo nano /tmp/file1
5. sudo nano /tmp/file1
6. sudo rm /tmp/file1
then result of the one-liner should be:
3 sudo nano /tmp/file1
1 sudo rm /tmp/file1
Please include an explanation of what each part of your one-liner does.
```

```bash
history | sort -ur -k2 | grep 'sudo.*/tmp/file1$' | sed 's/:/ /'
```

1. pipe the `history` output to `sort -ur -k2` that will remove duplicates based on the second column/key (ignoring line numbers, checking only unique commands) and sort in descending order.
2. pipe the result of the previous command to `grep 'sudo.*/tmp/file1$'` that will find the lines that contain the string `sudo` and ending with `/tmp/file1`.
3. pipe the result of the previous command to `sed 's/:/ /'` that will replace the colon `:` with a space.

# Commands

```bash
docker build . -t nomangul/node-web-app
```
```bash
docker run -p 49160:8000 -d nomangul/node-web-app
```
```bash
curl -i localhost:49160/api/health
```
