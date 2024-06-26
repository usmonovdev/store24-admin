import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  isLoading: false,
  productCategories: [],
  productCategoriesFailur: false,
  allProducts: [],
  allProductsFailur: false,
  singleProduct: {},
  singleProductFailur: false,
  allBrands: [],
  allBrandsFailur: false,
};

export const productAndcategoriSlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {
    getCategoryStart: (state) => {
      state.isLoading = true;
      state.productCategoriesFailur = false;
    },
    getCategorySucces: (state, action) => {
      state.isLoading = false;
      state.productCategories = action.payload;
      state.productCategoriesFailur = false;
    },
    getCategoryFailur: (state) => {
      state.isLoading = false;
      state.productCategoriesFailur = true;
    },
    getProductStart: (state) => {
      state.allProductsFailur = false;
    },
    getProductSucces: (state, action) => {
      state.allProducts = action.payload;
      state.allProductsFailur = false;
    },
    getProductFailur: (state) => {
      state.isLoading = false;
      state.allProductsFailur = true;
    },
    getBrandsStart: (state) => {
      state.allBrandsFailur = false;
    },
    getBrandsSucces: (state, action) => {
      state.allBrands = action.payload;
      state.allBrandsFailur = false;
    },
    getBrandsFailur: (state) => {
        state.allBrandsFailur = true
    },
    getSingleProductStart: (state) => {
      state.isLoading = true;
    },
    getSingleProductSucces: (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload;
    },
    getSingleProductFailur: (state) => {
      state.singleProductFailur = true;
    },
  },
});

export const {
  getCategoryStart,
  getCategorySucces,
  getCategoryFailur,
  getProductStart,
  getProductSucces,
  getProductFailur,
  getBrandsStart,
  getBrandsSucces,
  getBrandsFailur,
  getSingleProductStart,
  getSingleProductSucces,
  getSingleProductFailur,
} = productAndcategoriSlice.actions;

export default productAndcategoriSlice.reducer;
