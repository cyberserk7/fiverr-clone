import React from 'react'
import { Link } from 'react-router-dom'

import "./Messages.scss"

function Messages() {
  const currentUser = {
      id: 1,
      username:"nilabjodey",
      isSeller:true,
  }

  const message = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto autem natus nam accusamus maxime at. Rem excepturi quibusdam nobis ducimus quas voluptas dolores, eaque, explicabo neque laudantium veritatis perspiciatis et ex ea necessitatibus, vel accusamus eos optio adipisci nostrum repudiandae. Minus quia, similique voluptates unde officiis optio consequatur iste mollitia distinctio doloribus dolorem dolorum et, voluptate earum vel! Iusto quos quia un'

  return (
      <div className='messages'>
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>
                John Cena
              </td>
              <td>
                <Link to="/message/123" className='link'>
                  You cant see me muhahahahah!
                </Link>  
              </td>
                
              <td>1 Hour Ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr className='active'>
              <td>
                Debayani Roy
              </td>
              <td><Link className='link' to="/message/123"> {message.substring(0,98)}...</Link></td>
              <td>9 Hours Ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>
                Tupac Shakur
              </td>
              <td><Link className='link' to="/message/123"> {message.substring(0,98)}...</Link></td>
              <td>16 Hours Ago</td>
            </tr>
            <tr>
              <td>
                Monkey D. Luffy
              </td>
              <td><Link className='link' to="/message/123"> {message.substring(0,98)}...</Link></td>
              <td>3 Day Ago</td>
            </tr>
            <tr>
              <td>
                Nilabjo Dey
              </td>
              <td><Link className='link' to="/message/123"> {message.substring(0,98)}...</Link></td>
              <td>1 Week Ago</td>
            </tr>
          </table>
        </div>
      </div>
  )
}

export default Messages