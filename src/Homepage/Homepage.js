import { Component } from 'react';
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
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
        console.log(this.state.user);
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <p align='right'>
                    <Link to="/login">Logout</Link>
                </p>
            <table className='table col-lg-10' align='center'>                
                <thead>
                    <tr>
                       <td colSpan='3' align='center'><h3>User Details</h3></td>
                    </tr>
                    <tr><th>User Name</th>
                        <th>Password</th>
                        <th>Is active</th>
                    </tr>
                </thead>
                <tbody>{ users.length ? users.map((user) =>
                            <tr key={user.UserID}>
                                <td>{user.UserName}</td>
                                <td>{user.Password}</td>
                                <td>{user.IsDeleted.toString()}</td>
                            </tr>) : null}
                </tbody>
                </table>
                </div>    
        );
    }
}
export { HomePage }