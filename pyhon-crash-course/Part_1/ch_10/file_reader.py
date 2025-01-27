from pathlib import Path


path = Path('pi_digits.txt')
contents = path.read_text().strip()
print(contents) 

for line in contents.splitlines():
    print(line)