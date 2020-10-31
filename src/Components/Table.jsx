import React, { Component } from 'react';


const Table = (props) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Winters Old</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>1234322</td>
                    <td>@aol</td>
                    <td>December 12</td>
                    
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>12343431</td>
                    <td>@gmail</td>
                    <td>November 4</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>4`37``37</td>
                    <td>@twitter</td>
                    <td>April 1</td>
                </tr>
            </tbody>
        </table>
    );
}


export default Table;