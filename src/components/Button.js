import styled from "styled-components"
export const ButtonContainer = styled.button`
                        background:transparent;
                        font-size:25px;
                        border: 1px solid var(--lightBlue);
                        border-color:${props=> props.cart?"var(--mainYellow)":"var(--lightBlue)"};
                        color: ${props=> props.cart?"var(--mainYellow)":"var(--lightBlue)"};
                        border-radius: 10px;
                        padding-left: 4px 6px;
                        transition: all 0.5s ease-in-out;
                        &:hover {
                            background: ${props=> props.cart?"var(--mainYellow)":"var(--lightBlue)"};
                            color: var(--mainBlue)
                        }
                        &:focus {
                            outline:none;
                        }
                        `;