import React from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

function DateHeader({ date }) {
  return (
    <Text style={{color: purple, fontSize: 25}}>
      {date}
    </Text>
  )
}

export default DateHeader
