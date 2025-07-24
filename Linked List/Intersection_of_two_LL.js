//Brute Force Method
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currA = headA;
  while (currA) {
    let currB = headB;
    while (currB) {
      if (currA === currB) {
        return currB;
      }
      currB = currB.next;
    }
    currA = currA.next;
  }
  return null;
};
//Optimised solution with hashmap
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currB = headB;
    let currA = headA;
    let mySet=new Set();
    while(currB){
      mySet.add(currB)
      currB=currB.next
    }
    while(currA){
      if(mySet.has(currA)){
        return currA
      }
      currA = currA.next
    }
    return null
};