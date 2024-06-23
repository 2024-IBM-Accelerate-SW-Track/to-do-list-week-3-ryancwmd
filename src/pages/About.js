import React, { Component } from "react";
import profile_pic from "../assets/profile_pic.jpg";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ryan Whittaker</div>
            <div className="brief_description">
            <ul>
                <li>Nice to meet you, I am Ryan Whittaker!</li>
                <li>I am studying Computer Science and Traditional
                    Mathematics at the University of Maryland College 
                    Park. Here, I am a part of a variety of clubs 
                    including the Korean Student Association, 
                    Vietnamese Student Association, and Terraformers.</li>
                <li>For fun I like to hangout with my friends and fam, 
                  especially when we are eating food.
                </li>
                <li>I also love to play video games including Minecraft, 
                  Valorant, and Brawl Stars.
                </li>
                <li>I play badminton for fun and also joined the badminton
                  club at UMD.
                </li>
                <li>This summer I am interning at Lumo Imaging in addition
                  to doing IBM Accelerate and CodePath.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
