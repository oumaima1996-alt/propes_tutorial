import React from 'react'

const Profile = (props) => {
    const {fullName, bio, profession} = props.user
    return (
        <div>
            <h2 className = "name">Name : {fullName}</h2>
            <p className = "bio">Bio : {bio}</p>
            <p className = "prof">Profession:{profession}</p>
            <button onClick = {props.alert}>click</button>
            
        </div>
    )
}

export default Profile
