import React, { Component } from 'react';
import { View, Dimensions, KeyboardAvoidingView, ScrollView, Text, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCourse } from '../actions';
import CustomPicker from './common/CustomPicker';

const maxWidth = Dimensions.get('window').width;

class AddCoursePage extends Component {

    static navigationOptions = {
        header: null,
        title: 'Documents'
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            classeId: 0,
            categoryId: 0
        };
    }

    _handleSubmit = () => {
        // TODO: Handle Submit
        const {
            title,
            content,
            classeId,
            categoryId
        } = this.state;
        if (!title || !content || !classeId || !categoryId) {
            return;
        }

        // Dispatch action -> Add course
        this.props.addCourse(title, content, classeId, categoryId);
        this.props.navigation.goBack();
    };

    render() {
        return (
            <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 20 }}>
            <KeyboardAvoidingView behavior="position">
                <View style={{width: maxWidth * .6}}>
                    {/* Header */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headerTitle}>CREATION DE DOCUMENT</Text>
                        <Text style={styles.headerContent}>
                            Ici, vous pouvez créer un nouveau document avec des exercices ou cours que vous souhaitez partager avec les autres enseignants.
                        </Text>
                    </View>
                    {/* Titre */}
                    <View style={[styles.sectionContent, {marginTop: 25}]}>
                        <Text style={styles.title}>Titre</Text>
                        <View style={styles.sectionContainer}>
                            <TextInput 
                                style={styles.titleInput}
                                value={this.state.title}
                                placeholder="Niveau — Matière — Chapitre"
                                onChangeText={(text) => this.setState({title: text})}
                            />
                        </View>
                    </View>
                    {/* Tags (Classes, Matière) */}
                    <View style={styles.sectionContent}>
                        <Text style={styles.title}>Tags</Text>
                        <View style={[styles.sectionContainer, styles.tagContainer]}>
                            <CustomPicker
                                    label={'Classe'}
                                    changeable={true}
                                    handleChange={(classeId) => this.setState({classeId})}
                                    items={this.props.classes} />
                            <CustomPicker
                                changeable={true}
                                label={'Matière'}
                                handleChange={(categoryId) => this.setState({categoryId})}
                                items={this.props.categories} />
                        </View>
                    </View>
                    {/* Content */}
                    <View>
                        <Text style={styles.title}>Contenu</Text>
                        {/* wyziwyg */}
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({content: text})}
                            value={this.state.content}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 30}}>
                        <View style={{marginRight: 20}}>
                            <Button
                                color="#FF7E7E"
                                title="Annuler"
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </View>
                        <View>
                            <Button 
                                color="#FF780B"
                                title="Créer"
                                onPress={() => this._handleSubmit()}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    },
    headerContent: {
        fontSize: 14,
        textAlign: 'center',
        width: 460
    },
    tagContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    sectionContent: {
        marginBottom: 30
    },
    sectionContainer: {
        marginTop: 15
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    titleInput: {
        paddingBottom: 10,
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 16
    }
});

const mapStateToProps = ({ classes, categories }) => {
    return { classes, categories };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addCourse
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoursePage);