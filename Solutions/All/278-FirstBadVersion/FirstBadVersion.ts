/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let left = 0;
        let right = n;
        let mid = Math.floor(n / 2);

        while (left <= right) {
            isBadVersion(mid) ? (right = mid - 1) : (left = mid + 1);

            mid = Math.floor((left + right) / 2);
        }

        return left;
    };
};
