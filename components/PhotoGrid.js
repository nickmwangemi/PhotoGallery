import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'

export default PhotoGrid = ({ photos, numColumns, onEndReached }) => {
	const { width } = Dimensions.get('window')
	const size = width / numColumns
	return <div></div>
}
