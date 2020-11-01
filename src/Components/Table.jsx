import React from 'react';


const Table = (props) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><img src={props.image} alt="staff-member" /></th>
                    <td>{props.first}</td>
                    <td>{props.last}</td>
                    <td>{props.email}</td>
                    <td>{props.age}</td>
                </tr>
            </tbody>
        </table>
    );
}


export default Table;