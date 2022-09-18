import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: flex-start;
    padding: 12px;
    border: 3px solid #BB35CA;
    background-image: radial-gradient(circle at 30.52% 40.91%, #ffffff 0, #fcf6e6 25%, #f2e6cd 50%, #e9d6b4 75%, #e2c69e 100%);
    border-radius: 5px;

    & label{
    font-size: 3vh; 
    color: #82B1FF;  
    }

   
    & input {
        padding: 8px;
    min-width: 280px;
    width: 50%;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    border-radius: 5px;
    position: relative;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #BB35CA;
    outline: none;
    transition: all 250ms cubic-bezier(0.215, 0.610, 0.355, 1);

    :focus {
     outline: 2px solid #E33A75;
    border: none;
    }

     

     @media (max-width: 420px) {
         min-width: 200px;
         
      }

    }


`;

export const Button = styled.button`
   text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    border: 2px solid #BB35CA;
    background-color: #E33A75;
    color: #5619B6;
    font-family: Ubuntu-Bold;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.215, 0.610, 0.355, 1);

    &:hover,
    &:hover{
    border: 2px solid #E33A75;
    background-color: #5619B6;
    color: #BB35CA;
    }

    &:active{
    background-color: #82B1FF;   
    border:  1px solid #82B1FF;
        }

        @media (min-width: 420px) {
         min-width: 130px;
         padding: 8px;
      }

       @media (min-width: 768px) {
         min-width: 230px;
         padding: 8px 12px;
      }

      
`;

