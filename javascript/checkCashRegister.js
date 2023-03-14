/*Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]*/

function convertNameToValue(arr)
{ 
  let value = -1
  switch (arr[0].toUpperCase())
  {
    case "PENNY" :
      value = 0.01
      break    
    case "NICKEL" :
      value = 0.05
      break    
    case "DIME" :
      value = 0.10
      break    
    case "QUARTER": 
      value = 0.25
      break    
    case "ONE":
      value = 1
      break
    case "FIVE":
      value = 5
      break
    case "TEN":
      value = 10
      break
    case "TWENTY":
      value = 20
      break
    case "ONE HUNDRED":
      value = 100
      break
  }
  return value
}

function checkCashRegister(price, cash, cid) {  
  let change = (cash - price).toFixed(2)  
  //console.log(change)
  let status = "INSUFFICIENT_FUNDS" 
  let resp = {status:status,change:[]}
  let totCid = 0  
  let cidReverse = [...cid].reverse()
  for(let el in cidReverse)
  {
    let cidkey = cidReverse[el]
    let cidTotValue = cidkey[1]
    let cidName = cidkey[0]        
    totCid += cidTotValue    
    
    let value = convertNameToValue(cidkey)
    
    if(value === -1) //Defensive programming
      return console.log("WRONG PARAMS IN CID KEYS: " + cid[el])
    
    let howMuchToMatch = Math.trunc((change/value).toFixed(2))
    //console.log("How much it's needed (" + value + "): " + howMuchToMatch)
    //console.log("How much there is in cashier: " + (cidTotValue/value).toFixed(2))
    if(howMuchToMatch >= 1)
    {      
      if((cidTotValue/value).toFixed(2) > 0)
      {
        let chgArr = [cidName]      
        if(howMuchToMatch > (cidTotValue/value).toFixed(2))
        {
        change -= cidTotValue.toFixed(2)
        //console.log(change.toFixed(2))
        chgArr.push(cidTotValue)
        }
        else
        {        
          change -= ((howMuchToMatch)*value).toFixed(2)
          //console.log(change.toFixed(2))
          chgArr.push(howMuchToMatch*value)
        }
        resp.change.push(chgArr)
        if(change == 0 && howMuchToMatch == (cidTotValue/value).toFixed(2)){
          resp.status = 'CLOSED'
        }
      }      
    }    
  }  

  //console.log(totCid)
  //console.log(change.toFixed(2))
  
  if(change.toFixed(2) == 0)
  {  
    if(totCid > change && resp.status !== 'CLOSED')
      resp.status = 'OPEN'    
    else
      resp.change = cid
  }
  else
    resp.change = []
  
  console.log(resp)

  return resp;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //deve retornar {status: "OPEN", change: [["QUARTER", 0.5]]}.