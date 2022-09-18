import styled from '@emotion/styled';

export const ListCon = styled.ul`
display: flex;
    font-family: Ubuntu-Bold;
    flex-direction: column;
    font-size: 4vh;
    gap: 8px;
    padding: 0;
    

    li{
      font-size: 20px;
        display: flex;
    gap: 12px;
    align-items: center;
    list-style: none;
    color:rgb(64, 13, 80);
    justify-content: space-between;
    align-items:center;
    
    }

  li  button{
      
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

    :hover{
      border: 2px solid #E33A75;
    background-color: #5619B6;
    color: #BB35CA;
    }

    &:active{
    background-color: #82B1FF;   
    border:  1px solid #82B1FF;
        }

        @media (min-width: 420px) {
         
         padding: 8px;
      }

       @media (min-width: 768px) {
         
         padding: 8px 12px;
      }

      

    }

`;