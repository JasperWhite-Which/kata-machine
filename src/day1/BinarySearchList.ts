export default function bs_list(haystack: number[], needle: number): boolean {
    let min: number = 0;
    let max: number = haystack.length;
    do {
        const mid: number = Math.floor(min + (max - min) / 2);
        console.log(`the min is ${min} the mid is ${mid}, the max is ${max}`);
        // will be inclusing the lower bound and exluding the upper bound
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] <= needle) {
            min = mid + 1;
        } else {
            max = mid;
        }
        
    } while (min < max);

    return false;
};
