import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
 gap: 28px;
 padding:24px 15px;
 list-style: none;
 margin: 0;
  
  a, .active{
    
    text-decoration: none;
     }

     .active{
        color: red;
        font-weight:bold;
     }

  li:hover{
    text-decoration: underline;
  }

  a{
    font-family: Ubuntu-Bold;
    font-size: 18px;
    font-weight: bolder;
  }
`;

