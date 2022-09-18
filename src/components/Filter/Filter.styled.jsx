import styled from '@emotion/styled';

export const Filters = styled.input`
position: relative;
min-width: 280px;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #BB35CA;
    outline: none;
    -webkit-transition: all 250ms cubic-bezier(0.215, 0.610, 0.355, 1);
    transition: all 250ms cubic-bezier(0.215, 0.610, 0.355, 1);

    :focus {
     outline: 2px solid #82B1FF;
    border: none;
    }

    @media (max-width: 420px) {
         min-width: 200px;
         
      }
`;

export const Label = styled.label`
font-family: Ubuntu-Bold;
    font-size: 20px;
    color: #82B1FF;
    line-height: 1.2;
    display: block;
    `;