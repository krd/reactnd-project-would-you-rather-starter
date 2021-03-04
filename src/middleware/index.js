import logger from './logger'
import validator from './validator'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,
    logger,
    validator,
)