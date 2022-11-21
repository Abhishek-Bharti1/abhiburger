import { createReducer } from "@reduxjs/toolkit";

export const ordersReducer = createReducer(
  { orders: [] },
  {
    getMyOrdersRequest: (state) => {
      state.loading = true;
    },
    getMyOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getMyOrdersFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    getOrderDetailsRequest: (state) => {
        state.loading = true;
      },
      getOrderDetailsSuccess: (state, action) => {
        state.loading = false;
        state.order = action.payload;
      },
      getOrderDetailsFail: (state, action) => {
        state.loading = true;
        state.error = action.payload;
      },

      clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
  }
);
