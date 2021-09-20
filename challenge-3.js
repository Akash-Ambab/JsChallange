let nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

sumPlusMinus(nums);

const sumPlusMinus = (nums) => {
    let positiveSum = 0;
    let negativeSum = 0;
    for (i in nums) {
        if(nums[i] <= 0) {
            negativeSum += nums[i];
        }
        else {
            positiveSum += nums[i];
        }
    }

    let answer = { plus : positiveSum, minus : negativeSum }

    console.log(answer);
}