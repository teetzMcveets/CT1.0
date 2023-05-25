import { createSlice } from '@reduxjs/toolkit';
import generateUID from '../../utilities/generateUID';
import { arnieMcVeighty, danMilverton, jamieFranks, amiKaur } from '../../utilities/hadCode';

const initialState = {
    byId: {
        [arnieMcVeighty.id]: arnieMcVeighty,
        [danMilverton.id]: danMilverton,
        [jamieFranks.id]: jamieFranks,
        [amiKaur.id]: amiKaur,
    },
    allIds: [arnieMcVeighty.id, danMilverton.id, jamieFranks.id, amiKaur.id],
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
                        status: 'Active',
                    }
                }
            },
        },
        toggleStatus: (state, action) => {
            const { id } = action.payload;
            const candidate = state.byId[id];
            if (candidate) {
                candidate.status = candidate.status === 'Active' ? 'Archived' : 'Active';
            }
        },
    }
});

export const {
    addCandidate,
    toggleStatus,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;