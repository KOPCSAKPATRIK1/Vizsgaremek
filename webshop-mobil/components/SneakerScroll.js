import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SneakerScrollItem from './SneakerScrollItem'

const SneakerScroll = ({data}) => {
  return (
    <ScrollView horizontal className="h-[185px] w-full">
          {data.slice(0,15).map((item) => (
            <SneakerScrollItem key={item.id} item={item} />
          ))}
    </ScrollView>
  )
}

export default SneakerScroll