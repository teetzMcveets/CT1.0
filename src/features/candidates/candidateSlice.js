import { createSlice, createSelector } from '@reduxjs/toolkit';
import generateUID from '../../utilities/generateUID';
import { arnieMcVeighty, danMilverton } from '../../utilities/hadCode';

const initialState = {
    candidates: {
        byId: {
            [arnieMcVeighty.id]: arnieMcVeighty,
            [danMilverton.id]: danMilverton,
        },
        allIds: [],
    }
}

const candidatesSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        addCandidate: {
            reducer: (state, action) => {
                const { id } = action.payload;
                state.candidates.byId[id] = action.payload;
                state.candidates.allIds.push(id);
            },
            prepare: (candidate = {}) => {
                const id = generateUID().toString();
                return {
                    payload: {
                        ...candidate,
                        id,
                    }
                }
            }
        }
    }
});

export const {
    addCandidate,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;