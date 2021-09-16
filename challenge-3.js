var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

sumPlusMinus(nums);

var sumPlusMinus = (nums) => {
    var positiveSum = 0;
    var negativeSum = 0;
    for (i in nums) {
        if(nums[i] <= 0) {
            negativeSum += nums[i];
        }
        else {
            positiveSum += nums[i];
        }
    }

    var answer = {plus : positiveSum, minus : negativeSum }

    console.log(answer);
}