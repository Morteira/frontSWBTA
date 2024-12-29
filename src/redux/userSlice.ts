import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    clearUserId: (state) => {
      state.userId = '';
    },
  },
});

export const { setUserId, clearUserId } = userSlice.actions;

export default userSlice.reducer;
