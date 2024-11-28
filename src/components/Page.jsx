import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page = ({children}) => {
  return (
    <View style={styles.page}>
   {children}
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    page: {
        padding: 15,
        justifyContent: 'space-between',
        flex: 1,
      },
})