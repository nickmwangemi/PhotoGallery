const types = {
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE',
}

export const actionCreators = {
	loading: () => ({ type: types.LOADING }),
	failure: () => ({ type: types.FAILURE }),
	success: (photos, page) => ({
		type: types.SUCCESS,
		payload: { photos, page },
	}),
}

export const initialState = {
	loading: false,
	error: false,
	photos: [],
	nextPage: 1,
}
