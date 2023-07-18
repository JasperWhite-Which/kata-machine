import DoublyLinkedList from "./DoublyLinkedList";

// this function is for buddle sort
function bubble_sort(list: number[]): number[] {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - 1 - i; ++j) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list
}

// test knowing the algorithm for binary search
// we assume the list is ordered
function binary_search(hackstay: number[], needle: number): boolean {
    let lo = 0;
    let hi = hackstay.length;
    do {
        let mid = Math.floor((hi - lo)/2 + lo);
        if (hackstay[mid] === needle) {
            return true;
        } else if (hackstay[mid] <= needle) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } while (lo < hi)

    return false
}

