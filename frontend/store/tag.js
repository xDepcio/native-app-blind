import constants from "../ultis/constants"

const LOAD_TAG = 'tag/loadTag'

// Normal action creator
export const loadTag = (tag) => {
    return {
        type: LOAD_TAG,
        tag
    }
}

// Thunk action creators
export const getTagData = (tagId) => async (dispatch) => {
    const response = await fetch(`${constants.serverIp}/api/tags?tagId=${tagId}`)

    if(response.ok) {
        const tag = await response.json()
        dispatch(loadTag(tag))
        return tag
    }
}

// state object
const initialState = {
    data: null
};

// Reducer
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_TAG: {
            const newState = {...state}
            newState.data = action.tag?.data
            newState.type = action.tag?.type
            newState.tagId = action.tag?.tagId
            console.log('store', newState)
            return newState
        }
        default: {
            return state
        }
    }
}

export default appReducer
