import Allrent from '../Component/BookingPage/Allrent/Allrent';

const counterReducer = (state = Allrent, action) => {
    switch (action.type) {
      case "ALLBOOKING" : 
        return action.payload;
      case "ADDNEWHOUSE" :
        return action.payload;
      case "MYBOOKING" :
        return action.payload;
      default : 
        return state;
    }
}
export default counterReducer;