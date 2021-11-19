import { FETCH_SUBJECTS,FETCH_SUBJECTS_FAILURE,FETCH_SUBJECTS_SUCCESS } from "./SubjectTypes"
import axios from 'axios'

export const fetchSubjects=()=>{
    return {
   type:FETCH_SUBJECTS
    }
};

export const fetchSubjectsSuccess=(subjects)=>{
    return {
    type:FETCH_SUBJECTS_SUCCESS,
    payload:subjects
}
};

export const fetchSubjectsFailure=(err)=>{
    return {
    type:FETCH_SUBJECTS_FAILURE,
    payload:err
    }
};

export const fetch_subjects=()=>{
    console.log("SubjectActions running...");
    return function(dispatch){
        dispatch(fetchSubjects())
        axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(response=>{
            const sub=response.data
            dispatch(fetchSubjectsSuccess(sub))
        }).catch(err=>{
            const msg=err.message
            dispatch(fetchSubjectsFailure(msg))
        })
    }
}