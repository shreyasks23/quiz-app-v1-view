import { Component } from 'react';
import $ from 'jquery';
import { Card } from 'react-bootstrap';

class User extends Component {
    state = {
        usersList: []
    };

    componentDidMount = () => {

        $.get('http://localhost:49871/api/user').then((res) => {
            this.setState({
                usersList: res
            });
        })
    };

    render() {


        const list = this.state.usersList.length ? (this.state.usersList.map((v) => {
            return (
                <div key={v.UserID} className='p3 m3'>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header> User details </Card.Header>
                        <Card.Body>
                            <Card.Subtitle> User Name :</Card.Subtitle>
                            <Card.Title>{v.UserName}</Card.Title>
                    Password :
                    <p> {v.Password}</p>
                    Is deleted :
                    <p> {v.IsDeleted.toString()}</p>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content notinh really added here.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            );
        })) : (<p>no user loaded yet</p>)

        return (
            <div className='fluid'>
                {list}
            </div>
        );
    };

};
export default User