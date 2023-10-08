import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
    },
    reducers: {
        addNewEmptyNote: (state, action ) => {
            
        },
        setActiveNote: ( state, action ) => {

        },
        setNote: ( state, action ) => {

        },
        setSaving: ( state ) => {

        },
        updateNote: ( state, action ) => {

        },
        deleteNoteById: ( state, action ) => {

        }, 
    }
});

// Se generan Action creators para cada función reductora 
export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNote, 
    setSaving, 
    updateNote, 
    deleteNoteById  } = journalSlice.actions;