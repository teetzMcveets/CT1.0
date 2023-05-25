import { createSlice } from '@reduxjs/toolkit';
import generateUID from '../../utilities/generateUID';
import { arnieMcVeighty, danMilverton } from '../../utilities/hadCode';

const initialState = {
    byId: {
        [arnieMcVeighty.id]: arnieMcVeighty,
        [danMilverton.id]: danMilverton,
    },
    allIds: [arnieMcVeighty.id, danMilverton.id],
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