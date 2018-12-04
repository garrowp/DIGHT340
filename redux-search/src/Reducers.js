import Cards from './data/cards';

const initialState = {
    cards: Cards,
    searchTerm: '',
};

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SEARCH_INPUT_CHANGED':
            const { searchTerm } = action.payload;

            return{
                ...state,
                searchTerm: searchTerm,
                cards: searchTerm ? Cards.filter((card) => {
                    const cardName = (card.name) ? card.name : '';
                    const cardFlavor = (card.flavor) ? card.flavor : '';

                    //returns match of name or flavor
                    return cardName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || cardFlavor.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

                }) : Cards,
            };

        default:
            return state;
    }
};

export default Reducer;