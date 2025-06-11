
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VenueState {
  selectedDate: string | null;
  selectedTime: string | null;
  guests: number;
  showAllImages: boolean;
}

const initialState: VenueState = {
  selectedDate: null,
  selectedTime: null,
  guests: 50,
  showAllImages: false,
};

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload;
    },
    setSelectedTime: (state, action: PayloadAction<string | null>) => {
      state.selectedTime = action.payload;
    },
    setGuests: (state, action: PayloadAction<number>) => {
      state.guests = action.payload;
    },
    toggleShowAllImages: (state) => {
      state.showAllImages = !state.showAllImages;
    },
  },
});

export const { setSelectedDate, setSelectedTime, setGuests, toggleShowAllImages } = venueSlice.actions;
export default venueSlice.reducer;
