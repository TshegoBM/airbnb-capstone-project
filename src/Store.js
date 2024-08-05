// Import necessary functions from Redux and Redux DevTools
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // Importing composeWithDevTools
import {thunk} from "redux-thunk"; // Import thunk middleware
import { listingListReducer } from "./reducers/listingReducer";
import { modalReducer } from "./reducers/modalReducer";
import { userLoginReducer } from "./reducers/userReducer";

// Combine all reducers into a single reducer
const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer,
});

// Get user info from local storage, if available
const userInfoFromLS = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Initial state for the Redux store
const initialState = {
  userLogin: { userInfo: userInfoFromLS },
};

// Array of middleware
const middleware = [thunk]; // Using thunk middleware

// Create the Redux store with DevTools extension support
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware and DevTools
);

export default store; // Export the store
