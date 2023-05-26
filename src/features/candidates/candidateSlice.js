import { createSlice, createSelector } from '@reduxjs/toolkit';
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
    searchCriteria: {
        name: '',
        number: '',
        industry: 'All',
        status: 'Active',
    },
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
        setSearchCriteria: (state, action) => {
            state.searchCriteria = action.payload;
        },
        clearSearchCriteria: (state, action) => {
            state.searchCriteria = {
                name: '',
                number: '',
                industry: 'All',
                status: 'All',
            }
        }
    }
});

export const {
    addCandidate,
    toggleStatus,
    setSearchCriteria,
    clearSearchCriteria,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;

export const selectFilteredCandidates = createSelector(
    (state) => state.candidate.allIds.map((id) => state.candidate.byId[id]),
    (state) => state.candidate.searchCriteria,
    (candidates, { name, number, industry, status }) => {
        let filteredCandidates = [...candidates];

        if (name) {
            filteredCandidates = filteredCandidates.filter((candidate) => 
                (candidate.firstName && candidate.firstName.includes(name)) ||
                (candidate.lastName && candidate.lastName.includes(name))
            );
        }
        if (number) {
            filteredCandidates = filteredCandidates.filter((candidate) =>
                candidate && candidate.number && candidate.number.includes(number)
            );
        }
        if (industry && industry !== 'All') {
            filteredCandidates = filteredCandidates.filter((candidate) => candidate.industry === industry);
        }
        if (status && status !== 'All') {
            filteredCandidates = filteredCandidates.filter((candidate) => candidate.status === status);
        }

        return filteredCandidates;
    }
);