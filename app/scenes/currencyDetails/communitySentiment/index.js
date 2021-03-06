/**
 * Created by workplace on 14/04/2017.
 * @flow
 */

'use strict';

import React from 'react';

import ReactNative, {
    View,
    ScrollView,
    Text,
    Image,
    RefreshControl,
    StyleSheet
} from 'react-native';

import {observer} from 'mobx-react/native';

@observer
export default class CommunitySentiment extends React.Component {
    render() {
        const {navigator, store} = this.props;

        return (
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={store.isLoading}
                        onRefresh={store.refresh}
                    />
                }
            >

                <View style={styles.viewContainer}>
                    
                    <View style={styles.column}>
                        <Text style={styles.text}>
                            {`${store.aggregate.bullish}`}
                        </Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../../resources/images/bull.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.text}>
                            {`${store.aggregate.catish}`}
                        </Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../../resources/images/cat.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.text}>
                            {`${store.aggregate.bearish}`}
                        </Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require('../../../resources/images/bear.png')}
                            />
                        </View>
                    </View>

                </View>

            </ScrollView>
        )
    }
}

CommunitySentiment.propTypes = {
    navigator: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
        pop: React.PropTypes.func.isRequired
    }),
    store: React.PropTypes.shape({
        aggregate: React.PropTypes.any.isRequired
    })
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
    },
    viewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
    },
    column: {
        width: 80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        padding: 5,
        height: 60,
        width: 60,
    },
    image: {
        height: 50,
        width: 50,
    },
    text: {
        fontSize: 36,
        fontWeight: "500",
    },
});
