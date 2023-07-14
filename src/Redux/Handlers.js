// HTTP HANDLERS
export const handlePending = state => {
    state.isLoading = true;
};

export const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};

export const handleFulfilled = (state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    state.items = payload;
};

export const handleFulfilledAdd = (state, {payload}) => {
state.isLoading = false;
state.error = null;
state.items.push(payload);
};

export const handleFulfilledDelete = (state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(contact => contact.id === payload.id);
    state.items.splice(index, 1);
};

export const handleFulFilledUpdate = (state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(contact => contact.id === payload.id);
    state.items[index] = payload;
};