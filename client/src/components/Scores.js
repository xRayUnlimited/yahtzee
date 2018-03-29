import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  List,
  Container,
} from 'semantic-ui-react';

class Scores extends React.Component {
  state = { scores: [] }

  componentDidMount() {
    axios.get('/api/scores')
      .then( ({ data, headers }) => {
        this.setState({ scores: data })
        this.props.dispatch({ type: 'HEADERS', headers })
      })
  }

  render() {
    const { scores } = this.state
    return (
      <Container>
        <Header as="h2" textAlign="center">
          Scores
        </Header>
        <List divided>
          { scores.map( s => 
              <List.Item key={s.id}>
                <List.Content>
                  <List.Header>{s.score}</List.Header>
                  <List.Description>
                    { s.email }
                  </List.Description>
                </List.Content>
              </List.Item>
            )
          }
        </List>
      </Container>
    )

  }
}

export default connect()(Scores)