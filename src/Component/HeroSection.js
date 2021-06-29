import styled from "styled-components";

const HeroSection = () => {
  return (
    <Container>
      <Hero
        src="video (4).mp4"
        type="video/mp4"
        autoPlay={true}
        loop={true}
        muted
      />

      <Wrapper>
        <Info>Know us Better</Info>
        <Info1>The loop attribute is a boolan attribute</Info1>
        <ButtonContainer>
          <Button1>Sign Up</Button1>
          <Button2>Know More</Button2>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  // background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  //position: relative;
  flex-direaction: column;
`;

const Hero = styled.video`
  // background-color: red;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Wrapper = styled.div`
  position: absolute;
  color: white;
`;

const Info = styled.div`
  color: white;
  font-size: 55px;
  padding-bottom: 0px;
`;

const Info1 = styled.div`
  color: white;
  font-size: 22px;
  padding-top: 0px;
  margin-top: 0px;
  letter-spacing: 0.3px;
`;

const ButtonContainer = styled.div`
  color: white;
  padding-top: 0px;
  margin-top: 2px;
  display: flex;
  width: 25rem;
  justify-content: center;
`;

const Button1 = styled.div`
  color: white;
  width: 10rem;
  background-color: #f69928;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 350ms;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    background-color: darkblue;
    color: white;
  }
`;

const Button2 = styled.div`
  color: white;
  width: 10rem;
  background-color: #082567;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 350ms;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    background-color: lavender;
    color: black;
  }
`;
