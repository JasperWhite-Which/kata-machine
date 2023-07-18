export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j +1]) {
                const current: number = arr[j];
                const next: number = arr[j +1];
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }
}

// my one was not optimal, only define variables if needed!
function bubble_sort_course(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1- i; ++j) {
            if (arr[j] > arr[j +1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}