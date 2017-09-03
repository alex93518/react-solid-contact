import React, {Component} from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import Container from './containers/Container';
import ViewSelectorContainer from './containers/ViewSelectorContainer'
import InputContainer from './containers/InputContainer'
import FavoriteListContainer from './containers/FavoriteListContainer'
import FloatingButtonContainer from './containers/FloatingButtonContainer'
import ContactModalContainer from './containers/ContactModalContainer'
import ContactListContainer from './containers/ContactListContainer'

class App extends Component {
    render() {
        const { view } = this.props;
        return(
            <div>
                <Header/>

                <ViewSelectorContainer/>
                {/* display container depend on view */}
                <Container visible = {view === 'favorite'}>
                    <FavoriteListContainer/>
                </Container>
                <Container visible = {view === 'list'}>
                    <InputContainer />
                    <ContactListContainer />
                </Container>
                <ContactModalContainer/>

                <FloatingButtonContainer/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        view: state.base.get('view')
    })
)(App);