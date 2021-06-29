import React, { useState } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";

const HeaderComponent = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Container>
        <Logo src="/images/8.png"></Logo>
        <Wrapper>
          <a>
            <img src="images/home-icon.svg" />
            <span>Home</span>
          </a>

          <a>
            <img src="images/search-icon.svg" />
            <span>Search</span>
          </a>

          <a>
            <img src="images/movie-icon.svg" />
            <span>Movies</span>
          </a>

          <a>
            <img src="images/series-icon.svg" />
            <span>Series</span>
          </a>

          <a>
            <img src="images/original-icon.svg" />
            <span>Original</span>
          </a>

          <a>
            <img src="images/watchlist-icon.svg" />
            <span>Watchlist</span>
          </a>
        </Wrapper>
        <UseAvartar>
          <img src="images/slider-badging.jpg" />
          <span>LogOut</span>
        </UseAvartar>
        <Menu onClick={handleShow} />
      </Container>

      {show ? (
        <>
          <SubMenu
            onClick={() => {
              setShow(!show);
            }}
          >
            <a>
              <img src="images/home-icon.svg" />
              <span>home</span>
            </a>

            <a>
              <img src="images/search-icon.svg" />
              <span>search</span>
            </a>

            <a>
              <img src="images/movie-icon.svg" />
              <span>Movies</span>
            </a>

            <a>
              <img src="images/series-icon.svg" />
              <span>series</span>
            </a>

            <a>
              <img src="images/original-icon.svg" />
              <span>original</span>
            </a>

            <a>
              <img src="images/watchlist-icon.svg" />
              <span>watchlist</span>
            </a>

            <SubUser>
              <img src="images/slider-badging.jpg" />
              <span>LogOut</span>
            </SubUser>
          </SubMenu>
        </>
      ) : null}
    </>
  );
};

export default HeaderComponent;

const SubUser = styled.div`
  display: flex;
  align-items: center;
  //height: 20px;
  margin-bottom: 30px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 3px;
  }
`;

const SubMenu = styled.div`
 width: 250px;
 height: 60%;
 background-color:#090b13;
 float: right;
 border-radius: 0 0 0 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
 cursor: pointer;
 //margin: 20px;
 
 


 img{
     height: 30px;
     display: flex;
     align-items: center;
     object-fit: cover;
 }

 a{
     display: flex;
     align-items: center;
     font-size: 12px;
     font-weight: bold;
     text-transform: uppercase;
     margin-bottom: 20px;
     opacity: 0.6;

     span{
       position: relative;
      
        &:after{
            content: "";
            height: 2px;
            background-color: white;
            position: absolute;
            opacity: 0;
            top: 20px;
            left: 0;
            bottom: 0;
            right: 0;
            transform: scaleX(1);
            transform-origin: left center;
            transition: all 350ms;
        }
     }
     &:hover{
         opacity: 1;
                span{
                    tranform: scaleX(1.08);
                     &:after{
                        opacity: 1;
                    }
         }
        
             
         }
     }
 }
`;

const Menu = styled(CgMenu)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 40px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 30px;
    color: white;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100vw;
    justify-content: space-between;
  }
`;
const UseAvartar = styled.div`
height: 60px;
//width: 20px;
display:flex;
justify-content: center;
flex-direction: column;
margin-right: 30px;

img{
    border-radius: 100%;
    object-fit: cover;
    width: 30px;
    height: 30px;
    width: 30px
    
}
span{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.6;
    text-transform: uppercase;
    transform: scaleX(1);
    transform-origin: left center;
    transition: all 350ms;
    position: relative;
    color: white;
    &:after{
        content: "";
        position: absolute;
        background-color: white;
        height: 2px;
        top: 16px;
        right:0;
        left: 0;
        bottom: 0;
        opacity: 0;
        transform: scaleX(1);
        transform-origin: left center;
        transition: all 350ms;


    }
    &:hover{
        opacity: 1;
        &:after{
            opacity 1;
            transform: scaleX(1.08)

        }
    }
}

@media screen and (max-width: 768px){
    display: none;
}

`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  margin: 30px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  //flex-direction: column;
  align-items: center;
  flex: 1;
  // background-color: red;

  a {
    display: flex;
    align-items: center;
    height: 60px;
    //background-color: blue;
    margin: 15px;

    img {
      display: flex;
      align-items: center;
      height: 25px;
    }

    span {
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      position: relative;
      opacity: 0.6;
      color: white;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: scaleX(1);
        transform-origin: center left;
        transition: all 380ms;
      }
    }
    &:hover {
      span {
        opacity: 1;
        &:after {
          opacity: 1;
          transform: scaleX(1.08);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
