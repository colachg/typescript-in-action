export function twoSum(nums:number[], target:number) {
    const numberMap = new Map<number, number>();
    for (let i=0;i<nums.length;i++) {
        let number = nums[i]
        let diff = target - number

        if (numberMap.has(diff)) return [numberMap.get(diff), i]
        numberMap.set(number, i)
    }
}

