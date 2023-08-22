import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create user
export const createUser = createAsyncThunk("createUser", async (data,{rejectWithValue}) => {
  const response = await fetch(
    "https://64d3363267b2662bf3dbd4be.mockapi.io/redux",
    {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  try {
    const result=await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
});

//Read
export const showUser=createAsyncThunk("showUser",async (args,{rejectWithValue})=>{
  
    const response= await fetch("https://64d3363267b2662bf3dbd4be.mockapi.io/redux");

    try {
        const result=await response.json();
        console.log(result)
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }

});

//deleteUserdata
export const deleteUser=createAsyncThunk("deleteUser",async (id,{rejectWithValue})=>{
  
    const response= await fetch(`https://64d3363267b2662bf3dbd4be.mockapi.io/redux/${id}`,{
        method:"DELETE"
    }
    
    
    );

    try {
        const result=await response.json();
        console.log(result)
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }

});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users:[],
    loading: false,
    error: null,
  },
    extraReducers:{
        [createUser.pending]:(state)=>{
           state.loading=true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload)
         },
         [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload.message;
         },
         [showUser.pending]:(state)=>{
            state.loading=true;
         },
         [showUser.fulfilled]:(state,action)=>{
           
             state.loading=false;
             state.users =action.payload
          },
          [showUser.rejected]:(state,action)=>{
             state.loading=false;
             state.error=action.payload.message;
          },
          [deleteUser.pending]:(state)=>{
            state.loading=true;
         },
         [deleteUser.fulfilled]:(state,action)=>{
           
             state.loading=false;
             const{id}=action.payload
             if(id){

                 state.users =state.users.filter((ele)=>ele.id !==id)
             }
          },
          [deleteUser.rejected]:(state,action)=>{
             state.loading=false;
             state.error=action.payload.message;
          },


    },
  },
);
export default userDetail.reducer;
