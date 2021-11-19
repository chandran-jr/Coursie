import { applyMiddleware, createStore } from "redux";
import SubjectReducer from "./Subjects/SubjectReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(
	SubjectReducer,
	composeWithDevTools(applyMiddleware(logger, thunk)));

export default store