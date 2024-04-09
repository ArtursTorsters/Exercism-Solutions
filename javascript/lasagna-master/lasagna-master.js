/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
    if (timer === 0) {
        return 'Lasagna is done.'
    } else if (timer > 0) {
        return 'Not done, please wait.'
    }
    return 'You forgot to set the timer.'
}
export function preparationTime(layers, time){
    if (time == undefined){
        // @ts-ignore
        var time = 2
      }
      var prepTime = layers.length * time
      return prepTime
}

export function quantities(layers) {
return {
noodles: layers.filter((layer) => layer === 'noodles').length * 50,
 sauce: layers.filter((layer) => layer === 'sauce').length * 0.2,
}
}

export function addSecretIngredient(friendsList, myList) {
    const secretIngredient = friendsList[3]
    myList.push(secretIngredient)
}



// const recipe = {
//     noodles: 200,
//     sauce: 0.5,
//     mozzarella: 1,
//     meat: 100,
//   };


export function scaleRecipe(recipe, count) {
    
    const scaledIn = {};

        

          

    for (const key in recipe) {
  
          
  
            
  
      scaledIn[key] = recipe[key] * count / 2;
  
          
  
            
  
    }
  
          
  
            
  
    return scaledIn;
  
          
  
            
  
   }
  
          
  
            
