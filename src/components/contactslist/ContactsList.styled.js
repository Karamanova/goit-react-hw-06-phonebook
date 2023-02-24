import styled from 'styled-components';
export const PhoneList = styled.ul`
margin: 0 auto;
padding: 20px;
`;
export const PhoneItem = styled.li`
list-style: none;
color: #FFFFFF;
`;
export const DeleteButton = styled.button`
width: 8rem;
height: 2rem;
background-color: #903DE8;
border: none;
border-radius: 5px;
text-align: center;
justify-content: center;
text-transform: uppercase;
margin: 10px;
cursor: pointer;
box-shadow: .3rem .3rem .6rem #c8d0e7, 
    -.2rem -.2rem .5rem white;
    cursor: pointer;
    transition: all .3s ease;
    :hover {
        color: #FFFFFF;
    }
    :active {
        box-shadow: inset .2rem .2rem .5rem #c8d0e7, 
        inset -.2rem -.2rem .5rem white;
    }
`;

