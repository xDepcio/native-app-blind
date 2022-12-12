import { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";


function SinglePage() {

    const tagData = useSelector((state) => state.tag.data)
    const [paragraphs, setParagraphs] = useState([])

    const parseOnePageData = (data) => {
        if(!data) data = ''
        setParagraphs(data.split('<n>'))
    }

    useEffect(() => {
        parseOnePageData(tagData)
    }, [tagData])

    return (
        <View style={styles.wrapper}>
            {paragraphs.map((paragraph, i) => {
                return (
                    <Text key={i} style={styles.text}>{paragraph}</Text>
                )
            })}
            {/* <Text style={styles.text}>{tagData}{tagData}{tagData}{tagData}{tagData}{tagData}</Text>
            <Text style={styles.text}>{tagData}</Text>
            <Text style={styles.text}>{tagData}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({ // CSS-like styling
    text: {
        color: 'rgb(77, 77, 77)',
        fontSize: 17,
        padding: 5,
        textAlign: 'center'
    },
    wrapper: {
        backgroundColor: 'white',
        height: '72%',
        width: '96%',
        borderRadius: 9,
        // paddingHorizontal: 10,
    }
})

export default SinglePage
