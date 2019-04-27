const initState = {
    projects:[
        {id:'1', title:'RHI', content:'Ionic 3'},
        {id:'2', title:'Chatbot', content:'Angular , Dialogflow, Node Js, SQL'},
        {id:'3', title:'POC', content:'Ionic 4, Angular 6'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project',action.project)
    }
    return state;
}

export default projectReducer;