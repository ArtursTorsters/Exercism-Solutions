export function score(x: number, y: number): number {
    // target
    const distance = Math.sqrt(x * x + y * y);
console.log(distance)
    //what circle
    if (distance > 10) {
        // outside
        return 0;
    } else if (distance > 5) {
        // outer circl
        return 1;
    } else if (distance > 1) {
        // middle
        return 5;
    } else {
        // bullseye
        return 10;
    }
}


