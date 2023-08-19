import {twoSum} from "./001"

describe("test two sum function", ()=> {
    test("test case 1", ()=>{
        let nums:number[] = [2,7,11,15]
        let target:number = 9
        let result:number[] = [0,1]
        expect(twoSum(nums, target)).toEqual(result)
    });
})