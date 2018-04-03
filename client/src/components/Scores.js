import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  List,
  Container,
} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';

const styles = {
  scroller: { height: '60vh', overflow: 'auto' },
};

class Scores extends React.Component {
  state = { scores: [], total_pages: 0, page: 1 };

  componentDidMount() {
    axios
      .get(`/api/scores?page=${this.state.page}`)
      .then(({ data, headers }) => {
        this.setState({
          scores: data.scores,
          totalPages: data.total_pages,
        });
        this.props.dispatch({
          type: 'HEADERS',
          headers,
        });
      });
  }

  loadMore = () => {
    const page = this.state.page + 1;
    axios
      .get(`/api/scores?page=${page}`)
      .then(({ data, headers }) => {
        this.setState((state) => {
          return {
            scores: [
              ...this.state.scores,
              ...data.scores,
            ],
            page: state.page + 1,
          };
        });

        this.props.dispatch({
          type: 'HEADERS',
          headers,
        });
      });
  };

  render() {
    const { scores, page, totalPages } = this.state;
    return (
      <Container>
        <Header as="h2" textAlign="center">
          Scores
        </Header>
        <List divided style={styles.scroller}>
          <InfiniteScroll
            pageStart={page}
            loadMore={this.loadMore}
            hasMore={page < totalPages}
            useWindow={false}>
            {scores.map((s) => (
              <List.Item key={s.id}>
                <List.Content>
                  <List.Header>{s.score}</List.Header>
                  <List.Description>
                    {s.email}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </InfiniteScroll>
        </List>
      </Container>
    );
  }
}

export default connect()(Scores);