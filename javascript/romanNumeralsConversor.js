/*Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	  = 1000
CM	= 900
D	  = 500
CD  =	400
C	  = 100
XC	= 90
L	  = 50
XL	= 40
X	  = 10
IX	= 9
V	  = 5
IV  = 4
I   = 1

All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
 let calculatedNum = num
 let romanNum = [] 
  for(let i = Math.floor(num/1000); i > 0; i--) {
    romanNum.push('M')
    calculatedNum -= 1000
  }  
  for(let i = Math.floor(calculatedNum/900); i > 0; i--)
  {
    romanNum.push('CM')
    calculatedNum -= 900  
  }
  for(let i = Math.floor(calculatedNum/500); i > 0; i--)
  {
    romanNum.push('D')
    calculatedNum -= 500  
  }
  for(let i = Math.floor(calculatedNum/400); i > 0; i--)
  {
    romanNum.push('CD')
    calculatedNum -= 400  
  }
  for(let i = Math.floor(calculatedNum/100); i > 0; i--)
  {
    romanNum.push('C')
    calculatedNum -= 100  
  }
  for(let i = Math.floor(calculatedNum/90); i > 0; i--)
  {
    romanNum.push('XC')
    calculatedNum -= 90  
  }
  for(let i = Math.floor(calculatedNum/50); i > 0; i--)
  {
    romanNum.push('L')
    calculatedNum -= 50  
  }
  for(let i = Math.floor(calculatedNum/40); i > 0; i--)
  {
    romanNum.push('XL')
    calculatedNum -= 40  
  }
  for(let i = Math.floor(calculatedNum/10); i > 0; i--)
  {
    romanNum.push('X')
    calculatedNum -= 10  
  }
  for(let i = Math.floor(calculatedNum/9); i > 0; i--)
  {
    romanNum.push('IX')
    calculatedNum -= 9  
  }
  for(let i = Math.floor(calculatedNum/5); i > 0; i--)
  {
    romanNum.push('V')
    calculatedNum -= 5  
  }
  for(let i = Math.floor(calculatedNum/4); i > 0; i--)
  {
    romanNum.push('IV')
    calculatedNum -= 4
  }
  for(let i = Math.floor(calculatedNum/1); i > 0; i--)
  {
    romanNum.push('I')
    calculatedNum -= 1  
  }  
 return romanNum.join('')
}

console.log(convertToRoman(7))