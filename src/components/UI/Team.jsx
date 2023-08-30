import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'
import team05 from '../../images/anirudhphot.png'

const teamMembers = [
    {
        imgUrl: team05,
        name: 'Anirudh Vallampatla',
        position:'Full Stack Developer'
    },
    {
        imgUrl: team02,
        name: 'Deepak Vallampatla',
        position:'Database Developer'
    },
    {
        imgUrl: team03,
        name: 'Anushna Vallampatla',
        position:'Data Scientist'
    },
    {
        imgUrl: team04,
        name: 'Swetha Vallampatla',
        position:'Backend Developer'
    },
]

const Team = () => {
  return (
    <section className='our_team'>
        <div className="container">
            <div className="team_content">
                <h6 className="subtitle">
                    <h2>Meet with <span className="highlight">our team</span></h2>
                </h6>
            </div>
            <div className="team_wrapper">
                {
                    teamMembers.map((item,index)=>(
                        <div className="team_item" key={index}>
                        <div className="team_img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="team_details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.position}</p>
                            <div className="team_member-social">
                                <span><i class="ri-linkedin-fill"></i></span>
                                <span><i class="ri-twitter-x-line"></i></span>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team
