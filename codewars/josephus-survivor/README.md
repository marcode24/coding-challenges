# Josephus Survivor

## Description

In this kata you have to correctly return who is the "survivor".

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

```txt
n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
```

**Notes and Tips:** using the solution to the other kata to check your functionmay be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may asume that both n and k will always be >=1.
