import React from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { sliderImages } from '../constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
    return (
        <View style={{height: hp(30)}}>
        <Carousel
            data={sliderImages}
            loop={true}
            autoPlay={true}
            autoPlayInterval={4000}
            renderItem={({ item, index }) => <ItemCard item={item} index={index} />}
            width={wp(100)} // Width set to 100% of the screen to center items properly
            height={hp(30)} // Height of each slide            
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale:1,
                parallaxScrollingOffset:100,            
            }}
            style={{justifyContent: 'center', alignItems: 'center' }} // Centering carousel
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10], // Ensures smooth sliding experience
            }}
        />
</View>
    );
}

const ItemCard = ({ item }) => {
    return (
        <View style={{
            width: wp(70), // Adjusted width to 80% of the screen to create padding
            height: hp(30),
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: wp(2.5),
            alignSelf: 'center',
            
        }}>
            <Image
                source={item}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    resizeMode: 'cover',
                }}
            />
        </View>
    );
};