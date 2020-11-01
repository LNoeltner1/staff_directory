import React from 'react';


const Table = ({staffMember: {picture, name, email, dob}}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col"><h2>Image</h2></th>
                    <th scope="col"><h2>First Name</h2></th>
                    <th scope="col"><h2>Last Name</h2></th>
                    <th scope="col"><h2>Email</h2></th>
                    <th scope="col"><h2>Age</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><img src={picture.thumbnail} className="img-fluid" alt="thumbnail" /></th>
                    <td>{name.first}</td>
                    <td>{name.last}</td>
                    <td><a href={email}>{email}</a></td>
                    <td>{dob.age}</td>
                </tr>
            </tbody>

        </table>
    );
}


export default Table;