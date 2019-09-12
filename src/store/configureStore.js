import { createStore, applyMiddleware } from 'redux'
import allReducers from '../reducers/index'
import { logger } from './enchancers/logger'

export default function configureStore(initialState) {
	const store = createStore(allReducers, initialState, applyMiddleware(logger))

	if(module.hot) {
		module.hot.accept('../reducers/', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}