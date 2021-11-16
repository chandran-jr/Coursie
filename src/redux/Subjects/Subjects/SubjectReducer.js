import {FETCH_SUBJECTS,FETCH_SUBJECTS_FAILURE,FETCH_SUBJECTS_SUCCESS} from "./SubjectTypes"

const initialState={
    loading:true,
    subjects:[],
    err:''
}


const SubjectReducer=(state=initialState,action)=>{

    switch(action.type){
        case FETCH_SUBJECTS:return {
            ...state,
            loading:true,
            subjects:[],
            err:''
        }

        case FETCH_SUBJECTS_SUCCESS:return {
            ...state,
            loading:false,
            subjects:action.payload,
            err:''
        }

        case FETCH_SUBJECTS_FAILURE:return {
            ...state,
            loading:false,
            subjects:[],
            err:action.payload
        }

        default :return state
    }
}

export default SubjectReducer
