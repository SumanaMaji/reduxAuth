import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"

//action
export const getAllData = createAsyncThunk("getTrips", async () =>{
    const response = await fetch("https://travel-api-lous.onrender.com/api/v1/admin/trip");

try{
  const result = response.json();
  return result;
}catch(error){
return isRejectedWithValue('oops not found')
}

   
})

export const getTrip = createSlice({
    name: 'getTrip',
    initialState: {
        trips:[],
        loading:false,
        error : null,
    },
    extraReducers: {
      [getAllData.pending]: (state) => {
        state.loading = true;
      },
      [getAllData.fulfilled]: (state, action) => {
        state.loading = false;
        state.trips = action.payload.data;
      },
      [getAllData.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
});

export default getTrip.reducer;