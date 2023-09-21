# Awesome repo

It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:

Calculate the average mark of the whole class and round it to 3 decimal places.
Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary, "They did well"] if there are only high marks.
Examples
[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Domains:
Class
Mark
dictionary with marks

Actions:
make average
count high, average, low marks
make dictionary

Story 1: marks average
As a teacher, I want to see average mark of the whole class rounded to 3 decimal places.
- ⚠ TODO UAT1.1: When the marks are [9,9,9] Then I Should see 9.000
- ⚠ TODO UAT1.2: When the marks are [5,6,7] Then I Should see 6.000
- ⚠ TODO UAT1.3: When the marks are [5,8,10] Then I Should see 7.667
- ⚠ TODO UAT1.4: When the marks are [8,4,9] Then I Should see 7.000
- ⚠ TODO UAT1.5: When the marks are [2,5,10] Then I Should see 5.667

Story 2: dictionary/hash with keys "h", "a", "l"
- ⚠ TODO UAT2.1: When the marks are [1,5,10] Then I Should see[5.333, {'h': 1, 'a': 0, 'l': 2}]
- ⚠ TODO UAT2.2: When the marks are [7,7,9] Then I Should see[7.667, {'h': 1, 'a': 2, 'l': 0}]
- ⚠ TODO UAT2.3: When the marks are [9,9,10] Then I Should see[9.333, {'h': 3, 'a': 0, 'l': 0}]
- ⚠ TODO UAT2.4: When the marks are [2,7,9] Then I Should see[6.000, {'h': 1, 'a': 1, 'l': 1}]
- ⚠ TODO UAT2.5: When the marks are [10,7,9] Then I Should see[8.667, {'h': 0, 'a': 1, 'l': 2}]