import React, { Component } from 'react'
import {Text, View }from 'react-native'
import Slider from '@react-native-community/slider'

function Slidder ({ max, unit, step, value, onChange }) {
        return (
            <View>
            <Slider
              step={step}
              value={value}
              maximumValue={max}
              minimumValue={0}
              onValueChange={onChange}
            />
            <View>
              <Text>{value}</Text>
              <Text>{unit}</Text>
            </View>
          </View>
        )
}

export default Slidder
