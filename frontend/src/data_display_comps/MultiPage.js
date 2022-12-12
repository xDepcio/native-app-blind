import { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";


function MultiPage() {

    const tagData = useSelector((state) => state.tag.data)
    const [pages, setPages] = useState([])
    const [selectedPage, setSelectedPage] = useState(0)

    const parseMultiPageData = (data) => {
        if(!data) data = ''
        setPages(data.split('<p>').map((page) => page.split('<n>')))
        // setParagraphs(data.split('<n>'))
    }

    useEffect(() => {
        parseMultiPageData(tagData)
    }, [tagData])

    return (
        <View style={styles.wrapper}>
            {pages.map((page, i) => {
                return (
                    <View style={styles.page} id={`page-${i}`} key={i}>
                        {page.map((paragraph, j) => (
                            <Text key={j} style={styles.text}>{paragraph}</Text>
                        ))}
                    </View>
                )
            })}
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
    },
    page: {
        // position: 'absolute',
        // transform: 'translateX(300px)',
        // backfaceVisibility: 'hidden'
    }
})

export default MultiPage
