import React from "react";
import { ScrollView, Image } from "react-native";
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
            time="Il y à 4h"
            content="Nouveau conseil d'apprentissage sur le document CM2 --
                    Mathématiques -- Fractions"
            active={true}
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31963890_2374444179247952_4188247597896433664_n.png?_nc_cat=0&oh=ca83bbc0739c663165e8edb731e62b40&oe=5B90774C"
                }}
              />
            }
          />
          <Notifications
            time="Il y à 4h"
            content="Nouveau cours pour de Français pour les CE2 disponibles"
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31947394_2374452759247094_8231893035735056384_n.png?_nc_cat=0&oh=583a8e19150c09cb7b8dde983f235760&oe=5B98B6CC"
                }}
              />
            }
          />
          <Notifications
            time="Il y à 6h"
            content="Deux exercices ajouter par des contributeurs dans le chapitre CM1 -- Histoire -- Le temps des rois"
            active={true}
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31947394_2374452759247094_8231893035735056384_n.png?_nc_cat=0&oh=583a8e19150c09cb7b8dde983f235760&oe=5B98B6CC"
                }}
              />
            }
          />
          <Notifications
            time="27/04/2018 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM1 --
                    Histoire -- Découvrir le(s) lieu(x) où j'habite"
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31963890_2374444179247952_4188247597896433664_n.png?_nc_cat=0&oh=ca83bbc0739c663165e8edb731e62b40&oe=5B90774C"
                }}
              />
            }
          />
          <Notifications
            time="27/04/2018 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM2 --
                    Mathématiques -- Fractions"
            active={true}
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31947394_2374452759247094_8231893035735056384_n.png?_nc_cat=0&oh=583a8e19150c09cb7b8dde983f235760&oe=5B98B6CC"
                }}
              />
            }
          />
          <Notifications
            time="27/04/2018 à 16h20"
            content="Nouveau cours pour de Français pour les CE2 disponibles"
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31963890_2374444179247952_4188247597896433664_n.png?_nc_cat=0&oh=ca83bbc0739c663165e8edb731e62b40&oe=5B90774C"
                }}
              />
            }
          />
          <Notifications
            time="27/04/2018 à 16h20"
            content="Deux exercices ajouter par des contributeurs dans le chapitre CM1 -- Histoire -- Le temps des rois"
            active={true}
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31947394_2374452759247094_8231893035735056384_n.png?_nc_cat=0&oh=583a8e19150c09cb7b8dde983f235760&oe=5B98B6CC"
                }}
              />
            }
          />
          <Notifications
            time="27/04/2018 à 16h20"
            content="Nouveau conseil d'apprentissage sur le document CM1 --
                    Histoire -- Découvrir le(s) lieu(x) où j'habite"
            icon={
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri:
                    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/31963890_2374444179247952_4188247597896433664_n.png?_nc_cat=0&oh=ca83bbc0739c663165e8edb731e62b40&oe=5B90774C"
                }}
              />
            }
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
