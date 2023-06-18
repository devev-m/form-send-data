import { createSlice } from '@reduxjs/toolkit';

export enum Sex {
  man = 'man',
  woman = 'woman',
}

export type FormDataType = {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  sername: string;
  sex?: Sex;
  advantages?: string[];
  checkbox?: number[];
  radio?: number;
  about: string;
};

const initialState: FormDataType = {
  phone: '+7 (999) 999-99-99',
  email: 'mashkovtsevea@gmail.com',
  nickname: '',
  name: '',
  sername: '',
  sex: undefined,
  advantages: undefined,
  checkbox: undefined,
  radio: undefined,
  about: '',
};

export const formSlice = createSlice({
  name: 'formData',
  initialState: initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => {
      return initialState;
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
