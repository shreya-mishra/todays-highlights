import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);
  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles);
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 10).length - 1}
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});
export default NewsScreen;
