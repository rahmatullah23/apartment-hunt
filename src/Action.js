export const allBooking = (component) => {
    return {
      type: 'ALLBOOKING',
      payload: component
    }
}
export const addNewHouse = (component) => {
  return {
    type: 'ADDNEWHOUSE',
    payload: component
  }
}
export const myBooking = (component) => {
  return {
    type: 'MYBOOKING',
    payload: component
  }
}