import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
        const currentState = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sortBy: 'amount'
    };

    const action ={ type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: "Hello" });
    expect(state.text).toBe("Hello");
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: moment().startOf('year') })
    expect(state.startDate).toEqual(moment().startOf('year'))
});

test('should set endDate', () => {
    const endDate = moment().endOf('year');
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: endDate });
    expect(state.endDate).toEqual(endDate);
})
//should set text filter

//should set startDate filter

//should set endDate filter