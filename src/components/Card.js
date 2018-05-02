import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const CardContainer = styled.View`
  border: 1px solid black;
  border-radius: 11px;
  background-color: #fff;

  overflow: hidden;

  width: 300px;
  height: auto;
`;

const CardImage = styled.Image`
  height: 150px;
`;

const CardContent = styled.View`
  padding: 8px 16px;
`;

const CardTagsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  padding: 5px 0;
`;

const CardTag = styled.Text`
  padding: 2px 10px;
  border: 1px solid black;
  border-radius: 100px;
`;

const CardTitle = styled.Text`
  font-size: 22px;
  font-weight: 900;
  margin: 10px 0;
`;

const CardDescription = styled.Text`
  font-size: 16px;
  font-weight: 100;

  color: gray;
`;

const CardDate = styled.View`
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

function Card(props) {
  //TODO: Change props.course.classes[0]
  //TODO: Change props.course.classes[0]
    return (
    <CardContainer>
      <CardImage
        source={{ uri: "https://i.chzbgr.com/full/7345954048/h7E2C65F9/" }}
      />
      <CardContent>
        <CardTagsContainer>
          <CardTag style={{ marginRight: 10 }}>{ props.course.classes[0] }</CardTag>
          <CardTag>{ props.course.category } </CardTag>
        </CardTagsContainer>
        <CardTitle>{ props.course.name }</CardTitle>
        <CardDescription>
            {props.course.description}
        </CardDescription>
        <CardDate>
          <Text style={{ fontStyle: "italic", color: "#CECECE" }}>
            Vendredi 20 Avril 2018
          </Text>
        </CardDate>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
