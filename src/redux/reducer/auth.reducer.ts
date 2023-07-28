import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { lsStorage } from '~/utils/storage'

interface AuthState {
  isAuthenticated: boolean | null
}

const initialState: AuthState = {
  isAuthenticated: Boolean(lsStorage('access_token').getItem())
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    }
  }
})

export default authSlice.reducer
export const { setIsAuthenticated } = authSlice.actions
