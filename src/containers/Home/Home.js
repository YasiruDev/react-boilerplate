import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { getPosts } from "../../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.postList !== this.props.postList) {
      this.setState({ posts: this.props.postList });
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="main">
          <Container className="container">
            <p>Body</p>
          </Container>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPosts }, dispatch);
};
const mapStateToProps = ({ postList }) => {
  return { postList };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
