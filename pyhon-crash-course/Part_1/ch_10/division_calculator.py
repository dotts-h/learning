try:
    answer = 5/0
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print(answer)