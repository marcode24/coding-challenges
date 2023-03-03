# Arrays Similar

## Description

Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of ocurrences of elements.

```js
var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, '4']
```

```js
arraysSimilar(arr1, arr2); // should equal true
arraysSimilar(arr2, arr3); // should equal false
arraysSimilar(arr3, arr4); // should equal false
```
