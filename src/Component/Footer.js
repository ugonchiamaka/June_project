import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

let date = new Date().getFullYear();

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <span>About Us</span>
          <Direct1>How it Work</Direct1>
          <Direct2>Testimonial</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of Services</Direct5>
        </Wrapper>

        <Wrapper>
          <span>Contact Us</span>
          <Direct1>How it Work</Direct1>
          <Direct2>Testimonial</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of Services</Direct5>
        </Wrapper>

        <Wrapper>
          <span>Videos</span>
          <Direct1>How it Work</Direct1>
          <Direct2>Testimonial</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of Services</Direct5>
        </Wrapper>

        <Wrapper>
          <span>Social Media</span>
          <Direct1>How it Work</Direct1>
          <Direct2>Testimonial</Direct2>
          <Direct3>Career</Direct3>
          <Direct4>Investor</Direct4>
          <Direct5>Terms of Services</Direct5>
        </Wrapper>
      </Container>
      <BottomTab>
        <Tab>
          <Logo src="" />
          <span>
            Developed by CodeLab 🧑‍🚀 | {date} All rights reserved 👽{" "}
          </span>
          <SocialLinks>
            <a
              href="https://www.facebook.com/groups/brighterdayscodelab/"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/peter_oti_code/" target="_blank">
              <FaInstagram />
            </a>

            <a
              href="https://studio.youtube.com/channel/ucjhvnjp4cfxBfKRbbtUUYAg/videos"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </SocialLinks>
        </Tab>
      </BottomTab>
    </Fragment>
  );
};

export default Footer;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  background-color: #040714;
  color: white;
  align-items: center;
  color: white;
`;

const BottomTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: darkblue;
  color: white;
  align-items: center;
`;

const SocialLinks = styled.div`
  font-size: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;
  a {
    color: white;
  }
`;

const Logo = styled.img``;

const Direct1 = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  text-align: left;
  width: 10rem;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Direct2 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  text-align: left;
  width: 10rem;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Direct3 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  text-align: left;
  width: 10rem;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Direct4 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  text-align: left;
  width: 10rem;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Direct5 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  text-align: left;
  width: 10rem;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #082567;
  color: white;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  font-weight: bold;
  flex-direction: column;

  span {
    margin-top: 20px;
    text-transform: uppercase;
  }
`;
