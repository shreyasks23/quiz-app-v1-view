import {Component} from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../_services/user.service';

class HomePage extends Component {
    constructor(props) {
        super(props);   

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount = () => {
        this.setState({
            user: localStorage.getItem('user'),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.UserName}!</h1>
                <p>You're logged in with React & Basic HTTP Authentication!!</p>
                <h3>Users from secure api end point:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.length &&
                    <ul>
                    {users.map((user) =>                            
                            <li key={user.UserId}>
                                {user.UserName}
                            </li>
                            
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}
export {HomePage}