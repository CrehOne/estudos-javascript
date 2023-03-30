function subArray(array, subarray) {
    let j = 0
    for (let i = 0; i < array.length && j < subarray.length; i++) {
        if (array[i] === subarray[j]) {
            j++
        }
    }
    return j === subarray.length
}