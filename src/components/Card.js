import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
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

function Card(props) {
    const getCategoryFromId = (id) => props.categories.find(category => category.id === id);
    const getClassFromId = (id) => props.classes.find(classe => classe.id === id);
    const classe = getClassFromId(props.course.classes[0]);
    const category = getCategoryFromId(props.course.categorie);
    const imagePath = category.image;

  //TODO: Change props.course.classes[0]
  //TODO: Change props.course.classes[0]
    return (
      <TouchableHighlight onPress={props.handlePress}>
        <CardContainer style={[{width: props.itemWidth}, props.itemStyle]}>
          <CardImage
            source={{ uri: imagePath }}
          />
          <CardContent>
            <CardTitle>{ props.course.name.replace(/\b\w/g, l => l.toUpperCase()) }</CardTitle>
            <CardTagsContainer>
              <CardTag style={{ backgroundColor: '#89D7F0', marginRight: 10 }}>{ classe.name }</CardTag>
              <CardTag style={{backgroundColor: '#7ED6A2'}}>{ category.name }</CardTag>
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

const mapStateToProps = ({ categories, classes}) => {
  return {
      classes,
      categories
  };
};

export default connect(mapStateToProps)(Card);
