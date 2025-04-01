import{createSlice} from"@reduxjs/toolkit";

interface cartSlicetype{
    selectedProducts :any
}
 const initialState:cartSlicetype={
    selectedProducts :[],

 };

 export const cartSlice=createSlice({
    name:"home",
    initialState,
    reducers:{
        setProducts(state,payload:any){
                state.selectedProducts =[...state.selectedProducts,payload.payload];
            },
        },
    });