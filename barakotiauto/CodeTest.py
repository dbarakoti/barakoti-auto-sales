#print(int(True))
from collections import Counter

def find_duplicates(lst):
    return [item for item, count in Counter(lst).items() if count > 1]

print(find_duplicates([1, 2, 3, 2, 4, 5, 1, 8, 1, 7, 5, 9, 11, 11, 14, 5]))

