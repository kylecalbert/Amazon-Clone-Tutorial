export const initialState = {
    basket:[],

};

///takes in basket variable
export const getBasketTotal = (basket) => 
    basket.reduce((amount,item)=>{  // reduce function which automatically iterates through basket
        return item.price+amount; ///for each item in the basket price add to amount and set amount to the new value 
   },0) //the 0 is the intial value of the amount

   ///exporting the contan variable to subtotal.js

function reducer(state,action){
    console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
         return{
             ...state,basket:[...state.basket,action.item],};
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]; //current state of basket
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id)//find index of basketItem where item id = action id
            if(index>=0){

                newBasket.splice(index,1); //removing index
                ///....

            }
            
         //Logic for removing item to basket
         return{ ...state,basket:newBasket };//setting basket to new basket

        default:
            return state;  
    }
}
export default reducer; 