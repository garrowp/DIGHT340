const searchTermChanged = (searchTerm) => {
    return {
        type: 'SEARCH_INPUT_CHANGED',
        payload: { searchTerm },
    };
};

export default {
    searchTermChanged,
}