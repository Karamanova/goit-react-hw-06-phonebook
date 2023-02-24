import styled from 'styled-components';
export const FormContainer = styled.form`
display: flex;
justify-content: center;
`;
export const NameInput = styled.input`
width: 10rem;
height: 3rem;
padding: 10px;
margin-right: 15px;
border: none;
border-radius: 5px;
text-align: center;
`;
export const PhoneInput = styled.input`
width: 10rem;
height: 3rem;
padding: 10px;
border: none;
border-radius: 5px;
text-align: center;
`;
export const AddButton = styled.button`
width: 10rem;
height: 3rem;
display: block;
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
