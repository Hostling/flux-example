// Reducer (выполняет действие над state)
function counter(state = 0, action) {
    if(action.type == "+") {
        return state + 1;
    } else if (action.type == "-") {
        return state - 1;
    } else {
        return state;
    }
}

// Создаем store и передаем в него reducer
const createStore = function (reducer) {
    let state;

    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
    };

    //Возвращаем функцию
    return {getState, dispatch};
}

const store = createStore(counter);

store.dispatch({type: "+"});
store.dispatch({type: "+"});
store.dispatch({type: "+"});
store.dispatch({type: "-"});

console.log(store.getState());