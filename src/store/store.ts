import { configureStore } from "@reduxjs/toolkit";
import drumMachineReducer from '../features/drum-machine/drum-machine.slice'

const store = configureStore({
  reducer: {
    drumMachine: drumMachineReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
