import styled from "styled-components"

export const FormStyles = styled.div`

.login-cont,.review-cont,.success-cont{
    margin: 20px 0;
    height: fit-content;
    display: flex;
    justify-content: center;
  }
  .form,.review-page,.success-page{
    height: fit-content;
    width: 450px;
    padding: 40px 40px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: -3px 3px 20px grey;
  }
  label{
    text-align: left;
    font-weight: 800;
    font-size: small;
  }
  .login-field{
    height: 40px;
    margin-bottom: 20px;
  }
  .login-err-msg{
    color: red;
    text-align: left;
  }
  .form-btns-cont{
    margin-top: 10px;
    display:flex;
    justify-content: flex-end;
  }
  .sbmt-btn,.form-prev-btn{
    width: 80px;
    border: none;
    height: 40px;
    border-radius: 5px;
    background-color: darkgray;
    color: white
  }
  .sbmt-btn{
    background-color: green;
    color: white;
    margin-left: 10px;
  }
  .login-form-terms{
   display: flex;
   justify-content: center;
  }
  .blueText{
    color: blue;
    font-weight: 600;
    border-bottom: 1px solid blue;
  }
  .review-page{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5,1fr);
    gap: 20px;
  }
  .review-text{
    font-size: large;
  }
  .review-value{
    font-size: larger;
    font-weight: 600;
    border-left: 1px solid black;
  }
  .form-btns-cont-grid{
    grid-area: 5 / 2 / 6 / 3;
  }
  .success-cont{
    flex-direction: column;
  }
  .success-icon{
    text-align: center;
    color: darkgreen;
    font-size: xx-large;
  }
  .success-icon{
    animation: rotate-scale-up-ver 1s ease-in-out 1 forwards; 
  }
  .success-text{
    margin-top: 20px;
    animation: font-up 1s ease-in-out 1 forwards;
    max-width: 100vw;
  }
  
  
  @keyframes rotate-scale-up-ver {
    0% {
       transform: scale(1) rotateY(0);
    }
    100% {
       transform: scale(2) rotateY(360deg);
    } 
  }
  @keyframes font-up {
    0% {
        transform: scale(1); opacity: 0;
    }
    100% {
        transform: scale(1.25); opacity: 1;
    } 
  }
`