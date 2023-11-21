import React from 'react'
import "./Orders.scss"
import { Link } from 'react-router-dom'

function Orders() {
  const currentUser = {
    id: 1,
    username:"nilabjodey",
    isSeller:true,
  }
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Order</h1>
          <Link to="/add">
            <button>
            Add New Gig
              </button>  
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            </td>
            <td>Create Amazing AI Art</td>
            <td>$100</td>
            <td>John Cena</td>
            <td>
              <Link to="/message/123">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              </Link>


            </td>
          </tr>
          <tr>
            <td>
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            </td>
            <td>Create AI Generated Logo</td>
            <td>$50</td>
            <td>Tupac Shakur</td>
            <td>
              <Link to="/message/123">    
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
              </Link>


            </td>
          </tr>
          <tr>
            <td>
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            </td>
            <td>AI Generated Mockups</td>
            <td>$29.99</td>
            <td>Monkey D. Luffy</td>
            <td>
            <Link to="/message/123">    
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
                </Link>


            </td>
          </tr>
          <tr>
            <td>
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            </td>
            <td>Midjourney AI Images Professional</td>
            <td>$89.99</td>
            <td>Debayani Roy</td>
            <td>
            <Link to="/message/123">
                
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
                </Link>


            </td>
          </tr>
          <tr>
            <td>
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            </td>
            <td>AI Generated Summaries GPT 4</td>
            <td>$19.99</td>
            <td>Nilabjo Dey</td>
            <td>
            <Link to="/message/123">
                
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
                </Link>


            </td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default Orders