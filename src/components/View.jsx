import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  const [user, setData] = useState([])
  const fetchData = () => {
    axios.get("http://localhost:8235/view").then(
      (response) => {
        setData(response.data)
      }
    ).catch(
      (error) => {
        alert(error.message)
      }
    )
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">User List</h5>
          <p></p>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user.map(
                        (value, index) => {
                          return <tr>
                            <td>{value.name}</td>
                            <td>{value.uname}</td>
                            <td>{value.email}</td>
                            <td>{value.mob}</td>
                            <td>{value.bldgrp}</td>
                          </tr>
                        }
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <br />
          <b>Go Back <a href="/">Home</a></b>
        </div>
      </div>
    </div>
  )
}

export default View