//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  let output=[];
   for(let i=0;i<input.length;i++)
     for (let j = 0; j < input[i].length; j++)
     {
       let temp=input[i][j];
       let len=0;
         if (output[j])
         {
         len = output[j].length;
         }
         if (i > len) 
         {
         temp = temp.padStart(i - len + 1, ' ');
         }
       output[j] ? output[j] += temp : output[j] = temp;
     }
   return output;
   }
   
 