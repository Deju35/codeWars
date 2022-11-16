
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// Input is an array comprised of customers waiting time and number of cashier tills available
//PseudoCode initialize an array of zeros equal to number of tills
// iterate through the array of customers waiting time and direct them to the cahsier till with least waiting time 
const queueTime = function(customers, n){
  let tills = new Array(n).fill(0) // fill an array with  zeros equal to the number of cashier tills(zeros since thats the waiting time initially)
  customers.map(client=>{
    let availableTill = tills.indexOf(Math.min(...tills)) // direct customer to cashier  till with the lowest waiting  time
    tills[availableTill]+= client;
    })
    return Math.max(...tills)   //Return the cashier till that has the longest wait time since this is the time required to get all the customers through the tills
  }
