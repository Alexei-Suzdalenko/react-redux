import {createStore} from 'redux';
const $form = document.getElementById('form');
const $container = document.getElementById('playlist');

$form.addEventListener('submit', handleSubmit); 

function handleSubmit(event){
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);
    store.dispatch({
        type: 'ADD_SONG', payload: {title: title}
    });
};

const intitialState = [{"title": "Despacito"}, {"title": "One more time"}, {"title": "Echame la culpa"}];

const reducer = function(state, action){
    switch(action.type){
        case 'ADD_SONG': return [...state, action.payload];
        default : return state;
    }
}

const store = createStore(
    reducer,              // reducer
    intitialState,        // init state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render(){
    const playlist = store.getState();
    $container.innerHTML = '';
    playlist.forEach((item) => {
      const template = document.createElement('p');
      template.textContent = item.title;
      $container.appendChild(template);
    });
};      

render();
    
store.subscribe(render);      

console.log(store.getState());