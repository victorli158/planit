import { connect } from 'react-redux';
import Login from './Login';
import { signIn, signUp, signOut } from '../../actions/session/sessionActions';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
  signUp: (user) => dispatch(signUp(user)),
  signOut: () => dispatch(signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)