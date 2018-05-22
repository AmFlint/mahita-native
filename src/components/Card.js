import React from "react";
import styled from "styled-components";
import { Image, Text, View , TouchableHighlight} from "react-native";

const CardContainer = styled.View`
  border: 1.5px solid #D2D2D2;
  border-radius: 5px;
  background-color: #fff;

  overflow: hidden;

  height: auto;
`;

const CardImage = styled.Image`
  height: 150px;
`;

const CardContent = styled.View`
  padding: 12px 16px;
`;

const CardTagsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const CardTag = styled.Text`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 10px;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 12px;
`;

const CardDescription = styled.Text`
  font-size: 16px;
  font-weight: 100;

  color: gray;
`;

const CardDate = styled.View`
  padding: 10px 0 10px 10px;
  display: flex;
`;

export default function Card({itemWidth, course, handlePress, itemStyle}) {
    const imagePath = course.categorie.image;

    return (
      <TouchableHighlight onPress={handlePress}>
        <CardContainer style={[{width: itemWidth}, itemStyle]}>
          <CardImage
            source={{ uri: imagePath }}
          />
          <CardContent>
            <CardTitle>{ course.name.replace(/\b\w/g, l => l.toUpperCase()) }</CardTitle>
            <CardTagsContainer>
              <CardTag style={{ backgroundColor: '#89D7F0', marginRight: 10 }}>{ course.classe.name }</CardTag>
              <CardTag style={{backgroundColor: '#7ED6A2'}}>{ course.categorie.name }</CardTag>
            </CardTagsContainer>
            <CardDate>
              <Text style={{ fontStyle: "italic", color: "#CECECE" }}>
                Vendredi 20 Avril 2018
              </Text>
            </CardDate>
          </CardContent>
        </CardContainer>
      </TouchableHighlight>
  );
}