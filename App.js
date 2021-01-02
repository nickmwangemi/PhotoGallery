import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useReducer, useCallback } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { getList } from './api/picsum'
import { actionCreators, initialState, reducer } from './reducers/photos'
import PhotoGrid from './components/PhotoGrid.js'

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const { photos, nextPage, loading, error } = state

	// Show error only if the first page fails to load
	if (photos.length === 0) {
		if (loading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator animating={true} />
				</View>
			)
		}

		if (error) {
			return (
				<View style={styles.container}>
					<Text>Failed to load photos!</Text>
				</View>
			)
		}
	}
	return <PhotoGrid numColumns={3} photos={photos} />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
