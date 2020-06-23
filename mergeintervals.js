//Objective is to merge pairs of integers in a 2-D array based on overlapping intervals.

let intervals = [[1,3],[2,6],[8,10],[15,18]]


//O(nlogn) solution that sorts the intervals based on their first value, then
//checks to see if there are overlaps through an iteration.

let result = []

if (intervals.length === 0) {
    return []
} else if (intervals.length === 1) {
    return intervals
}

intervals.sort((a,b) => {
    return a[0] - b[0]
})
result.push(intervals[0])

//In this iteration, we check each term in the sorted intervals with the first
//unchecked term. If the interval's first value is in between the unchecked terms' pairs,
//then we replace the interval's second value with the greater of the interval ends.

//For example, if recentOutput = [1,3] and interval[i] = [2,6]
//2 is less than 3, so we check the greater between 3 and 6
//Thus, the new interval is [1,6]

//[1,6] is then checked with the next unchecked term of [8,10]
//Since there is no overlap, [8,10] is pushed into the result and is compared to
//the next unchecked term, [15, 18]
for (let i = 0; i < intervals.length; i++) {
    let recentOutput = result[result.length - 1]
    if (recentOutput[1] >= intervals[i][0]) {
        recentOutput[1] = Math.max(recentOutput[1], intervals[i][1])
    } else {
        result.push(intervals[i])
    }
}

return result
