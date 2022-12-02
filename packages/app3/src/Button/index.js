import styled from "styled-components";
import "./style.scss";

const Button = ({ className = "" }) => (
    <StyledButton className={ "funny-button " + className }>
        Hello from app1
    </StyledButton>
);
export default Button;

const StyledButton = styled.button`
  font-family: JeanSunHo;
  color: red;
  font-size: 50px;
  height: 80px;
`;