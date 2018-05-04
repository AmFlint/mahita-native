import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";

class NotificationsPage extends React.Component {
  state = {
    notifications: {}
  };

  render() {
    return (
      <ScrollView>
        <PageContainer>
          <Notifications
            time="16/12/1994 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM2 --
          Mathématiques -- Fractions"
            active={true}
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Nouveau cours pour de Français pour les CE2 disponibles"
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Deux exercices ajouter par des contributeurs dans le chapitre CM1 -- Histoire -- Le temps des rois"
            active={true}
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM1 --
          Histoire -- Découvrir le(s) lieu(x) où j'habite"
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM2 --
          Mathématiques -- Fractions"
            active={true}
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Nouveau cours pour de Français pour les CE2 disponibles"
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Deux exercices ajouter par des contributeurs dans le chapitre CM1 -- Histoire -- Le temps des rois"
            active={true}
          />
          <Notifications
            time="16/12/1994 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM1 --
          Histoire -- Découvrir le(s) lieu(x) où j'habite"
          />
        </PageContainer>
      </ScrollView>
    );
  }
}

const PageContainer = styled.View`
  padding: 40px;

  display: flex;
  align-items: center;
`;

const Time = styled.Text`
  font-size: 14px;
  color: #a19f9e;
`;

const ContentContainer = styled.View`
  padding: 16px;
`;

const Content = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 400;
  width: 420px;=true
`;

const Container = styled.View`
  background-color: ${props =>
    props.active ? "rgba(0, 0, 0, 0.03)" : "#FFFFFF"};
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Icon = styled.View`
  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;
  margin: 16px;

  background: #000;
`;

function Notifications({ icon, time, content, active }) {
  return (
    <Container active={active}>
      <Icon>{icon}</Icon>
      <ContentContainer>
        <Time>{time}</Time>
        <Content>{content}</Content>
      </ContentContainer>
    </Container>
  );
}

Notifications.proptypes = {
  icon: Proptypes.element,
  time: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  active: Proptypes.bool
};

export default NotificationsPage;
