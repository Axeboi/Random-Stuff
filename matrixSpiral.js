"use strict"

function matrixSpiral(size) {

/* 
------------------------------------------------------
Creates a matrix whose numbers spiral into the center.

Algorithm iterativly fills the outer edge of numbers, then move 
one step in and repeats the process recursivly until complete.

Example:
(numbers represent number of lines iterated)

The last iteration is completed because min = max
1 1 1
4 5 2 
3 3 2

Last iteration is skipped because max = 0 in the last loop
1 1 1 1
4 5 5 2
4 7 6 2
3 3 3 2

Min and max represents the edge case and when min > max, 
the recursion stops and the matrix is returned.
------------------------------------------------------ 
*/

    let matrix = [];
    let min = 0;
    let max = size - 1;
    let count = 0;

    //Initialize 2d matrix
    for (let i = 0; i < size; i++) {
        matrix.push([]);
    }
    

    /*
    -------------------------------
    spiral(): calculates outer edges. When complete recursively moves 
    one step inward and repeats the process, or returns matrix
    -------------------------------
    */

    (function spiral () {

        //Top side
        for(let col = min; col <= max; col++) {
            matrix[min][col] = ++count;  
        };

        //Right side, not including [row]=0
        for(let row = min + 1; row <= max; row++) {
            matrix[row][max] = ++count;
        };

        //Bottom side, not including [column]=max
        for(let col = max - 1; col >= min; col--) {
            matrix[max][col] = ++count;
        };

        //Left side, not including [column]=max and [row]=min
        for(let row = max - 1; row > min; row--) {
            matrix[row][min] = ++count;
        };
        
        min += 1;
        max -= 1;

        if(min > max) {
            return matrix;
        } else {
            spiral();
        }
    })();

    return matrix;
}

//"Main" - Run test output
console.log(matrixSpiral(4));

