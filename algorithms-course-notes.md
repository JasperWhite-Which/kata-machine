# algorithms course notes

## BigO complexity

### What is big O?

BigO is a way to categorize your algorithms time or memory requirements base on input. It is not meant to be an exact measurement. It will not tell you how many PCU cycles it takes, istead it is meant to generalize the growth of your algorithm. 

#### Example
So when someone Oh of N, they mean your algorithm will grow linearly based on input. 

It helps us make decisions about what data structures and algorithms to use. Knowing how they perform can greatly help create the best possible program out there.

### Import concepts

1) growth is with respect to the input. 

#### Example
```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i) {
		sum += n.charCodeAt(i);
	}
	return sum;
}
```
This function we have an N relationship O(N) time complexity.

The simplest trick for complexity, is just look for the number of loops.

2) Constants are dropped.

O(2N) -> O(N) and this makes sense. This is because BigO is meant to describe the upper bound of the algorithm (the growth of the algorithm). The constant eventually becomes irrelevant. 
As the limit of the constant gets to infinite, the rate at which O(N^2) becomes much later compared to O(N).

#### Example
```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i) {
		const charCode = n.charCodeAt(i);
		// Capital E
		if (charCode == 69) {
			return sum;
		}
		sum += charCode
	}
	return sum;
}
```

In BigO we often consider the worst case. Especially in interviews.

3) Worst case is usually the way we measure. Think least upper bound it can reach.

### BigO complexity order:
1) O(1)
2) O(log(n)) - binary search
3) O(n)
5) O(n * log(n)) - quicksort as an example
6) O(n^2)
7) O(2^n) - can't run on our computors
8) O(n!) - can't run on our computors

#### Examples
* O(N^2)
```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; ++i) {
		for (let j =0; i < n.length; ++j) {
			sum += n.charCodeAt(i);
		}
	}
	return sum;
}
```

### summary
1) growth is with respect to the input. 
2) Constants are dropped.
3) Think least upper bound it can reach. Worst case is usually the way we measure. 

## Array Data structures

* An array are fixed size, continiguous memeroy chuncks. (An array has a predefined length). So they can NOT grow.
* We do not have functions like 'push' or 'pop'.
* when you insert some data into an array is just overrides what is already there. 
* deletion would just be setting the value in the array to zero. You don't delete the piece of memory.
* an array is 0(1), the time is constant. To do addtional/deletion, we find the given width anf the offset of the array and perform the exection. 

## Linear search

The function 'indexOf' is basically just a linear seach.
```typescript
const index: number = someArray.indexOf(someValue)
```
The is "O(n)" time complexity, as the input growths, so does our search.%

## Binary search

* is the data order? If so, how can we search over an array?

For the binary search algorithm, given you have an ordered array, you take the midpoint of your array and check if that value is your search value.
If not, then halve the array again and check the pointpoint. You repeat this until you get your value. 

This is "0(Log(N))" time complexity which is faster than O(N)

## Bubble sort

What is a sorted array, this is where for a given collect of items in an array `Array (X[0]....X[n]) then X[i] <= X[i+1] for 0 <= i <= n`

With bubble sort, we take an array, we start at index 0, and we compare the current index with the +1 index. If the current value is greater than the next value, swap them.
What this does is by the end of the first round, the max number is at the end. 

#### Example
Round 1: `1 3 7 4 2` -> `1 3 4 2 7`

Because after each round the number is at the end, we do not need to check it for the next round, so the next round is always minus one total checks.

Buddle sort is `O(n^2)` time complexity, Why. well the total time is:
* sum = 1 + 2 + 3 ... + N = (n(n+1)/2)
* drop consts: n^2 + n
* drop insugificant values: n^2